import * as actions from '../actionTypes'
import * as api from '../api.js';



export const createUser=(user)=>async(dispatch)=>{
  
    try {

      
        const action={type:actions.CREATE_USER, payload:user};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateUser=(updatedUser)=>async(dispatch)=>{
    try {
     
        const action={type:actions.UPDATE_USER, payload:updatedUser};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteUser=(user_id)=>async(dispatch)=>{
    try {
    
        const action={type: actions.DELETE_USER,payload:user_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}

export const findUser=(userEmail)=>async(dispatch)=>{
       
    try {
     
        const {data}=await api.findUserByEmail(userEmail.email);
       
        const action={type:actions.SET_USER, payload:data};
        dispatch(action);
     
    } catch (error) {
        console.log(error);
    }
}
