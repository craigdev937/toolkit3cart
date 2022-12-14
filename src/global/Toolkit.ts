import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        products: () => "Products via Fetch!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



