import React from 'react';
const headerStyle={
    border: "2px solid blue",
    color: "blue"
}
const HeaderSection = () => {
    console.log('this is from the header component!');
  return (
      <div style={headerStyle}>
          <h3>Displaying the header section!</h3>
      </div>
  )
};

export default HeaderSection;
