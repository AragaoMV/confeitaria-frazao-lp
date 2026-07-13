export function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 py-16 md:py-24 bg-fundo overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-primaria-superclara rounded-b-[50%] opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold font-sans text-secundaria mb-6 leading-tight">
            Doces artesanais feitos com <span className="text-primaria">amor</span> para você.
          </h1>
          <p className="text-lg md:text-xl text-secundaria/80 font-serif mb-8 max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Transformamos ingredientes simples em momentos inesquecíveis.
          </p>
          <a href="#catalogo" className="inline-block bg-secundaria text-fundo px-8 py-4 rounded-full font-sans text-xl hover:bg-secundaria/90 transition-transform hover:scale-105 shadow-lg">
            Ver Cardápio
          </a>
        </div>

        {/* Espaço para a Imagem */}
        <div className="flex-1 w-full">
          <div className="w-full aspect-square bg-primaria-clara rounded-full shadow-2xl flex items-center justify-center border-8 border-white overflow-hidden relative">
             <span className="text-secundaria font-sans text-lg absolute bg-white/50 px-4 py-2 rounded-lg">
               [ Inserir Foto do Doce Aqui ]
             </span>
             {/* Quando for colocar a imagem real, use a tag <Image /> do Next.js aqui */}
          </div>
        </div>
      </div>
    </section>
  );
}