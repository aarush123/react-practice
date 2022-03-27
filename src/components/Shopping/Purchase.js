import React from 'react';
import "../../App.css";
import { useSelector, useDispatch } from 'react-redux';
/*
we use the useDispatch hook which is going to return the object which takes in two things.. 
const dispatch = useDispatch();
dispatch({
    type: "PURCHASE", -- my identifier
    payLoad: obj --- the information that I have to pass..
});

the dispatch method will be called on the event listener and it will be available in the reducer of the global store.. the second argument (action) that I have passed in the reducer method 

Now we have the data from the react-redux global store but how do we handle the event so that the data is changed,, in normal react we can pass the functions and everything as prop but in big/huge datasets.. we will have to use the useDispatch() hook of the react-redux... now this useDispatch() hook is going to take in obj which will have two values.. 

type: "PURCHASE",  ---- (so basically, this is the identifier for your conveniene... it has to be type only.. predefined from redux)
payLoad: obj, --this takes in the information that I want to pass which is obj in this case... it can be anything.. by convention we name it as payload.. 



*/
const Purchase = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.pr.products);
    const loginUser = useSelector(state=>state.lr.loginDetails);
    const selectChange = (e) => {
        let pName = e.target.options[e.target.selectedIndex].text;
        let price = e.target.value;
        let obj = {pName, price}
        // console.log(obj);
        dispatch({
            type: "PURCHASE", 
            payLoad: obj
        });
    }
    return (
    <div className="card">
        <h3>Purchase Component - User: {loginUser}</h3>
         <hr/>

        <select
            onChange={(e)=>selectChange(e)}
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