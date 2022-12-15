import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://dummyjson.com/products";

class FetchClass {
    fetchAllProducts = createAsyncThunk("products/fetchAllProducts",
    async () => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.products;
    });

    getOneProduct = createAsyncThunk("product/getOneProduct", 
    async (id) => {
        const res: Response = await fetch(`${URL}/${id}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchCategories = createAsyncThunk("category/fetchCategories", 
    async () => {
        const res: Response = await fetch(`${URL}/categories`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    getCategory = createAsyncThunk("catory/getCategory", 
    async (category) => {
        const res: Response = 
        await fetch(`${URL}/category/${category}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    searchProduct = createAsyncThunk("product/searchProduct", 
    async (searchTerm) => {
        const res: Response = 
        await fetch(`${URL}/search?q=${searchTerm}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });
};

export const API: FetchClass = new FetchClass();


