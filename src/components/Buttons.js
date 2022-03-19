import React from 'react';
const showBtnName = (e) => {
    console.log(e.target.textContent);
}
const Buttons = (props) => {
    console.log(props);
  return (
      <button onClick={showBtnName}>{props.buttonName}</button>
  )
};

export default Buttons;
