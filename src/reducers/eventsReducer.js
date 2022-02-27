import * as actions from '../actionTypes'
export default (events=[], action)=>{
    switch(action.type){
        case actions.CREATE_EVENT:
        return  [...events, action.payload];
        
        case actions.UPDATE_EVENT:
        return events.map((event)=>event._id===action.payload._id? action.payload: event);

        case actions.DELETE_EVENT:
        return events.filter((event)=>event._id!==action.payload);

        case actions.FETCH_ALL_EVENTS:
        return action.payload;
        
        default:
        return events;
    }


}