import "./globals.css";
import type { Metadata } from "next";
import { Amiri, Chau_Philomene_One } from "next/font/google";

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amiri',
});

const chau = Chau_Philomene_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-chau',
});

export const metadata: Metadata = {
  title: "Confeitaria Marcela",
  description: "Doces artesanais feitos com amor em Gama, Santa Maria e Valparaíso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${amiri.variable} ${chau.variable}`}>
      {/* Adicionamos o suppressHydrationWarning aqui no body! */}
      <body 
        className="bg-fundo text-secundaria font-serif antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}