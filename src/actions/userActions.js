import * as actions from '../actionTypes'
import * as api from '../api.js';



export const createUser=(user)=>async(dispatch)=>{
  
    try {

        console.log('on create user action')
       
         const {data}=await api.createUser(user);
       
        const action={type:actions.CREATE_USER, payload:data};
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


