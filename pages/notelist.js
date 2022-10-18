import { createClient } from 'contentful';
import NoteCard from '../components/NoteCard';
import NoteDetails from './notes/[slug]';
// first npm install contentful
// then import the above thing and then make the function as below.


// USELESS FILE NOW


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


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default function Notes({ notes }) {
  
  console.log(notes);
  
  return (
    //This key thing is actually quite important, as the console will throw an error if not.

    <div>

      <title>Notelist</title>

      <div>
        { notes.map(note => (
          <NoteCard key={note.sys.id} note={note} /> // The idea here is to have a recipe which is put into the component recipe for the RecipeCard component which then uses it to fetch the data, which keeps this file neat and cool.
        )) }
      </div>
      

    </div>
  )
}