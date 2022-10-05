import { createClient } from 'contentful';
import NoteCard from '../components/NoteCard';
// first npm install contentful
// then import the above thing and then make the function as below.

export async function getStaticProps() {

  const client = createClient({
    // This does actually work, even though the env file looks weird.
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // just change type to notepost
  const res = await client.getEntries({ content_type: 'note' });


  return {
    props: {
      notes: res.items,
      revalidate: 1
    }
  }

}



export default function Notes({ notes }) {
  
  console.log(notes);
  
  return (
    //This key thing is actually quite important, as the console will throw an error if not.
    <div className="recipe-list">
      { notes.map(note => (
        <NoteCard key={note.sys.id} note={note} /> // The idea here is to have a recipe which is put into the component recipe for the RecipeCard component which then uses it to fetch the data, which keeps this file neat and cool.
      )) }
    </div>
  )
}