import React, { useEffect, useState } from "react";
import "./styles.css";
import Form from "./Form";
import MovieInfo from "./MovieInfo";

function App() {
  const [movieData, setMovieData] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  useEffect(() => {
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;

    const makeApiCall = async () => {
      let res = await fetch(movieUrl);
      let data = await res.json();
      console.log("movieData", data);
      setMovieData(data);
    };
    makeApiCall();
  }, [movieTitle]);

  const handleSubmit = (movieTitle) => {
    setMovieTitle(movieTitle);
    console.log("App - handleSubmit - title", movieTitle);
  };

  return (
    <div className="App">
      <div>Best Movie App Ever</div>
      <Form handleSubmit={handleSubmit} />
      <MovieInfo movie={movieData} />
    </div>
  );
}

export default App;
