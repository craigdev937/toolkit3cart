import { TypedUseSelectorHook, useSelector, 
    useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./Toolkit";

// export const useAppDispatch: () => useDispatch<AppDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = 
    useSelector;


