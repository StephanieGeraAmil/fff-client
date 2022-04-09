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
export const getMessages=(chat_id)=>async(dispatch)=>{
     try {  
  
        const {data}=await api.fetchMessages(chat_id);
        
        const action={type: actions.FETCH_MESSAGES_FROM_CHAT,payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

}

export const clearMessages=()=>async(dispatch)=>{
     try { 
        const action={type: actions.CLEAR_MESSAGES};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

}

export const setMessages=(data)=>async(dispatch)=>{
     try {  
        const action={type: actions.SET_MESSAGES_FROM_CHAT,payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }
}
export const addMessage=(data)=>async(dispatch)=>{
     try {  
        const action={type: actions.ADD_MESSAGE_TO_CHAT,payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }
}


