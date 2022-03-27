// creating the global store for redux.. 

// import { createStore } from "redux";

/* 
    to create the local store we will use the createStore() method of Redux, 
    it returns the store object.. i.e, the global state
    for eex. 
    const store = createStore(reducer);
    in the above application the constant store will contain the created global store, it takes in only one argument which is a function which is considered as reducer .. 

    Note:- a reducer function will actually become the reducer when you pass it as an argument to the createStore() method 

    this means that we will have to create the reducer method first and then pass it to createStore() as an argument.. 

*/ 


const initialData = {
    products: [
        {pName:'Apple',price:30},
        {pName:'Banana',price:3},
        {pName:'Orange',price:10},
        {pName:'Grapes',price:8}
    ],
    cart: [],
    total: 0
}
/* 
In the below example, I am creating the reducer function which takes in two parameter.. 1st is State and 2nd is Action 

State- it contains the initial state.. like the inital state of the global data that we are making, state is going to contain that . 

and the reducer function will return the latest state..\
------ action ------
now this is the event handler for my global state changed.. 


*/
const productReducer = (state = initialData, action) => {
    console.log(action);
    if(action.type === "PURCHASE"){
        return{
            ...state,
            cart: [...state.cart, action.payLoad], 
            total: state.total + parseInt(action.payLoad.price) 
        }
        
    }
    if(action.type === "DELETE"){
        return {
            ...state,
            cart: state.cart.filter((i, index)=> index!== action.payLoad.index),
            total: state.total - action.payLoad.price
            
        }
    }
    
    // the first render for the action is going to return the initial state of the action too.. but as soon as I call the event listener(the dispatch method) in the select options change.. this action will be called and I have passed obj as payload there.. so it will be available here in the action . 
    console.log(state);
    return state;
    
}
/* 
the below function is the createStore method of Redux which is going to take reducer as an argument and as already discussed above, the reducer function has to be made before createStore function so that it can be passed to it.. 

basically store is created and it has the reducer function as an argument which has the initial state and which is going change on event 
*/
// const store = createStore(productReducer);

export default productReducer; 

/* 
Now the reducers are supposed to be more precised and in order to do that, we create multiple reducer for better understanding  
*/