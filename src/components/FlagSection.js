import React from 'react';

const FlagSection = ({flag}) => {
    console.log('this is from the flag part!');
  return (
      <h3>Flag: {flag.toString()}</h3>
  )
};

export default FlagSection;
