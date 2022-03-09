import * as actions from '../actionTypes'


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
