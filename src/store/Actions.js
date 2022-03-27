export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const CHANGEUSER = "Change User";
export const validateUser = (selectedUser) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch({type: CHANGEUSER, payLoad: selectedUser})
        }, 5000);
    }
}