import React from 'react';
import "../../App.css";

const Purchase = ({products}) => {

    const selectChange = (e) => {
        console.log(e.target.value)
      }

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
    </div>
  )
}

export default Purchase