import classes from './MeetupDetails.module.css';

function MeetupDetails(props) {
  return (
    <div className={classes.container}>
      <img src={props.image} alt={`${props.title}`} className={classes.image} />
      <h1>{props.title}</h1>
      <h3>{props.address}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default MeetupDetails;