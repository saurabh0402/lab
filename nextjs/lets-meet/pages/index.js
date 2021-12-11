import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
  {
    id: 1,
    image: 'https://images.ctfassets.net/hspc7zpa5cvq/2R4dw4464nMTeqnZs4DemF/deb48860f73cb5228fe4fc7c293fbad4/JSConf_US.png',
    title: 'JS Conf',
    address: 'Carlsbad, CA',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8DZt4NEW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/j3b9qv0qq35a7s8on0dn.png',
    title: 'React Conf',
    address: 'Somewhere in world',
  },
];

function Home(props){
  return (
    <MeetupList meetups={props.meetups} />
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

  return {
    props: {
      meetups: MEETUPS,
    },
    revalidate: 3600,
  };
}

export default Home;