import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IProduct, IProductState } from "../types/Interfaces";

const initialState: IProductState = {
    products: [],
    loading: false,
    error: null
};

const ProductSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.fetchAllProducts.rejected.type, 
        (state, action: PayloadAction<IProductState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.fetchAllProducts.pending, (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.fetchAllProducts.fulfilled, 
        (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false,
            state.error = null,
            state.products = [...action.payload]
        }),
        builder.addCase(API.getOneProduct.rejected.type, 
        (state, action: PayloadAction<IProductState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getOneProduct.pending, (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.getOneProduct.fulfilled, 
        (state, action: PayloadAction<IProductState>) => {
            state.loading = false,
            state.error = null,
            state.products = action.payload.products
        })
    },
});

export const ProductReducer = ProductSlice.reducer;



