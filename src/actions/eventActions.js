import * as actions from '../actionTypes';

export const deleteEvent=(event_id)=>async(dispatch)=>{
    try {  
        const action={type: actions.DELETE_EVENT,payload:event_id};
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

export const updateEvent=(event)=>async(dispatch)=>{
    try {
        const action={type: actions.UPDATE_EVENT,payload:event};
        dispatch(action);   
    } catch (error) {
        console.log(error);
    }
}


