import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { languages } from "../i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#certificados", label: "Certificados" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-nav transition-shadow ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.45)]" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#topo"
          className="font-display font-bold text-lg tracking-tight text-white"
        >
          GC<span className="text-white/50">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/85">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/gih-camarg0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-white/80 hover:text-white transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/giovanna-camargo-5092363a4/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-white/80 hover:text-white transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="#contato"
            className="rounded-full bg-brand-cta px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Contato
          </a>
          <LanguageSwitcher />
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-4 h-0.5 bg-white" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-white/90">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" onClick={() => setOpen(false)}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
