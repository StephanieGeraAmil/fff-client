import * as actions from '../actionTypes'

export const createEvent=(event)=>async(dispatch)=>{
  
    try {
        const action={type:actions.CREATE_EVENT, payload:event};
        dispatch(action);       
    } catch (error) {
        console.log(error);
    }
}
export const updateEvent=(updatedEvent)=>async(dispatch)=>{
    try {    
        const action={type:actions.UPDATE_EVENT, payload:updatedEvent};
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
