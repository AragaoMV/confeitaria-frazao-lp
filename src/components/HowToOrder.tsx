import { MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiIfood } from "react-icons/si";

export function HowToOrder() {
  return (
    <section id="pedir" className="px-6 py-20 bg-primaria-superclara text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-secundaria mb-12">
          Onde e Como Pedir?
        </h2>
        
        {/* Painel de Eventos */}
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-12 border-l-8 border-primaria">
          <h3 className="text-3xl font-sans text-secundaria mb-4 flex items-center justify-center gap-3">
             Visite Nossa Barraca!
          </h3>
          <p className="text-lg font-serif text-secundaria/80">
            Sempre estamos presentes nas melhores feirinhas e eventos da região. 
            Acompanhe nossas redes sociais para saber onde estaremos no próximo final de semana e garanta seu doce fresco!
          </p>
        </div>

        {/* Botões de Ação com Ícones */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <a href="#" className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-sans text-xl shadow-md hover:bg-red-700 transition-colors">
            <SiIfood className="text-2xl shrink-0" />
            Pedir no iFood
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-sans text-xl shadow-md hover:bg-green-600 transition-colors">
            <FaWhatsapp className="text-2xl shrink-0" />
            Chamar no WhatsApp
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-sans text-xl shadow-md hover:opacity-90 transition-opacity">
            <FaInstagram className="text-2xl shrink-0" />
            Ver no Instagram
          </a>
        </div>

        {/* Cidades de Cobertura */}
        <div className="bg-fundo p-6 rounded-2xl border border-primaria-clara inline-block">
          <h3 className="font-sans text-2xl text-secundaria mb-4">Cidades de Cobertura (Delivery)</h3>
          
          <ul className="flex flex-wrap justify-center gap-4 text-lg font-serif text-secundaria">
            <li className="flex items-center gap-1.5 bg-white px-5 py-2 rounded-full shadow-sm">
              <MdLocationOn className="text-primaria text-xl" />
              Gama-DF
            </li>
            <li className="flex items-center gap-1.5 bg-white px-5 py-2 rounded-full shadow-sm">
              <MdLocationOn className="text-primaria text-xl" />
              Santa Maria-DF
            </li>
            <li className="flex items-center gap-1.5 bg-white px-5 py-2 rounded-full shadow-sm">
              <MdLocationOn className="text-primaria text-xl" />
              Valparaíso-GO
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}