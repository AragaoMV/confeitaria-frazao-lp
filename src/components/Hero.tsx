export function Hero() {
  return (
    <section className="w-full min-h-screen bg-fundo flex flex-col md:flex-row pt-24 md:pt-32 pb-16 md:pb-0 overflow-hidden">

      {/* CONTEÚDO DA ESQUERDA (Textos, Botão e Miniaturas) */}
      <div className="w-full md:w-1/2 px-6 flex justify-center items-center z-10 mb-16 md:mb-0">

        <div className="w-full max-w-lg xl:max-w-xl flex flex-col items-center md:items-start text-center md:text-left">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-secundaria mb-6 uppercase tracking-wider leading-tight">
            Bolos e <br className="hidden md:block" /> Sobremesas
          </h1>

          <p className="text-xl md:text-2xl text-secundaria/80 font-serif mb-10 max-w-md">
            Encante-se com o sabor, prove a magia das nossas criações artesanais.
          </p>

          <a href="#catalogo" className="inline-block bg-secundaria text-fundo px-10 py-4 rounded-md font-sans text-xl hover:bg-secundaria/90 transition-transform hover:scale-105 shadow-xl mb-16">
            Conheça nossos doces
          </a>

          {/* AS 3 MINIATURAS INFERIORES */}
          <div className="flex flex-row justify-center md:justify-start gap-3 sm:gap-6 w-full">

            {/* Miniatura 1 */}
            <div className="relative w-24 h-32 sm:w-32 sm:h-40 bg-white p-2 shadow-lg border border-primaria/40 transform -rotate-3 transition-transform hover:rotate-0">
              <div className="w-full h-full bg-primaria-clara flex items-center justify-center text-center p-2">
                <span className="text-secundaria text-xs font-bold">[ Foto 1 ]</span>
              </div>
            </div>

            {/* Miniatura 2 */}
            <div className="relative w-24 h-32 sm:w-32 sm:h-40 bg-white p-2 shadow-lg border border-primaria/40 transform rotate-3 translate-y-2 transition-transform hover:rotate-0">
              <div className="w-full h-full bg-primaria-clara flex items-center justify-center text-center p-2">
                <span className="text-secundaria text-xs font-bold">[ Foto 2 ]</span>
              </div>
            </div>

            {/* Miniatura 3 (Com o recorte) */}
            <div className="relative w-24 h-32 sm:w-32 sm:h-40 bg-white p-2 shadow-lg border border-primaria/40 rounded-tl-[30px] transform -translate-y-2 transition-transform hover:-translate-y-4">
              <div className="w-full h-full bg-primaria-clara flex items-center justify-center text-center p-2 rounded-tl-[24px]">
                <span className="text-secundaria text-xs font-bold">[ Foto 3 ]</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* A GRANDE CURVA DA DIREITA (Imagem Principal) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto bg-primaria-superclara rounded-tl-[100px] md:rounded-tl-[300px] flex items-center justify-center border-t-8 md:border-t-0 md:border-l-8 border-white shadow-2xl relative overflow-hidden">

        <span className="text-secundaria font-sans text-lg absolute bg-white/70 backdrop-blur-sm px-6 py-3 rounded-lg z-10 shadow-lg text-center mx-4">
          [ Foto Principal: Bolo Grande Aqui ]
        </span>
        {/* Quando for colocar a imagem real, use a tag <Image /> aqui com as classes: object-cover w-full h-full */}

      </div>

    </section>
  );
}