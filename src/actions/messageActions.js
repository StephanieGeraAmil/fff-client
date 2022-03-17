import * as actions from '../actionTypes'
import * as api from '../api.js';

export const createMessage=(message)=>async(dispatch)=>{
  
    try {
        const {data}=await api.createMessage(message);
        const action={type:actions.CREATE_MESSAGE, payload:data};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const updateMessage=(updatedMessage)=>async(dispatch)=>{
    try {    
        await api.updateMessage(updatedMessage);
        const action={type:actions.UPDATE_MESSAGE, payload:updatedMessage};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const deleteMessage=(message_id)=>async(dispatch)=>{
    try {  
        const action={type: actions.DELETE_MESSAGE,payload:message_id};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

    
}
export const getMessages=()=>async(dispatch)=>{
     try {  
        const {data}=await api.fetchMessages();
        const action={type: actions.FETCH_ALL_MESSAGES,payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

}
