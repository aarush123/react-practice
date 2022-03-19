import React from 'react';
const footerStyle={
    border: "2px solid blue",
    color: "blue"
}
const FooterSection = () => {
    console.log('this is from the footer component!');
  return (
    <div style={footerStyle}>
    <h3>Displaying the Footer section!</h3>
</div>
  )
};

export default FooterSection;
