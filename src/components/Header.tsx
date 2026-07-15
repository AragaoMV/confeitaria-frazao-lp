"use client";
import { useMenu } from "../hooks/useMenu";

export function Header() {
  const { menuAberto, alternarMenu, fecharMenu } = useMenu();

  return (
    <>
      <header className="flex justify-between items-center p-6 bg-primaria text-white relative z-50 shadow-md">
        <div className="text-2xl font-bold font-sans">🍞 Logo Marcela</div>

        <button
          className="md:hidden text-3xl focus:outline-none p-2"
          onClick={alternarMenu}
          type="button"
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-6 font-semibold">
          <a href="#sobre" className="hover:text-primaria-superclara transition-colors">Sobre Nós</a>
          <a href="#catalogo" className="hover:text-primaria-superclara transition-colors">Catálogo</a>
          <a href="#pedir" className="hover:text-primaria-superclara transition-colors">Como Pedir</a>
          <a href="#contato" className="hover:text-primaria-superclara transition-colors">Contato</a>
        </nav>
      </header>

      {/* Fundo Escurecido */}
      {menuAberto && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={fecharMenu}
          role="button"       
          tabIndex={0}     
          aria-label="Fechar menu" 
        />
      )}

      {/* Menu Lateral Deslizante */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-fundo text-secundaria shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${menuAberto ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-6 border-b border-primaria-clara/30">
          <button onClick={fecharMenu} className="text-3xl text-primaria hover:text-secundaria transition-colors p-2" type="button">
            ✕
          </button>
        </div>

        <nav className="flex flex-col items-center py-8 space-y-6 text-lg font-bold font-sans">
          <a href="#sobre" onClick={fecharMenu}>Sobre Nós</a>
          <a href="#catalogo" onClick={fecharMenu}>Catálogo</a>
          <a href="#pedir" onClick={fecharMenu}>Como Pedir</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
        </nav>
      </div>
    </>
  );
}