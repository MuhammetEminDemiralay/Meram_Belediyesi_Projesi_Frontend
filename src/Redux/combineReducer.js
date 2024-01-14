import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlicer";
import  authReducer  from "./Slices/AuthSlice";


const rootReducer = combineReducers({
    product : productReducer,
    auth: authReducer,
})

export default rootReducer