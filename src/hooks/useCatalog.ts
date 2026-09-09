// src/hooks/useCatalog.ts
import { CatalogCategory } from "../models/Product";

export function useCatalog() {

    const recheiosPadrao = {
        classicos: ["Brigadeiro", "Brigadeiro Branco", "Coco", "Maracujá", "Ninho"],
        especiais: ["Abacaxi c/ Coco", "Limão Siciliano", "Doce de leite", "Doce de leite c/ ameixa", "Ninho c/ morango"],
        premium: ["Frutas vermelhas", "Crème brûlée", "Ferrero", "Ninho c/ Nutella®", "Nozes"]
    };

    const catalogData: CatalogCategory[] = [
        {
            title: "Pipocas Gourmet",
            items: [
                {
                    id: "pipoca-250",
                    name: "Pote 250 ML",
                    description: "Escolha até 2 recheios. Recheios disponíveis: Bueno, Ninho, Ovomaltine, Nutella e Pistache.",
                    price: "R$ 20,00"
                },
                {
                    id: "pipoca-500",
                    name: "Pote 500 ML",
                    description: "Escolha até 2 recheios. Recheios disponíveis: Bueno, Ninho, Ovomaltine, Nutella e Pistache.",
                    price: "R$ 30,00"
                },
                {
                    id: "pipoca-1l",
                    name: "Pote 1 Litro",
                    description: "Escolha até 3 recheios. Recheios disponíveis: Bueno, Ninho, Ovomaltine, Nutella e Pistache.",
                    price: "R$ 45,00"
                }
            ],
            importantInfo: []
        },
        {
            title: "Bolos",
            items: [
                {
                    id: "bolo-baunilha",
                    name: "Baunilha",
                    description: "Massa leve e macia, com sabor delicado de baunilha. Um clássico irresistível que derrete na boca.",
                    fillingsList: recheiosPadrao
                },
                {
                    id: "bolo-chocolate",
                    name: "Chocolate",
                    description: "Massa delicada e aerada, totalmente balanceada, com cacau 100%. Sabor intenso e textura leve.",
                    fillingsList: recheiosPadrao
                },
                {
                    id: "bolo-redvelvet",
                    name: "Red Velvet",
                    description: "Um clássico sofisticado: Massa vermelha aveludada com toque de cacau e iogurte.",
                    fillingsList: recheiosPadrao
                }
            ],
            sizeChart: [
                { diameter: "13 cm", slices: "8 a 11", weight: "1 kg a 1,2 kg" },
                { diameter: "15 cm", slices: "14 a 17", weight: "1,5 kg a 1,7 kg" },
                { diameter: "18 cm", slices: "20", weight: "2 kg" },
                { diameter: "20 cm", slices: "25 a 30", weight: "2,5 kg a 3 kg" },
                { diameter: "23 cm", slices: "35 a 40", weight: "4 kg" },
                { diameter: "25 cm", slices: "45 a 50", weight: "5 kg" }
            ],
            importantInfo: [
                "Todas as encomendas devem ser confirmadas mediante pagamento antecipado (sinal ou valor integral).",
                "Alterações em sabores são incluídas como adicionais no valor total da encomenda.",
                "O prazo mínimo para realização de pedidos é de 48h horas de antecedência. (pedidos com prazo menor são sujeitos a taxa de urgência)",
                "Encomendas solicitadas com prazo inferior estarão sujeitas à disponibilidade da confeitaria.",
                "A entrega ou retirada deverá ser realizada no dia e horário previamente acordados.",
                "Alterações em pedidos confirmados só serão possíveis mediante consulta e disponibilidade."
            ]
        },
        {
            title: "Doces",
            items: [
                {
                    id: "doces-classicos",
                    name: "Doces Clássicos",
                    description: "Sabores: Amendoim, Brigadeiro, Brigadeiro Branco, Coco (Beijinho) e Ninho.",
                    price: "R$ 150,00 o cento"
                },
                {
                    id: "doces-especiais",
                    name: "Doces Especiais",
                    description: "Sabores: Churros, Coco e ameixa (Olho de sogra), Dois amores (Brigadeiro e brigadeiro branco), Maracujá, Morango (Nesquik) e Oreo.",
                    price: "R$ 170,00 o cento"
                },
                {
                    id: "doces-premium",
                    name: "Doces Premium",
                    description: "Sabores: Brigadeiro belga (Granulado nobre), Brigadeiro brûlée, Ferrero, Ninho c/ Nutella®, Nozes e Paçoca.",
                    price: "R$ 195,00 o cento"
                },
                {
                    id: "doces-personalizados",
                    name: "Doces Personalizados",
                    description: "Doces decorados e personalizados da maneira que você quiser para a sua celebração.",
                    price: "A partir de R$ 225,00 o cento"
                }
            ],
            importantInfo: [
                "Todas as encomendas devem ser confirmadas mediante pagamento antecipado (sinal ou valor integral).",
                "O prazo mínimo para realização de pedidos é de 3 (três) dias de antecedência.",
                "Encomendas solicitadas com prazo inferior estarão sujeitas à disponibilidade da confeitaria.",
                "Pedido mínimo por sabor (tradicionais): 50 unidades.",
                "Pedido mínimo (personalizados): 25 unidades.",
                "A entrega ou retirada deverá ser realizada no dia e horário previamente acordados.",
                "Alterações em pedidos confirmados só serão possíveis mediante consulta e disponibilidade."
            ]
        },
        {
            title: "Doces Modelados",
            items: [
                {
                    id: "modelado-cupcake",
                    name: "Cupcake",
                    description: "Cupcake com recheio de brigadeiro cremoso e aplique em pasta de leite em pó.",
                    price: "2D: R$ 20,00 | 3D: R$ 25,00"
                },
                {
                    id: "modelado-pao-de-mel",
                    name: "Pão de Mel",
                    description: "Cobertura de chocolate recheada com pão de mel e doce de leite cozido na panela de pressão.",
                    price: "2D: R$ 25,00 | 3D: R$ 32,00"
                },
                {
                    id: "modelado-palha-italiana",
                    name: "Palha Italiana",
                    description: "Cobertura de chocolate, recheada com palha italiana.",
                    price: "A partir de R$ 22,00"
                },
                {
                    id: "modelado-picole",
                    name: "Picolé",
                    description: "Cobertura de chocolate recheada com bolo e brigadeiro.",
                    price: "A partir de R$ 24,00"
                },
                {
                    id: "modelado-casinha",
                    name: "Casinha",
                    description: "Cobertura de chocolate, recheada com brownie e doce de leite.",
                    price: "A partir de R$ 25,00"
                },
                {
                    id: "modelado-pirulito",
                    name: "Pirulito",
                    description: "Cobertura de chocolate com apliques em pasta de leite em pó.",
                    price: "A partir de R$ 18,00"
                },
                {
                    id: "modelado-cone",
                    name: "Cone",
                    description: "Casquinha de sorvete, recheado com brigadeiro e blindada com cobertura de chocolate.",
                    price: "A partir de R$ 28,00"
                },
                {
                    id: "modelado-bombom-duplo",
                    name: "Bombom Duplo",
                    description: "Cobertura de chocolate dupla, recheada com brownie e doce de leite.",
                    price: "A partir de R$ 40,00"
                },
                {
                    id: "modelado-cilindro",
                    name: "Cilindro",
                    description: "Cobertura de chocolate, recheada com brownie e doce de leite.",
                    price: "A partir de R$ 42,00"
                },
                {
                    id: "modelado-cakepop",
                    name: "CakePop",
                    description: "Bolo misturado com leite condensado, banhado na cobertura de chocolate.",
                    price: "A partir de R$ 18,00"
                },
                {
                    id: "modelado-moldura",
                    name: "Moldura",
                    description: "Cobertura de chocolate com apliques em pasta de leite em pó.",
                    price: "A partir de R$ 20,00"
                },
                {
                    id: "modelado-mini-pao-de-mel",
                    name: "Mini Pão de Mel",
                    description: "Cobertura de chocolate recheada com pão de mel e doce de leite cozido na panela de pressão.",
                    price: "2D: R$ 15,00 | 3D: R$ 20,00"
                },
                {
                    id: "modelado-trufa-dupla",
                    name: "Trufa Dupla",
                    description: "Cobertura de chocolate recheada, com apliques em pasta de leite em pó.",
                    price: "A partir de R$ 16,00"
                },
                {
                    id: "modelado-trufa",
                    name: "Trufa",
                    description: "Cobertura de chocolate recheada, com apliques em pasta de leite em pó.",
                    price: "A partir de R$ 8,00"
                },
                {
                    id: "modelado-trufa-quadrada",
                    name: "Trufa Quadrada",
                    description: "Cobertura de chocolate recheada, com apliques em pasta de leite em pó.",
                    price: "A partir de R$ 8,00"
                }
            ],
            importantInfo: [
                "Todas as encomendas devem ser confirmadas mediante pagamento antecipado (sinal ou valor integral).",
                "O prazo mínimo para realização de pedidos é de 12 (doze) dias de antecedência.",
                "Encomendas solicitadas com prazo inferior estarão sujeitas à disponibilidade da confeitaria.",
                "Valores de itens variam de acordo com a complexidade da decoração.",
                "A entrega ou retirada deverá ser realizada no dia e horário previamente acordados.",
                "Alterações em pedidos confirmados só serão possíveis mediante consulta e disponibilidade."
            ]
        }
    ];

    return { catalogData };
}