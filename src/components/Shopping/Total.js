import React from 'react'
import "../../App.css";
import TotalContext from '../../store/Total-Context';
import { useContext } from 'react';
const Total = () => {
  const Total = useContext(TotalContext);
  return (

          <div className="card">
          <h3>Total Component</h3>
          <hr/>
          <h2>Total: {Total}</h2>
        </div>
        )
  
}

export default Total