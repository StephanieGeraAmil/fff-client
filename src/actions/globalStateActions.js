import * as actions from '../actionTypes'
import * as api from '../api.js';

export const setForm=(form)=>async(dispatch)=>{  
    try {
        const action={type:actions.SET_FORM, payload:form};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}
export const unsetForm=()=>async(dispatch)=>{  
    try {
        const action={type:actions.UNSET_FORM};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}
export const findUser=(userEmail)=>async(dispatch)=>{
       
    try {
        console.log(userEmail)
        const {data}=await api.findUserByEmail(userEmail);
        console.log(data)
        const action={type:actions.SET_USER, payload:data[0]};
        dispatch(action);
     
    } catch (error) {
        console.log(error);
    }
}