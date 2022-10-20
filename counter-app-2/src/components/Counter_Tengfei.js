import "./Counter.css";
import { useState } from "react";
//import usestate from React.useState
function Counter(props) {
  const defaultCounterState = {
    count: 0,
    resetCount: 0,
    color: null,
  };
  const defaultActivityLog = [];
  const [counterObj, setCounterObj] = useState(defaultCounterState);
  const [activities, setActivities] = useState(defaultActivityLog);

  const handleIncrease = () => {
    //  console.log("Increase");
    //setCount(count + 1);
    let newActivities = [...activities];
    newActivities.push("Increase");
    setActivities(newActivities);
    let newCounterObj = { ...counterObj };
    newCounterObj.count++;
    newCounterObj.color = null;
    newCounterObj.color = "#90EE90";

    if (newCounterObj.count > 3) {
      handleRest();
    } else {
      setCounterObj(newCounterObj);
    }
  };
  const handleDecrease = () => {
    // console.log("Decrease");
    let newActivities = [...activities];
    newActivities.push("Decrease");
    setActivities(newActivities);
    let newCounterObj = { ...counterObj };
    newCounterObj.count--;
    newCounterObj.color = "Pink";

    if (newCounterObj.count < -3) {
      handleRest();
    } else {
      setCounterObj(newCounterObj);
    }
  };

  const handleRest = () => {
    //clone the counter object
    let newCounterObj = { ...counterObj };
    //set the new counter obj
    newCounterObj.resetCount++;
    //Increment the counter resetCount value
    newCounterObj.count = 0;
    setCounterObj(newCounterObj);
    //set count to 0
  };

  const lists = activities.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <>
      <span style={{ backgroundColor: counterObj.color }}>
        Current Count:{counterObj.count}
      </span>
      <div> Rset Count: {counterObj.resetCount}</div>
      <section>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleRest}> Reset</button>
      </section>
      <div>
        <ul>{lists}</ul>
      </div>
    </>
  );
}

export default Counter;
