import React from 'react'
import "../../App.css";
// import { useContext } from 'react';

import { useSelector } from 'react-redux';
const Total = () => {
  const Total = useSelector(state=>state.total);

  return (

          <div className="card">
          <h3>Total Component</h3>
          <hr/>
          <h2>Total: {Total}</h2>
        </div>
        )
  
}

export default Total