import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllProducts = createAsyncThunk('get/getProduct', async () => {
    const response = await fetch('https://localhost:44358/api/Product/getall')
    const datas = await response.json();
    return datas.data
})
export const postProduct = createAsyncThunk('post/postProduct', async (productData) => {
    const response = await fetch('https://localhost:44358/api/Product/add', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    const data = await response.json();
    console.log(data.success);
    return data
})

const productReducer = createSlice({
    name: "product",
    initialState: {
        products: [],
        message: "",
        success: true,
        loading : false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postProduct.pending, (state, action) => {
              state.loading = true;
            })
            .addCase(postProduct.fulfilled, (state, action) => {
                state.loading = true
                state.products = [...state.products, action.payload];
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload;
            })

    },
});


export default productReducer.reducer