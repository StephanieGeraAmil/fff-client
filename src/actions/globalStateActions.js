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

export const setUser=(userEmail)=>async(dispatch)=>{
       
    try {
     
        const {data}=await api.findUserByEmail(userEmail.email);
       
        const action={type:actions.SET_USER, payload:data};
        dispatch(action);
     
    } catch (error) {
        console.log(error); 
    }
}
