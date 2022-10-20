import "./namecard.css";
import Arrow from "./Arrow.js";
import Sales from "./Sales.js";

function NameCard(props) {
  const masterData = props.objectPassed;
  console.log(masterData);
  return (
    <div className="namecard">
      <h1>{masterData.initials}</h1>
      <h1>{masterData.name}</h1>
      <h1>{masterData.handle}</h1>
      <Arrow inputs={masterData.increasing} />
      <Sales salesnum={masterData.numOfSales} />
      <h1>ONLINE</h1>
      <h1>PROFILE</h1>
    </div>
  );
}

export default NameCard;
