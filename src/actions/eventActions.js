import * as actions from '../actionTypes'
//import * as api from '../api.js';


export const updateUserInEvent=(updatedEvent)=>async(dispatch)=>{
//     try {    
//        await api.updateEvent(updatedEvent);
//        const {data}=await api.fetchEventsWithUserBelongingInfo(updatedEvent.userToAddOrRemove);
//         const action={type: actions.FETCH_EVENTS_WITH_USER_BELONGING_INFO,payload:data};
//         dispatch(action);           
//     } catch (error) {
//         console.log(error);
//     }
}


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


