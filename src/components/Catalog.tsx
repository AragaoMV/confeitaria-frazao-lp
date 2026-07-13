"use client";
import { useCatalog } from "../hooks/useCatalog";

export function Catalog() {
    const { catalogData } = useCatalog();

    return (
        <section id="catalogo" className="px-6 py-20 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold font-sans text-center text-secundaria mb-16">
                    Nosso Cardápio
                </h2>

                <div className="flex flex-col gap-16">
                    {catalogData.map((category) => (
                        <div key={category.title} className="flex flex-col">
                            {/* Título da Categoria */}
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-3xl font-sans text-secundaria whitespace-nowrap">
                                    {category.title}
                                </h3>
                                <div className="h-px bg-primaria-clara w-full"></div>
                            </div>

                            {/* Grid de Produtos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((product) => (
                                    <div key={product.id} className="bg-fundo p-6 rounded-2xl shadow-sm border border-primaria-superclara hover:shadow-md transition-shadow">
                                        <h4 className="font-sans text-2xl text-secundaria mb-2">{product.name}</h4>
                                        <div className="space-y-2 mt-4 text-secundaria/80 font-serif">
                                            <p className="text-sm bg-white inline-block px-3 py-1 rounded-full border border-primaria-clara">
                                                <span className="font-bold">Tamanho:</span> {product.sizes}
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-bold block">Recheio/Detalhes:</span>
                                                {product.filling}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}