"use client";
import { useState } from "react";
import { useCatalog } from "../hooks/useCatalog";

export function Catalog() {
    const { catalogData } = useCatalog();
    
    const [categoriaAtiva, setCategoriaAtiva] = useState(catalogData[0].title);
    const categoriaAtual = catalogData.find(cat => cat.title === categoriaAtiva) || catalogData[0];

    return (
        <section id="catalogo" className="px-2 sm:px-6 py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto">
                
                <h2 className="text-3xl md:text-5xl font-bold font-sans text-center text-secundaria mb-8 md:mb-12">
                    Nosso Cardápio
                </h2>

                {/* MENU DE CATEGORIAS (Corrigido para funcionar no clique) */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-12 mb-8 md:mb-10 border-b-2 border-primaria-superclara/50 pb-2">
                    {catalogData.map((category) => (
                        <button
                            key={category.title}
                            onClick={() => setCategoriaAtiva(category.title)}
                            type="button"
                            className={`font-sans text-sm sm:text-xl px-2 pb-2 transition-all relative ${
                                categoriaAtiva === category.title
                                    ? "text-secundaria font-bold"
                                    : "text-secundaria/60 hover:text-secundaria"
                            }`}
                        >
                            {category.title}
                            {categoriaAtiva === category.title && (
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-primaria rounded-t-md"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* GRID DE PRODUTOS: 3 colunas no celular (grid-cols-3) e 4 no desktop (lg:grid-cols-4) */}
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8">
                    {categoriaAtual.items.map((product) => (
                        
                        /* CARTÃO DO DOCE (Sempre em pé: flex-col) */
                        <div key={product.id} className="flex flex-col items-center sm:items-start group cursor-pointer bg-fundo sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                            
                            {/* ÁREA DA IMAGEM: Quadrada e no topo */}
                            <div className="w-full aspect-square bg-white rounded-md sm:rounded-xl mb-2 sm:mb-5 flex items-center justify-center overflow-hidden relative shadow-sm border border-primaria/20 shrink-0">
                                <span className="text-secundaria/50 font-sans text-[9px] sm:text-sm px-1 text-center">
                                    [ Foto ]
                                </span>
                            </div>

                            {/* INFORMAÇÕES DO DOCE (Textos minúsculos no mobile para caberem) */}
                            <div className="flex flex-col w-full text-center sm:text-left">
                                <h4 className="font-sans text-[11px] sm:text-2xl text-secundaria font-bold mb-1 sm:mb-3 leading-tight line-clamp-2">
                                    {product.name}
                                </h4>

                                <div className="space-y-1 font-serif text-[9px] sm:text-base text-secundaria/80">
                                    <p className="line-clamp-1">
                                        <span className="font-bold text-secundaria">Tam:</span> {product.sizes}
                                    </p>
                                    <p className="leading-snug line-clamp-2 sm:line-clamp-none">
                                        <span className="font-bold text-secundaria block sm:inline">Sabores:</span> {product.filling}
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}