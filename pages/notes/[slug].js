import { createClient } from 'contentful';
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Skeleton from '../../components/Skeleton';
import SidebarNote from '../../components/SidebarNote';


// In this file, it's NOT placed inside a function like in index.js, because it's used twice.
const client = createClient({
  // This does actually work, even though the env file looks weird.
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});


export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'note' });

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
  const { items } = await client.getEntries({ content_type: 'note', 'fields.slug': params.slug });

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
    props: { note: items[0] },
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




export default function NoteDetails({ note }) {
  console.log(note);

  if(!note) {
    return <Skeleton/>
  }

  const { title, method } = note.fields;

  return (
    <div>
      <title>{ title }</title>

      <div className="pageset">
        <SidebarNote/>

        <div>
          <div>
              <h2>{ title }</h2>
          </div>
        
          <div>
              <div>{ documentToReactComponents(method, renderOption) }</div>
          </div>
        </div>


      </div>

    </div>
  )
}