"use client";
import { useState } from "react";
import { useCatalog } from "../hooks/useCatalog";

export function Catalog() {
    const { catalogData } = useCatalog();

    const [categoriaAtiva, setCategoriaAtiva] = useState(catalogData[0].title);
    const categoriaAtual = catalogData.find(cat => cat.title === categoriaAtiva) || catalogData[0];

    return (
        <section id="catalogo" className="px-3 sm:px-6 py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-5xl font-bold font-sans text-center text-secundaria mb-8 md:mb-12">
                    Nosso Cardápio
                </h2>

                {/* MENU DE CATEGORIAS */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-8 mb-8 md:mb-12 border-b-2 border-primaria-superclara/50 pb-2">
                    {catalogData.map((category) => (
                        <button
                            key={category.title}
                            onClick={() => setCategoriaAtiva(category.title)}
                            onTouchStart={() => setCategoriaAtiva(category.title)}
                            type="button"
                            className={`cursor-pointer touch-manipulation font-sans text-base sm:text-xl px-2 pb-2 transition-all relative ${categoriaAtiva === category.title
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

                {/* GRID DE PRODUTOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {categoriaAtual.items.map((product) => (
                        /* CARTÃO COMPLETO DO PRODUTO (Tudo unificado dentro dele) */
                        <div 
                            key={product.id} 
                            className="flex flex-col  border border-primaria/25 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow h-full"
                        >
                            {/* CONTEÚDO DO CARTÃO */}
                            <div className="flex flex-col flex-grow">
                                <h4 className="font-sans text-2xl sm:text-3xl text-secundaria font-bold mb-3 leading-tight">
                                    {product.name}
                                </h4>
                                 {/* IMAGEM DO PRODUTO */}
                            <div className="w-full aspect-video sm:aspect-square bg-white rounded-xl mb-5 flex items-center justify-center overflow-hidden relative shadow-inner border border-primaria/20 shrink-0">
                                <span className="text-secundaria/50 font-sans text-sm sm:text-base px-2 text-center">
                                    [ Foto da Massa {product.name} ]
                                </span>
                            </div>

                                {product.description && (
                                    <p className="font-serif text-base sm:text-lg text-secundaria/85 mb-5 leading-relaxed">
                                        {product.description}
                                    </p>
                                )}

                                {/* BLOCO DE RECHEIOS */}
                                {product.fillingsList && (
                                    <div className="mt-auto pt-4 border-t border-primaria/20 space-y-3 font-serif text-sm sm:text-base text-secundaria/90">
                                        {product.fillingsList.classicos && (
                                            <p className="leading-relaxed">
                                                <strong className="font-bold text-secundaria block sm:inline text-base">Recheios Clássicos: </strong>
                                                {product.fillingsList.classicos.join(", ")}
                                            </p>
                                        )}
                                        {product.fillingsList.especiais && (
                                            <p className="leading-relaxed">
                                                <strong className="font-bold text-secundaria block sm:inline text-base">Recheios Especiais: </strong>
                                                {product.fillingsList.especiais.join(", ")}
                                            </p>
                                        )}
                                        {product.fillingsList.premium && (
                                            <p className="leading-relaxed">
                                                <strong className="font-bold text-secundaria block sm:inline text-base">Recheios Premium: </strong>
                                                {product.fillingsList.premium.join(", ")}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* CASO SEJA UM PRODUTO SIMPLES COM PREÇO OU TAMANHO (Fallback para outras abas) */}
                                {(product.sizes || product.filling || product.price) && !product.fillingsList && (
                                    <div className="mt-auto pt-4 border-t border-primaria/20 space-y-2 font-serif text-sm sm:text-base text-secundaria/90">
                                        {product.sizes && (
                                            <p><strong className="font-bold text-secundaria">Tam:</strong> {product.sizes}</p>
                                        )}
                                        {product.filling && (
                                            <p><strong className="font-bold text-secundaria">Opções:</strong> {product.filling}</p>
                                        )}
                                        {product.price && (
                                            <p className="font-sans font-bold text-primaria text-lg sm:text-xl mt-2">{product.price}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* TABELA DE PESOS E TAMANHOS */}
                {categoriaAtual.sizeChart && (
                    <div className="mt-14 sm:mt-18 overflow-x-auto bg-fundo border border-primaria/25 p-5 sm:p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl sm:text-3xl font-sans text-secundaria font-bold mb-6 text-center md:text-left">
                            Pessoas e Tamanhos
                        </h3>
                        <table className="w-full text-left border-collapse font-serif text-base sm:text-lg text-secundaria/90">
                            <thead>
                                <tr className="border-b-2 border-primaria/30 text-secundaria text-base sm:text-xl font-sans">
                                    <th className="py-3 px-3 sm:px-4 font-bold whitespace-nowrap">Diâmetro (aro)</th>
                                    <th className="py-3 px-3 sm:px-4 font-bold">Fatias</th>
                                    <th className="py-3 px-3 sm:px-4 font-bold">Peso (aproximado)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoriaAtual.sizeChart.map((row, index) => (
                                    <tr key={index} className="border-b border-primaria/15 hover:bg-primaria/5 transition-colors">
                                        <td className="py-3.5 px-3 sm:px-4 font-bold text-secundaria whitespace-nowrap">{row.diameter}</td>
                                        <td className="py-3.5 px-3 sm:px-4">{row.slices}</td>
                                        <td className="py-3.5 px-3 sm:px-4">{row.weight}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* INFORMAÇÕES IMPORTANTES */}
                {categoriaAtual.importantInfo && categoriaAtual.importantInfo.length > 0 && (
                    <div className="mt-10 md:mt-14 bg-fundo border-l-4 border-primaria p-6 sm:p-8 rounded-r-2xl shadow-sm">
                        <h3 className="text-xl sm:text-2xl font-sans text-secundaria font-bold mb-4">
                            Informações Importantes
                        </h3>
                        <ul className="list-disc pl-5 md:pl-6 space-y-3 font-serif text-base sm:text-lg text-secundaria/85 marker:text-primaria">
                            {categoriaAtual.importantInfo.map((info, idx) => (
                                <li key={idx} className="leading-relaxed">{info}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </section>
    );
}