import React from 'react';
const buttonStyle={
    color: "white",
    width: "100px",
    height: "40px",
    backgroundColor: "#6a7d6f",
    border: "none",
    borderRadius: "5px",
}
const ChangeState = ({buttonText, click}) => {
    console.log('this is from the button component!');
  return (
    <div>
        <button onClick={click} style={buttonStyle}>{buttonText}</button>
    </div>
  )
};

export default ChangeState;