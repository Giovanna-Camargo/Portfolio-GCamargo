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
import ProjetoDetalhe from "./pages/ProjetoDetalhe";

function parseRoute() {
  const hash = window.location.hash;
  const devDetail = hash.match(/^#\/projetos\/dev\/(.+)$/);
  const designDetail = hash.match(/^#\/projetos\/design\/(.+)$/);

  if (devDetail) return { page: "detalhe", categoria: "dev", slug: devDetail[1] };
  if (designDetail) return { page: "detalhe", categoria: "design", slug: designDetail[1] };
  if (hash.startsWith("#/projetos/dev")) return { page: "dev" };
  if (hash.startsWith("#/projetos/design")) return { page: "design" };
  return { page: "home" };
}

export default function App() {
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    function onHashChange() {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="bg-ink min-h-screen font-body">
      <Navbar />
      <main>
        {route.page === "dev" && <ProjetosDev />}
        {route.page === "design" && <ProjetosDesign />}
        {route.page === "detalhe" && (
          <ProjetoDetalhe categoria={route.categoria} slug={route.slug} />
        )}
        {route.page === "home" && (
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
