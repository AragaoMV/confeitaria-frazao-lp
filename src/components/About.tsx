import { MdSchool } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export function About() {
  return (
    <section id="sobre" className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* TÍTULO SUPERIOR (Mantém-se centralizado) */}
        <div className="flex justify-center mb-12 md:mb-24">
          <div className="relative inline-block text-center">
            <span className="absolute inset-x-[-10px] bottom-1 h-4 md:h-6 bg-primaria-clara/60 rounded-full -z-10"></span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-secundaria uppercase tracking-widest px-2">
              Sobre Nós
            </h2>
          </div>
        </div>

        {/* LAYOUT DE 2 COLUNAS */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* COLUNA ESQUERDA: Textos e Links (Agora alinhados à esquerda no mobile) */}
          {/* Mudámos de text-center para text-left */}
          <div className="w-full lg:w-1/2 flex flex-col text-left">
            
            <h3 className="text-2xl md:text-4xl font-sans font-bold text-secundaria uppercase mb-4 md:mb-6 leading-snug">
              Amor incondicional por criar doces artesanais
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg font-serif text-secundaria/80 mb-8 md:mb-10">
              <p>
                A Confeitaria Marcela nasceu do amor incondicional por criar doces artesanais. 
                Nosso foco é entregar sabor autêntico e qualidade impecável em cada detalhe.
              </p>
              <p>
                Desde o preparo cuidadoso na nossa cozinha até o momento em que a sobremesa chega 
                na sua casa ou engrandece o seu evento, cada passo é feito pensando em você.
              </p>
            </div>

            {/* Links Elegantes (Agora alinhados à esquerda com justify-start) */}
            <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 font-sans text-base md:text-lg font-bold">
              
              {/* Botão do Instagram (FontAwesome) */}
              <a href="#" className="text-secundaria hover:text-primaria transition-colors flex items-center justify-start gap-2 group w-fit">
                <FaInstagram className="text-xl md:text-2xl shrink-0" />
                Siga nosso Instagram 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>

              {/* Botão do Curso Hotmart (Google Material Design) */}
              <a href="#" className="text-secundaria hover:text-primaria transition-colors flex items-center justify-start gap-2 group w-fit">
                <MdSchool className="text-xl md:text-2xl shrink-0" />
                Curso na Hotmart
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>

            </div>
          </div>

          {/* COLUNA DIREITA: Grid de Imagens Assimétrico */}
          {/* Ajustámos a altura para 350px no mobile para ficar mais proporcional */}
          <div className="w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-[500px] grid grid-cols-2 gap-3 md:gap-4 mt-4 lg:mt-0">
            
            {/* Lado esquerdo do grid (2 fotos empilhadas) */}
            <div className="flex flex-col gap-3 md:gap-4 h-full">
              <div className="w-full h-1/2 bg-fundo rounded-sm flex items-center justify-center border border-primaria/20 shadow-sm relative overflow-hidden group">
                <span className="text-secundaria/60 font-sans text-xs md:text-sm z-10">[ Foto Menor 1 ]</span>
              </div>
              <div className="w-full h-1/2 bg-fundo rounded-sm flex items-center justify-center border border-primaria/20 shadow-sm relative overflow-hidden group">
                <span className="text-secundaria/60 font-sans text-xs md:text-sm z-10">[ Foto Menor 2 ]</span>
              </div>
            </div>

            {/* Lado direito do grid (1 foto grande vertical) */}
            <div className="w-full h-full bg-primaria-superclara rounded-sm flex items-center justify-center border border-primaria/20 shadow-sm relative overflow-hidden group">
               <span className="text-secundaria/80 font-sans text-xs md:text-sm z-10">[ Foto Grande Vertical ]</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}