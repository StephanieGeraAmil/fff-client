import * as actions from '../actionTypes'
export default (current={user:null,form:null, chat:null}, action)=>{
    switch(action.type){
        case actions.SET_FORM:
        return {...current,form: action.payload};
         
        case actions.UNSET_FORM:
        return {...current,form: null};
         
        case actions.SET_USER:
        return {...current,user: action.payload};
       
           
        case actions.UNSET_USER:
        return {...current,user: null};

        case actions.SET_SELECTED_CHAT:
        return {...current,chat: action.payload};
         
        case actions.CLEAR_SELECTED_CHAT:
        return {...current,chat: null};



        default:
        return current;
    }


}