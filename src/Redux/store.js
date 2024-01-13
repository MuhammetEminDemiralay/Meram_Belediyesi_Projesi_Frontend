import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combineReducer";


export const store = configureStore({
    reducer : rootReducer
})

export default store
