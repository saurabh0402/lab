import MeetupList from "../components/meetups/MeetupList";

function Home(){
  const meetups = [
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

  return (
    <MeetupList meetups={meetups} />
  );
}

export default Home;