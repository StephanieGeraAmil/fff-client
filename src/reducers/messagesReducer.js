import * as actions from '../actionTypes'
export default (messages=[], action)=>{
    switch(action.type){
        case actions.CREATE_MESSAGE:
        return  [...messages, action.payload];
        
        case actions.UPDATE_MESSAGE:
        return messages.map((message)=>message._id===action.payload._id? action.payload: message);

        case actions.DELETE_MESSAGE:
        return messages.filter((message)=>message._id!==action.payload);


        case actions.FETCH_MESSAGES_FROM_CHAT:
        return action.payload;
        case actions.FETCH_ALL_MESSAGES:
        return action.payload;
          case actions.CLEAR_MESSAGES:
        return [];
        
        default:
        return messages;
    }


}