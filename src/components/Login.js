import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
const Login = () => {
    const login = useSelector(state=>state.lr.loginUsersState);
    const dispatch = useDispatch();
    const changeUser = (e) => {
        let selectedUser = e.target.options[e.target.selectedIndex].text;
        dispatch({
            type: "Change User", 
            payLoad: selectedUser
        })
    }
  return (
      <>
      <div className="card">
        <h3>Login Component</h3>
        <hr/>
        <select onChange={(e)=>changeUser(e)}>
            {
            login.map((userValue)=>{
                return(
                <option key={Math.random()} value={userValue}>{userValue}</option>
                )
            })
            }
        </select>
        </div>
    </>
  )
}

export default Login