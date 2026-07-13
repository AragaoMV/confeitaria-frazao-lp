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
                }
            ]
        },
        {
            title: "Doces & Doces Modelados",
            items: [
                {
                    id: "d1",
                    name: "Brigadeiros Personalizados",
                    sizes: "Unidade (20g) ou Cento",
                    filling: "Ao leite, meio amargo, pistache. Modelagem em pasta americana.",
                }
            ]
        }
    ];

    return {
        catalogData,
    };
}