import { Category } from "../models/Product";

export function useCatalog() {
    const catalogData: Category[] = [
        {
            title: "Pipocas Gourmet",
            items: [
                {
                    id: "p1",
                    name: "Pipoca de Leite Ninho",
                    sizes: "P (100g) | M (250g) | G (500g)",
                    filling: "Chocolate branco com leite em pó artesanal.",
                }
            ]
        },
        {
            title: "Bolos",
            items: [
                {
                    id: "b1",
                    name: "Bolo de Festa Decorado",
                    sizes: "15cm | 20cm | 25cm (Diâmetro)",
                    filling: "Brigadeiro gourmet e morangos frescos.",
                },
                {
                    id: "b2",
                    name: "Bolo de Festa Decorado",
                    sizes: "15cm | 20cm | 25cm (Diâmetro)",
                    filling: "Brigadeiro gourmet e morangos frescos.",
                },
            ]
        },
        {
            title: "Doces",
            items: [
                {
                    id: "d1",
                    name: "Brigadeiros Tradicionais",
                    sizes: "Unidade (20g) ou Cento",
                    filling: "Ao leite, meio amargo, ninho com nutella, paçoca e churros.",
                }
            ]
        },
        {
            title: "Doces Modelados",
            items: [
                {
                    id: "dm1",
                    name: "Doces Personalizados 3D",
                    sizes: "Unidade (Pedido mínimo de 10)",
                    filling: "Modelagem artística em pasta americana. Recheio de trufa de chocolate ou limão.",
                }
            ]
        }
    ];

    return {
        catalogData,
    };
}