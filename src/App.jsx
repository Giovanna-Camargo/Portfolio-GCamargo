import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Portfolio from "./components/Portfolio";
import Certificados from "./components/Certificados";
import Footer from "./components/Footer";
import ProjetosDev from "./pages/ProjetosDev";
import ProjetosDesign from "./pages/ProjetosDesign";

function getPageFromHash() {
  const hash = window.location.hash;
  if (hash.startsWith("#/projetos/dev")) return "dev";
  if (hash.startsWith("#/projetos/design")) return "design";
  return "home";
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    function onHashChange() {
      setPage(getPageFromHash());
      window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="bg-ink min-h-screen font-body">
      <Navbar />
      <main>
        {page === "dev" && <ProjetosDev />}
        {page === "design" && <ProjetosDesign />}
        {page === "home" && (
          <>
        <Hero />
        <Sobre />
        <Habilidades />
        <Portfolio />
        <Certificados />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
