import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

import MeetupList from "../components/meetups/MeetupList";

function Home(props){
  return (
    <Fragment>
      <Head>
        <title>Let's Meet - All meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   // This runs on server on every request

//   const req = context.req;
//   const res = context.res;

//   console.log(req, res);

//   return {
//     props: {
//       meetups: MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // This is called during build process, and the data is "cached".
  // revalidate property tells it to refetch data after given seconds

  const client = await MongoClient.connect(process.env.DB_STRING);
  const meetupsCollection = client.db().collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}

export default Home;