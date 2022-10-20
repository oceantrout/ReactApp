import "./App.css";
import Form from "./Form.js";
import Giphy from "./Giphy.js";
import { useEffect, useState } from "react";

function App() {
  const [gifSrc, setGifSRC] = useState("");
  const key = "vgsBdbvbqqe1x0KLzFYeFoUsfkIg63Vn";
  const makeRandomAPICall = async () => {
    const gifSrc = `https:api.giphy.com/v1/gifs/random?api_key=${key}`;
    const res = await fetch(gifSrc);
    const json = await res.json();
    console.log("makeAPIcall", json.data);
    setGifSRC(json.data.images.downsized_large.url);
  };

  const makSearchableAPICall = async (val) => {
    const giphyUrl = `https:api.giphy.com/v1/gifs/search?api_key=${key}&q=${val}&limit=1`;
    const result = await fetch(giphyUrl);
    const json = await result.json();
    console.log(json.data[0].images.downsized_large.url);
    setGifSRC(json.data[0].images.downsized_large.url);
  };

  useEffect(() => {
    makeRandomAPICall();
  }, []);
  const handleSubmitFromChild = async (val) => {
    console.log("loggin as parent");
    console.log(val);
    makSearchableAPICall(val);
  };
  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form onChildSubmit={handleSubmitFromChild} />
      <Giphy imgSRC={gifSrc} />
    </div>
  );
}

export default App;
