import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./ProductSlice";
import { CategoryReducer } from "./CategorySlice";

export const Reducer = configureStore({
    reducer: {
        products: ProductReducer,
        category: CategoryReducer
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



