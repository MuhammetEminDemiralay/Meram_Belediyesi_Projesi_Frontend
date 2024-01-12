import { configureStore } from "@reduxjs/toolkit";
import products from "./Slices/ProductSlicer";

export const store = configureStore({
    reducer : {
        products
    }
})

export default store
