import { applyMiddleware, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import RootReducer from "../reducers/RootReducer";

export default function ConfigStore() {

    return configureStore(RootReducer);
    //return createStore(RootReducer, applyMiddleware(thunk));
}