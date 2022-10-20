import React from "react";
import { useState } from "react";
function Form(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = value;
    console.log("STATE: formInput: ", val);
    props.onChildSubmit(val);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="please input something"
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
