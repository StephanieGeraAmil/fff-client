import * as actions from '../actionTypes'
export default (events=[], action)=>{
    switch(action.type){
        case actions.DELETE_EVENT:
        return events.filter((event)=>event.id!==action.payload);

        // case actions.SET_USER_SUSCRIBED_TO_EVENT:
        // return action.payload;

        case actions.SET_EVENTS:
        return  action.payload;
         
        case actions.ADD_EVENT:
        return  [...events, action.payload];

        case actions.UPDATE_EVENT:{
            
        return events.map((event)=>event.id===action.payload.id? action.payload:event);
        }
        default:
        return events;
    }


}