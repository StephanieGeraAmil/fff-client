import * as actions from '../actionTypes'
export default (form=null, action)=>{
    switch(action.type){
        case actions.SET_FORM:
        return  action.payload;
        
       
        case actions.UNSET_FORM:
        return null;

    
        default:
        return form;
    }


}