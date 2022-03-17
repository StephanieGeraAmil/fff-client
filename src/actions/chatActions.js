import * as actions from '../actionTypes'
import * as api from '../api.js';

export const createChat=(chat)=>async(dispatch)=>{
  
    try {
        const {data}=await api.createChat(chat);
        const action={type:actions.CREATE_CHAT, payload:data};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const updateChat=(updatedChat)=>async(dispatch)=>{
    try {    
        await api.updateChat(updatedChat);
        const action={type:actions.UPDATE_CHAT, payload:updatedChat};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const deleteChat=(chat_id)=>async(dispatch)=>{
    try {  
        const action={type: actions.DELETE_CHAT,payload:chat_id};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

    
}
export const getChats=()=>async(dispatch)=>{
     try {  
        const {data}=await api.fetchChats();
        const action={type: actions.FETCH_ALL_CHATS,payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

}
