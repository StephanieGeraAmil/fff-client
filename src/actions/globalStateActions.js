import * as actions from "../actionTypes";
import * as api from "../api.js";

export const setForm = (form) => async (dispatch) => {
  try {
    const action = { type: actions.SET_FORM, payload: form };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const unsetForm = () => async (dispatch) => {
  try {
    const action = { type: actions.UNSET_FORM };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const setUser = (user) => async (dispatch) => {
  try {
    const response = await api.findUserByEmail(user.email);
    //user found so I check if I have all the info and display the AddUserInfo form if I dont
    const action = { type: actions.SET_USER, payload: response.data.message };
    dispatch(action);
    // const action2 = { type: actions.SET_FORM, payload: { type: "AddUser" } };
    // dispatch(action2);
  } catch (error) {
    //user not found
    const action = { type: actions.SET_FORM, payload: { type: "AddUser" } };
    dispatch(action);
  }
};

export const createUser=(user)=>async(dispatch)=>{
    try {
        const {data}=await api.createUser(user);
        const action={type:actions.SET_USER, payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}
export const updateUser=(updatedUser)=>async(dispatch)=>{
    try {
        const {data}=await api.updateUser(updatedUser);
        const action={type:actions.SET_USER, payload:data};
        dispatch(action);   
    } catch (error) {
        console.log(error);
    }
}
