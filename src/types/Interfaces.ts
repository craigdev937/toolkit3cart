export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: ICategory,
    thumbnail: string,
    images: string[]
};

export interface IProductState {
    products: IProduct[],
    loading: boolean,
    error?: Error | null
};

export interface ICart {
    product: IProduct,
    amount: number
};

export interface ICartState {
    cart: ICart[],
    cartStatus: boolean,
    detailStatus: boolean
};

export interface ICategory {
    category: string
};

export interface ICategoryState {
    categories: ICategory[],
    prodCategory: IProduct[],
    loading: boolean,
    error?: Error | null
};




