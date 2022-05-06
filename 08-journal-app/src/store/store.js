import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";

// const reducers = combineReducers({ authReducer });

export const store = configureStore({
  reducer: {
    authReducer,
  },
  devTools: true,
});
