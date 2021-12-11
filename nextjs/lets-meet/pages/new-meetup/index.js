import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const router = useRouter();

  async function saveMeetup(meetup) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title> Create a new Meetup </title>
      </Head>
      <NewMeetupForm onAddMeetup={saveMeetup} />
    </Fragment>
  );
}

export default NewMeetup;