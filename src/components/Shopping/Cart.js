import React from 'react'
import "../../App.css";

const Cart = ({itemChosen}) => {
  return (
    <div className="card">
        <h3>Cart Component</h3>
        <hr/>
        {itemChosen.map((product)=>{
          return(
            <ul key={Math.random()}>
            <li>{product.pName}</li>
            </ul>
          )
        })}
    </div>
  )
}

export default Cart