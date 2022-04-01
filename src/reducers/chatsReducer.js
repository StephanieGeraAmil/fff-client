import * as actions from '../actionTypes'
export default (chats=[], action)=>{
    switch(action.type){
        case actions.CREATE_CHAT:
        return  [...chats, action.payload];
        
        case actions.UPDATE_CHAT:
        return chats.map((chat)=>chat._id===action.payload._id? action.payload: chat);

        case actions.DELETE_CHAT:
        return chats.filter((chat)=>chat._id!==action.payload);

        case actions.FETCH_ALL_CHATS:
        return action.payload;

        // case actions.UNSET_CHATS:
        // return [];
        
        default:
        return chats;
    }


}