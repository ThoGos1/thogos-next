import { createClient } from 'contentful';
import RecipeCard from '../components/RecipeCard';
// first npm install contentful
// then import the above thing and then make the function as below.

export async function getStaticProps() {

  const client = createClient({
    // This does actually work, even though the env file looks weird.
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // just change type to notepost
  const res = await client.getEntries({ content_type: 'recipe' });


  return {
    props: {
      recipes: res.items,
      revalidate: 1
    }
  }

}



export default function Recipes({ recipes }) {
  
  console.log(recipes);
  
  return (
    //This key thing is actually quite important, as the console will throw an error if not.
    <div className="recipe-list">
      { recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} /> // The idea here is to have a recipe which is put into the component recipe for the RecipeCard component which then uses it to fetch the data, which keeps this file neat and cool.
      )) }
    </div>
  )
}