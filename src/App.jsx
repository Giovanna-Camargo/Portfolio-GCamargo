import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Portfolio from "./components/Portfolio";
import Certificados from "./components/Certificados";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-ink min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Portfolio />
        <Certificados />
      </main>
      <Footer />
    </div>
  );
}
