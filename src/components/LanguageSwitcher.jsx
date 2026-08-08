import { useEffect, useRef, useState } from "react";
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import { languages } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onEscape(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const current = languages.find((l) => l.code === lang);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.idioma}
        className="flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-2 text-sm font-medium text-white/85 hover:border-white/40 hover:text-white transition-colors"
      >
        <FiGlobe size={15} />
        <span>{current?.short}</span>
        <FiChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-white/12 bg-surface2 shadow-lg z-50"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                  l.code === lang
                    ? "bg-brand-cta text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{l.label}</span>
                <span className="text-xs opacity-70">{l.short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}