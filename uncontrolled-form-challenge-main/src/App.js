/*
  Follow Step 1, 2, and 3 to complete this challenge. 
  By the end of Step 3, you have successfully implemented an uncontrolled form using useRef.

  Optional: If you wish to challenge yourself further, convert it to a controlled form (in another branch).
*/

import "./App.css";
import { useRef, useState } from "react"; // Step 1: Add useRef import

function App() {
  const [output, setOutput] = useState("");
  // Step 2: Declare two useRef instances for First Name and Last Name input
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 3: Capture the input from the two useRef and set it to the "output" state
    setOutput(inputRef1.current.value.concat(" ", inputRef2.current.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={inputRef1} type="text" placeholder="First Name" />
          <input ref={inputRef2} type="text" placeholder="Last Name" />
        </div>
        <div>
          <button>Display</button>
        </div>
        <div>{output}</div>
      </form>
    </>
  );
}

export default App;
