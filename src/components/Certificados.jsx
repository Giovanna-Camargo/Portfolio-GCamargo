import { useMemo, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { certificados } from "../data/certificados";
import { useLanguage } from "../context/LanguageContext";

const CATEGORY_ORDER = ["all", "tech", "management", "productivity", "creative"];

export default function Certificados() {
  const { t } = useLanguage();
  const c = t.certificados;
  const [ativo, setAtivo] = useState ("all");

  const filtrados = useMemo(
    () =>
      ativo === "all"
        ? certificados
        : certificados.filter((cert) => cert.categoriaId === ativo),
    [ativo]
  );

  return (
    <section id="certificados" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-xs text-magenta mb-4">{c.eyebrow}</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-2">
          {c.heading}
        </h2>
        <p className="text-white/60 mb-10">
          {c.subtitle}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORY_ORDER.map((catId) => (
            <button
              key={catId}
              onClick={() => setAtivo(catId)}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                ativo === catId
                  ? "bg-brand-cta text-white border-transparent"
                  : "border-white/15 text-white/70 hover:border-white/40"
              }`}
            >
              {c.categories[catId]}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtrados.map((cert) => (
            <a
              key={cert.titulo}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-white/12 bg-surface p-5 hover:border-magenta/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="eyebrow text-[11px] text-muted">
                  {c.categories[cert.categoriaId]}
                </span>
                <h3 className="font-display font-semibold text-base text-white mt-2 leading-snug">
                  {cert.titulo}
                </h3>
                <p className="text-white/55 text-sm mt-2">
                  {cert.instituicao} · {cert.ano}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-magenta opacity-0 group-hover:opacity-100 transition-opacity">
                {c.viewCertificate} <FiExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
