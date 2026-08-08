import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio-lang";
const SUPPORTED = Object.keys(translations);

function detectInitialLanguage() {
  if (typeof window === "undefined") return "pt";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {
    // localStorage indisponível — segue para detecção pelo navegador
  }
  const browserLang = (navigator.language || "pt").slice(0, 2);
  return SUPPORTED.includes(browserLang) ? browserLang : "pt";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignora erro de escrita (modo anônimo, etc.)
    }
  }, [lang]);

  const setLang = (code) => {
    if (SUPPORTED.includes(code)) setLangState(code);
  };

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    < LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}