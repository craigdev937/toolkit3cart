import React from "react";
import "./AllProds.css";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI";

export const AllProds = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.products.loading);
    const error = useAppSelector((state) => state.products.error);
    const products = useAppSelector((state) => state.products.products);

    React.useEffect(() => {
        dispatch(API.fetchAllProducts());
    }, [dispatch]);

    if (error) return <h1>Error...{error.message}</h1>

    return (
        <React.Fragment>
            <main className="main">
                <h1 className="title">{loading ? "Loading" : "Products"}</h1>
                {products.map((product) => (
                    <section key={product.id}>
                        <h1>{product.title}</h1>
                        <img src={product.thumbnail} alt={product.title} />
                    </section>
                ))}
            </main>
        </React.Fragment>
    );
};


