import React from 'react';


const CounterSection = ({counter}) => {
    console.log('this is from the counter component!');
  return (
      <div>
          <h3>Counter: {counter} </h3>
      </div>
  )
};

export default CounterSection;
