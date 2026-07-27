"use client";
import Image from "next/image";
import { useMenu } from "../hooks/useMenu";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const { menuAberto, alternarMenu, fecharMenu } = useMenu();

  return (
    <>
      <header className="flex justify-between items-center px-4 sm:px-6 py-4 bg-primaria text-secundaria fixed top-0 left-0 w-full z-50 shadow-md">
        
        {/* ESQUERDA: Logo */}
        <div className="flex-1 flex justify-start items-center">
          <a href="#" className="relative flex items-center w-36 h-8 sm:w-44 sm:h-12 md:w-52 md:h-12">
            <Image
              src="/imagens/header/logo.png"
              alt="Logo Confeitaria Marcela"
              fill 
              className="object-contain scale-[1] md:scale-100 origin-left transition-all" 
              priority
            />
          </a>
        </div>

        {/* CENTRO: Navegação (Apenas Desktop) */}
        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-sans font-semibold text-sm lg:text-base">
          <a href="#sobre" className="hover:text-fundo transition-colors">Sobre Nós</a>
          <a href="#catalogo" className="hover:text-fundo transition-colors">Catálogo</a>
          <a href="#pedir" className="hover:text-fundo transition-colors">Como Pedir</a>
          <a href="#contato" className="hover:text-fundo transition-colors">Contato</a>
        </nav>

        {/* DIREITA: Menu Hambúrguer (Apenas Celular) */}
        <div className="flex-1 flex justify-end items-center">
          <button
            className="md:hidden hover:text-fundo transition-colors p-2 focus:outline-none"
            onClick={alternarMenu}
            type="button"
            aria-label="Abrir menu"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </header>

      {/* Fundo Escurecido do Menu Mobile */}
      {menuAberto && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={fecharMenu}
          role="button"       
          tabIndex={0}     
          aria-label="Fechar menu" 
        />
      )}

      {/* Menu Lateral Deslizante (Mobile) */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-fundo text-secundaria shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 border-b border-primaria-clara/30">
          <button onClick={fecharMenu} className="text-secundaria hover:text-primaria transition-colors p-2" type="button" aria-label="Fechar">
            <FiX size={28} />
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