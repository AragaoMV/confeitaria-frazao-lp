"use client";
import { useMenu } from "../hooks/useMenu";

export function Header() {
  const { menuAberto, alternarMenu, fecharMenu } = useMenu();

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="flex justify-between items-center p-6 bg-primaria text-white relative z-50 shadow-md">
        <div className="text-2xl font-bold font-sans">🍞 Logo Marcela</div>

        {/* --- MODO MOBILE: Botão Hambúrguer --- */}
        {/* A classe 'md:hidden' faz com que este botão DESAPAREÇA em telas de computador */}
        <button 
          className="md:hidden text-3xl focus:outline-none"
          onClick={alternarMenu}
        >
          ☰
        </button>

        {/* --- MODO WEB: Menu Tradicional --- */}
        {/* A classe 'hidden md:flex' faz com que ele inicie escondido no celular, mas vire um menu horizontal no computador */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <a href="#sobre" className="hover:text-primaria-superclara transition-colors">Sobre Nós</a>
          <a href="#catalogo" className="hover:text-primaria-superclara transition-colors">Catálogo</a>
          <a href="#pedir" className="hover:text-primaria-superclara transition-colors">Como Pedir</a>
          <a href="#contato" className="hover:text-primaria-superclara transition-colors">Contato</a>
        </nav>
      </header>

      {/* --- MODO MOBILE: Fundo Escurecido (Overlay) --- */}
      {/* Quando o menu abre, clicando no fundo preto transparente o menu se fecha */}
      {menuAberto && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={fecharMenu}
        />
      )}

      {/* --- MODO MOBILE: O Menu Lateral (Drawer) --- */}

      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-fundo text-secundaria shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 border-b border-primaria-clara/30">
          <button onClick={fecharMenu} className="text-3xl text-primaria hover:text-secundaria transition-colors">
            ✕
          </button>
        </div>

        <nav className="flex flex-col items-center py-8 space-y-6 text-lg font-bold font-sans">
          <a href="#sobre" onClick={fecharMenu} className="hover:text-primaria transition-colors">Sobre Nós</a>
          <a href="#catalogo" onClick={fecharMenu} className="hover:text-primaria transition-colors">Catálogo</a>
          <a href="#pedir" onClick={fecharMenu} className="hover:text-primaria transition-colors">Como Pedir</a>
          <a href="#contato" onClick={fecharMenu} className="hover:text-primaria transition-colors">Contato</a>
        </nav>
      </div>
    </>
  );
}