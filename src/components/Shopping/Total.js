import React from 'react'
import "../../App.css";
// import { useContext } from 'react';
import { useSelector } from 'react-redux';


const Total = () => {
  const Total = useSelector(state=>state.pr.total);
  const loggedInUser = useSelector(state=>state.lr.loginDetails)
  return (
          <div className="card">
          <h3>Total Component - User: {loggedInUser}</h3>
          <hr/>
          <h2>Total: {Total}</h2>
        </div>
        )
  
}

export default Total