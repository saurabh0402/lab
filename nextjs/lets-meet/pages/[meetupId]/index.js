import { useRouter } from 'next/router';

import MeetupDetails from '../../components/meetups/MeetupDetails';

const MEETUP = {
  id: 1,
  image: 'https://images.ctfassets.net/hspc7zpa5cvq/2R4dw4464nMTeqnZs4DemF/deb48860f73cb5228fe4fc7c293fbad4/JSConf_US.png',
  title: 'JS Conf',
  address: 'Carlsbad, CA',
  description: 'An awesone conference about all things JavaScript',
};

function Details(props) {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  console.log(meetupId);

  return (
    <MeetupDetails {...props.meetup} />
  )
}

export async function getStaticPaths() {
  // Must be used when we have getStaticProps in a dynamic page
  // This should return all the dynamic paths so that static pages can be generated for all of them.

  // This will normally not be hardcoded but generated after fetching data from some DB.

  return {
    paths: [
      {
        params: {
          meetupId: '1',
        },
      }
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      meetup: {
        ...MEETUP,
        id: context.params.meetupId,
      },
    },
  };
}

export default Details;