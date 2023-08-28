// components/TourDate.js

function TourDate(props) {
  return (
    <div>
      <h2>{props.date}</h2>
      <p>{props.location}</p>
    </div>
  );
}

export default TourDate;