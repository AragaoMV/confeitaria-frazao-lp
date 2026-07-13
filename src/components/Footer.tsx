export function Footer() {
    return (
        <footer id="contato" className="bg-secundaria text-fundo px-6 py-12 text-center">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-left">
                    <h3 className="text-3xl font-sans mb-2 text-primaria-clara">Confeitaria Marcela</h3>
                    <p className="font-serif opacity-80">Doces artesanais feitos com amor.</p>
                </div>

                <div className="font-serif space-y-2">
                    <p>📧 contato@confeitariamarcela.com</p>
                    <p>📱 (61) 99999-9999</p>
                </div>

                <div className="flex gap-6 font-sans text-lg">
                    <a href="#" className="hover:text-primaria transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primaria transition-colors">Facebook</a>
                    <a href="#" className="hover:text-primaria transition-colors">TikTok</a>
                </div>
            </div>

            <div className="mt-12 pt-6 border-t border-fundo/20 font-serif text-sm opacity-60">
                © {new Date().getFullYear()} Confeitaria Marcela. Todos os direitos reservados.
            </div>
        </footer>
    );
}