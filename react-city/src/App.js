import { useState } from "react";
import imagesArr from "./components/imageArr";
import "./App.css";
import BigImage from "./components/bigImage";
import SmallImage from "./components/smallImage";

function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  console.log(bigImage);

  const handleClick = (imageUrl) => setBigImage(imageUrl);

  const images = imagesArr.map((image, index) => {
    return (
      <SmallImage
        id={image.city}
        src={image.img}
        alt={image.city}
        key={index}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <BigImage img={bigImage} />
      </div>
    </div>
  );
}

export default App;
