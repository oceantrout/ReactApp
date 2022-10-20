import React from "react";

function BigImage(props) {
  console.log(props.img);
  return (
    <img className="bigimage" src={props.img} id="bigimage" alt="bigImage" />
  );
}

export default BigImage;
