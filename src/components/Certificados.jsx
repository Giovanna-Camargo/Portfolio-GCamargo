import { useMemo, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { categorias, certificados } from "../data/certificados";

export default function Certificados() {
  const [ativo, setAtivo] = useState("Todos");

  const filtrados = useMemo(
    () =>
      ativo === "Todos"
        ? certificados
        : certificados.filter((c) => c.categoria === ativo),
    [ativo]
  );

  return (
    <section id="certificados" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-xs text-magenta mb-4">certificados</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-2">
          Aprendizado contínuo
        </h2>
        <p className="text-white/60 mb-10">
          Filtre por área para encontrar o que é relevante para você.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setAtivo(cat)}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                ativo === cat
                  ? "bg-brand-cta text-white border-transparent"
                  : "border-white/15 text-white/70 hover:border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtrados.map((c) => (
            <a
              key={c.titulo}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-white/12 bg-surface p-5 hover:border-magenta/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="eyebrow text-[11px] text-muted">
                  {c.categoria}
                </span>
                <h3 className="font-display font-semibold text-base text-white mt-2 leading-snug">
                  {c.titulo}
                </h3>
                <p className="text-white/55 text-sm mt-2">
                  {c.instituicao} · {c.ano}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-magenta opacity-0 group-hover:opacity-100 transition-opacity">
                Ver certificado <FiExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
