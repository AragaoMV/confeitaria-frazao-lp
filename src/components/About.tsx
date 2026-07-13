export function About() {
    return (
        <section id="sobre" className="px-6 py-20 bg-white text-center flex flex-col items-center">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold font-sans text-secundaria mb-8">
                    Sobre a Marcela
                </h2>
                <div className="w-24 h-24 bg-primaria mx-auto rounded-full mb-6 flex items-center justify-center shadow-inner">
                    <span className="text-3xl">👩‍🍳</span>
                </div>
                <p className="text-xl font-serif leading-relaxed text-secundaria/80 mb-10">
                    A Confeitaria Marcela nasceu do amor incondicional por criar doces artesanais.
                    Nosso foco é entregar sabor autêntico e qualidade impecável em cada detalhe,
                    desde o preparo cuidadoso na nossa cozinha até o momento em que a sobremesa chega
                    na sua casa ou engrandece o seu evento.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#" className="border-2 border-secundaria text-secundaria px-8 py-4 rounded-xl font-sans text-lg hover:bg-secundaria hover:text-fundo transition-colors">
                        Siga nosso Instagram
                    </a>
                    <a href="#" className="bg-secundaria text-fundo px-8 py-4 rounded-xl font-sans text-lg hover:bg-secundaria/90 shadow-md transition-colors">
                        Conheça meu Curso (Hotmart)
                    </a>
                </div>
            </div>
        </section>
    );
}