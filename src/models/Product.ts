export interface Fillings {
    classicos?: string[];
    especiais?: string[];
    premium?: string[];
}

export interface Product {
    id: string | number;
    name: string;
    description?: string;
    sizes?: string;       
    filling?: string;     
    fillingsList?: Fillings; 
    price?: string;
    image?: string;
}

export interface SizeChartRow {
    diameter: string;
    slices: string;
    weight: string;
}

export interface CatalogCategory {
    title: string;
    items: Product[];
    importantInfo: string[];     
    sizeChart?: SizeChartRow[];   
}