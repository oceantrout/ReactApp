import React from "react";
import "./MovieInfo.css";

function MovieInfo(props) {
  return (
    <div>
      <h3>Title:{props.movie.Title}</h3>
      <h3>Year: {props.movie.Year}</h3>
      <img
        src={props.movie.Poster}
        alt="Poster will be shown here"
        height="300px"
        width="200px"
      />
      <h3>Genre:{props.movie.Genre} </h3>
      <h4>Plot:{props.movie.Plot} </h4>
    </div>
  );
}

export default MovieInfo;
