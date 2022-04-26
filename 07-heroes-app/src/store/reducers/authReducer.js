import { authTypes } from "../types";

const initialState = {
  name: "",
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return {
        ...action.payload,
        isAuthenticated: true,
      };
    case authTypes.LOGOUT:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
