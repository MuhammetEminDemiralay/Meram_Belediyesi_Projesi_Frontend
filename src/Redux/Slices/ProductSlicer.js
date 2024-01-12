import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAllProducts = async () => {
    const response = await fetch('https://localhost:44358/api/Product/getall')
    const datas = await response.json();
    const data = datas.data;
    console.log(data);
    return data;
}

export const postToApi = createAsyncThunk('product/fetchPost', async (postData) => {
    const response = await fetch('https://localhost:44358/api/Product/add', {
        method : "POST",
        body : JSON.stringify(postData)
    })

    return response.json();
})

const productSlice = createSlice({
    name : "product",
    initialState : {
        products : []
    },
    reducers : {},
    extraReducer : {
        [fetchAllProducts.fulfilled] : (state, action) => {
            state.products = action.payload;
        },
        [postToApi.fulfilled] : ()
    }
})

export default productSlice.reducer