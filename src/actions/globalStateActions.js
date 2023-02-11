import * as actions from "../actionTypes";
import * as api from "../api.js";

export const setForm = (form) => async (dispatch) => {
  try {
    console.log(form);
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
    const { data } = await api.findUserByEmail(user.email);

    if (!data) {
      const action = { type: actions.SET_FORM, payload: { type: "AddUser" } };
      dispatch(action);
    } else {
      const action = { type: actions.SET_USER, payload: data.message };
      dispatch(action);
    }
  } catch (error) {
    console.log(error);
  }
};
