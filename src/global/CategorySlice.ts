import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { ICategory, ICategoryState, IProduct } from "../types/Interfaces";

const initialState: ICategoryState = {
    categories: [],
    prodCategory: [],
    loading: false,
    error: null
};

const CategorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.fetchCategories.rejected.type, 
        (state, action: PayloadAction<ICategoryState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.fetchCategories.pending, 
        (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.fetchCategories.fulfilled, 
        (state, action: PayloadAction<ICategory[]>) => {
            state.loading = false,
            state.error = null,
            state.categories = [...action.payload]
        }),
        builder.addCase(API.getCategory.rejected.toString(), 
        (state, action: PayloadAction<ICategoryState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getCategory.pending, 
        (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.getCategory.fulfilled, 
        (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false,
            state.error = null,
            state.prodCategory = [...action.payload]
        })
    },
});

export const CategoryReducer = CategorySlice.reducer;



