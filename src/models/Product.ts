export interface Product {
    id: string;
    name: string;
    sizes: string;
    filling: string;
}

export interface Category {
    title: string;
    items: Product[];
}