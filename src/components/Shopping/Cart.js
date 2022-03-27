import React from 'react';
import "../../App.css";
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const dispatch = useDispatch();
  const itemChosen = useSelector(state=>state.pr.cart);
  const loggedInUser = useSelector(state=>state.lr.loginDetails)
  const deleteLi = (index, price) => {
    console.log('function is called', index, price)
    dispatch({
      type: "DELETE",
      payLoad: {index, price}
    });
  }
  return (
    <div className="card">
        <h3>Cart Component - User: {loggedInUser}</h3>
        <hr/>
        {itemChosen.map((product, index)=>{
          return(
            <ul key={Math.random()}>
              <div className="delete_Item">
            <li>{product.pName}</li>
            <DeleteIcon 
            className="delete_icon"
            onClick={()=>deleteLi(index, product.price)}/>
            </div>
            </ul>
          )
        })}
    </div>
  )
}

export default Cart