import * as actions from '../actionTypes'
export default (users={list:[],logged:null}, action)=>{
    switch(action.type){
        case actions.CREATE_USER:
        return {...users, list:[...users.list, action.payload], logged:action.payload};
        
        case actions.UPDATE_USER:
        return {...users, list:users.list.map((user)=>user._id===action.payload._id? action.payload: user)};

        case actions.DELETE_USER:
        return {...users, list:users.list.filter((user)=>user._id!==action.payload)};

        case actions.FETCH_ALL_USERS:
        return {...users, list:action.payload};

        
        default:
        return users;
    }


}