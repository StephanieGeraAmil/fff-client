import * as actions from "../actionTypes";
export default (
  current = { user: null, form: null, filters: null },
  action
) => {
  switch (action.type) {
    case actions.SET_FORM:
      return { ...current, form: action.payload };

    case actions.UNSET_FORM:
      return { ...current, form: null };

    case actions.SET_FILTERS:
      return { ...current, filters: action.payload };

    case actions.UNSET_FILTERS:
      return { ...current, filters: null };

    case actions.SET_USER:
      return { ...current, user: action.payload };

    case actions.UNSET_USER:
      return { ...current, user: null };

    default:
      return current;
  }
};
