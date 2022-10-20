function Arrow(props) {
  if (props.inputs === true) {
    return <img src="/up.png" alt="error" height="30px"></img>;
  }
  if (props.inputs === false) {
    return <img src="/down.png" alt="error" height="30px"></img>;
  }
}

export default Arrow;
