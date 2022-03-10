import * as actions from '../actionTypes'
import * as api from '../api.js';

export const createEvent=(event)=>async(dispatch)=>{
  
    try {
        const {data}=await api.createEvent(event);
       
        const action={type:actions.CREATE_EVENT, payload:data};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const updateEvent=(updatedEvent)=>async(dispatch)=>{
    try {    
        const {data}=await api.updateEvent(updatedEvent);
        const action={type:actions.UPDATE_EVENT, payload:data};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const deleteEvent=(event_id)=>async(dispatch)=>{
    try {  
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
