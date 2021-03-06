import * as actions from '../actionTypes'
import * as api from '../api.js';

export const createEvent=(event)=>async(dispatch)=>{
  
    try {
        await api.createEvent(event);
       const {data}=await api.fetchEventsWithUserBelongingInfo(event.creator);
        const action={type: actions.FETCH_EVENTS_WITH_USER_BELONGING_INFO,payload:data};
        dispatch(action);   
    } catch (error) {
        console.log(error);
    }
}

export const updateEvent=(updatedEvent)=>async(dispatch)=>{
    try {    
        const updated=await api.updateEvent(updatedEvent);
        const action={type:actions.UPDATE_EVENT, payload:updated};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const updateUserInEvent=(updatedEvent)=>async(dispatch)=>{
    try {    
       await api.updateEvent(updatedEvent);
       const {data}=await api.fetchEventsWithUserBelongingInfo(updatedEvent.userToAddOrRemove);
        const action={type: actions.FETCH_EVENTS_WITH_USER_BELONGING_INFO,payload:data};
        dispatch(action);           
    } catch (error) {
        console.log(error);
    }
}


export const deleteEvent=(event_id)=>async(dispatch)=>{
    try {  
         await api.deleteEvent(event_id);
        const action={type: actions.DELETE_EVENT,payload:event_id};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

    
}
export const getEvents=()=>async(dispatch)=>{
     try {  
        const {data}=await api.fetchEvents();
        const action={type: actions.FETCH_ALL_EVENTS,payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

}
export const getEventsWithUserBelongingInfo=(user_id)=>async(dispatch)=>{
    try{ 
        const {data}=await api.fetchEventsWithUserBelongingInfo(user_id);
        const action={type: actions.FETCH_EVENTS_WITH_USER_BELONGING_INFO,payload:data};
        dispatch(action);     

    } catch (error) {
        console.log(error);
    }

}

export const setEvents=(data)=>async(dispatch)=>{
    try{ 
        const action={type: actions.SET_EVENTS,payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }

}

export const addEvent=(event)=>async(dispatch)=>{
    try {
        const action={type: actions.ADD_EVENT,payload:event};
        dispatch(action);   
    } catch (error) {
        console.log(error);
    }
}

export const updEvent=(event)=>async(dispatch)=>{
    try {
        const action={type: actions.UPD_EVENT,payload:event};
        dispatch(action);   
    } catch (error) {
        console.log(error);
    }
}


