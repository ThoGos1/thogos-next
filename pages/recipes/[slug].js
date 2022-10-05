import { createClient } from 'contentful';
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Skeleton from '../../components/Skeleton';


// In this file, it's NOT placed inside a function like in index.js, because it's used twice.
const client = createClient({
  // This does actually work, even though the env file looks weird.
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});


export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'recipe' });

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true // False = means that a 404 page will be shown if slug doesn't exist
  }
}


export async function getStaticProps({ params }) {
  // This returns an array, but there is only on this I know, don't worry about it
  const { items } = await client.getEntries({ content_type: 'recipe', 'fields.slug': params.slug });

  // This says if there isn't an item, aka recipie, then just redirect to the homepage.
  if(!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { recipe: items[0] },
    revalidate: 1 // This thing says that if data is change it will pull the new contentful data, but won't change if the page is visited within 1 second.
  }

}




  
const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (<Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
        />)
      }
    }
}




export default function RecipeDetails({ recipe }) {
  //console.log(recipe);

  if(!recipe) {
    return <Skeleton/>
  }

  const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields;

  return (
    <div>
        <div className='banner'>
            <Image src={ 'https:' + featuredImage.fields.file.url }
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}/>
            
            <h2>{ title }</h2>
        </div>

        <div className='info'>
            <p>Takes about { cookingTime } mins to cook</p>
            <h3>ingredients</h3>

            {ingredients.map(ing => (     // this works as a loop over all ingredients and then maps out each ingredient to the variable "ing"
                <span key={ ing }>{ ing }</span>
            ))}
        </div>
        
        <div className='method'>
            <div>{ documentToReactComponents(method, renderOption) }</div>
        </div>

    </div>
  )
}