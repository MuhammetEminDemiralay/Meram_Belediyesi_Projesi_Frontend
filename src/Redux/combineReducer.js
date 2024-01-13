import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlicer";


const rootReducer = combineReducers({
    product : productReducer,
})

export default rootReducer