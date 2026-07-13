import { About } from "../components/About";
import { Catalog } from "../components/Catalog";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowToOrder } from "../components/HowToOrder";

export default function Home() {
  return (
    <main className="min-h-screen bg-fundo text-secundaria font-serif">
      <Header />
      <Hero />
      <Catalog />
      <HowToOrder />
      <About />
      <Footer />
    </main>
  );
}