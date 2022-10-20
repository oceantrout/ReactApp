import React from "react";

function SmallImage(props) {
  return (
    <img
      className="thumb"
      id={props.city}
      src={props.src}
      alt={props.city}
      onClick={() => props.handleClick(props.src)}
    />
  );
}

export default SmallImage;
