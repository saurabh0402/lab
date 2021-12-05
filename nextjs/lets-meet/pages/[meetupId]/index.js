import { useRouter } from 'next/router';

import MeetupDetails from '../../components/meetups/MeetupDetails';

function Details() {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  const details = {
    id: 1,
    image: 'https://images.ctfassets.net/hspc7zpa5cvq/2R4dw4464nMTeqnZs4DemF/deb48860f73cb5228fe4fc7c293fbad4/JSConf_US.png',
    title: 'JS Conf',
    address: 'Carlsbad, CA',
    description: 'An awesone conference about all things JavaScript',
  };

  return (
    <MeetupDetails {...details} />
  )
}

export default Details;