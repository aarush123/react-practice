
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import LoginReducer from './store/LoginReducer';
import ProductReducer from './store/ProductReducer';
const rootStore = combineReducers({
  lr: LoginReducer,
  pr: ProductReducer
})
const store = createStore(rootStore);

/* 
Here I am importing the Provider function react redux which has to be wrapped around the entire App.js component so that I can access the global store on any level of the entire project.. 
it takes in store as a prop which is the global store object.. 

and to access the store react-redux has two hooks.. useSelector() or useStore()
*/
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
