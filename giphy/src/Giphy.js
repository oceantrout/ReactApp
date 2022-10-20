function Giphy(props) {
  let imageSRC = props.imgSRC;
  return (
    <div>
      <img className="Giphy" src={imageSRC} alt="random"></img>
    </div>
  );
}

export default Giphy;
