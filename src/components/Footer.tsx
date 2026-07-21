import Image from "next/image"; 
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export function Footer() {
    return (
        <footer id="contato" className="bg-secundaria text-fundo pt-16 pb-8 px-6">
            
            {/* CONTEÚDO PRINCIPAL DO FOOTER (Colunas) */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">

                <div className="flex flex-col text-left md:w-1/3">
                    <Image 
                        src="/imagens/footer/monograma.png" 
                        alt="Monograma Confeitaria Marcela" 
                        width={120} 
                        height={120} 
                        className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] mx-auto md:mx-0 object-cover mb-5 border-2" 
                    />

                    <h3 className="text-3xl font-sans mb-4 text-primaria-clara">Confeitaria Marcela</h3>
                    <p className="font-serif opacity-80 mb-8 md:mb-10">
                        Doces artesanais feitos com amor. Entregamos o melhor da confeitaria na sua cidade,
                        trazendo alegria para o seu dia a dia.
                    </p>

                    <div className="font-serif text-sm opacity-60 space-y-1 mt-auto">
                        <p>© {new Date().getFullYear()} Confeitaria Marcela.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>
                </div>

                {/* COLUNA DIREITA: Grid com Contatos e Links */}
                <div className="grid grid-cols-2 gap-6 md:gap-16 md:w-auto mt-6 md:mt-0">

                    {/* Coluna de Contato */}
                    <div className="flex flex-col text-left">
                        <h4 className="font-sans text-lg md:text-xl font-bold mb-4 md:mb-6 text-primaria-clara">Contato</h4>

                        <div className="font-serif space-y-2 opacity-90 mb-6 text-sm md:text-base">
                            <p>contato@confeitariamarcela.com</p>
                            <p>+55 (61) 99999-9999</p>
                        </div>

                        {/* Ícones Sociais */}
                        <div className="flex gap-3 mt-auto">
                            <a href="#" className="bg-fundo text-secundaria p-2.5 rounded-full hover:bg-primaria hover:text-fundo transition-colors">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="bg-fundo text-secundaria p-2.5 rounded-full hover:bg-primaria hover:text-fundo transition-colors">
                                <FaFacebook size={18} />
                            </a>
                            <a href="#" className="bg-fundo text-secundaria p-2.5 rounded-full hover:bg-primaria hover:text-fundo transition-colors">
                                <FaTiktok size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Coluna de Navegação */}
                    <div className="flex flex-col text-left">
                        <h4 className="font-sans text-lg md:text-xl font-bold mb-4 md:mb-6 text-primaria-clara">Navegação</h4>
                        <nav className="flex flex-col gap-3 font-serif opacity-90 text-sm md:text-base">
                            <a href="#sobre" className="hover:text-primaria transition-colors w-fit">Sobre Nós</a>
                            <a href="#catalogo" className="hover:text-primaria transition-colors w-fit">Catálogo</a>
                            <a href="#pedir" className="hover:text-primaria transition-colors w-fit">Como Pedir</a>
                        </nav>
                    </div>

                </div>
            </div>

            {/* BARRA INFERIOR: Seus Créditos de Desenvolvedor */}
            <div className="max-w-6xl mx-auto border-t border-fundo/20 pt-8 mt-4 flex flex-col items-center justify-center text-center">
                <p className="text-primaria-clara font-bold text-sm md:text-base tracking-wide">
                    Desenvolvido por Marcos Aragão
                </p>
                <p className="text-primaria-clara/70 text-xs md:text-sm mt-1 font-serif">
                    Contato: aragaomvs@gmail.com
                </p>
            </div>

        </footer>
    );
}