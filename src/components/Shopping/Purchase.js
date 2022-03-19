import React from 'react';
import "../../App.css";


const Purchase = ({selectChange, products}) => {
    
    return (
    <div className="card">
        <h3>Purchase Component</h3>
         <hr/>

        <select
            onChange={selectChange}
        >
            {products.map((product, index)=>{
                return <option
                    value={product.price}
                    key={index}
                >
                    {product.pName} - ${product.price}
                    </option>
            })}
        </select> 

        {/* <TotalContext.Consumer>
            {(demo)=>{
                return(
                    <div>This value is from the global Context : {demo}</div>
                )
            }}
        </TotalContext.Consumer> */}
    </div>
  )
}

export default Purchase