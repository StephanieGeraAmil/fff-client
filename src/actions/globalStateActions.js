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
    const action = { type: actions.SET_USER, payload: response.data.message };
    dispatch(action);
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

export const setFilters = (filters) => async (dispatch) => {
  try {
    const action = { type: actions.SET_FILTERS, payload: filters };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const unsetFilters = () => async (dispatch) => {
  try {
    const action = { type: actions.UNSET_FILTERS };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
