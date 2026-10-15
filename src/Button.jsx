
function Button(props) {
  return (
    <button
      onClick={props.showAlert}
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      Hello
    </button>
  );
}

export default Button;
