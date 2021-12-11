import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetails from '../../components/meetups/MeetupDetails';

function Details(props) {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  return (
    <Fragment>
      <Head>
        <title>Meetup details - {props.meetup.title}</title>
      </Head>
      <MeetupDetails {...props.meetup} />
    </Fragment>
  )
}

export async function getStaticPaths() {
  // Must be used when we have getStaticProps in a dynamic page
  // This should return all the dynamic paths so that static pages can be generated for all of them.

  const client = await MongoClient.connect(process.env.DB_STRING);
  const meetupsCollection = client.db().collection('meetups');

  const meetups = await meetupsCollection.find({}, {
    _id: 1,
  }).toArray();

  client.close();
  return {
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString(),
      }
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(process.env.DB_STRING);
  const meetupsCollection = client.db().collection('meetups');

  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(context.params.meetupId),
  });

  client.close();

  return {
    props: {
      meetup: {
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      },
    },
  };
}

export default Details;