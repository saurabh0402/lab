import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  return (
    <NewMeetupForm onAddMeetup={console.log} />
  );
}

export default NewMeetup;