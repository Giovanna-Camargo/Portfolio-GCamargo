import { useMemo, useState } from "react";
import designImg from "../assets/project-design.jpg";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { projetosImagens } from "../data/projetosImagens";

const CATEGORY_ORDER = ["all", "convite", "apresentacao", "uiux"];

export default function ProjetosDesign() {
  const { t } = useLanguage();
  const p = t.projetosDesignPage;

  const [ativo, setAtivo] = useState("all");
  const filtrados = useMemo(
    () =>
      ativo === "all"
        ? p.items
        : p.items.filter((item) => item.categoria === ativo),
    [ativo, p.items]
  );

  return (
    <section className="px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        <a
          href="#/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
        >
          <FiArrowLeft size={16} /> {p.back}
        </a>

        <p className="eyebrow text-xs text-magenta mb-4">{p.eyebrow}</p>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl mb-2">
          {p.heading}
        </h1>
        <span className="block h-[3px] w-16 rounded-full bg-brand-cta mb-4" />
        <p className="text-white/60 max-w-xl mb-10">{p.subtitle}</p>

        {/* filtro por categoria */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              onClick={() => setAtivo(cat)}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                ativo === cat
                  ? "bg-brand-cta text-white border-transparent"
                  : "border-white/15 text-white/70 hover:border-white/40"
              }`}
            >
              {p.categories[cat]}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtrados.map((item) => {
            const paleta = item.paleta || [];
            const ferramentas = item.ferramentas || [];
            const imagem = projetosImagens.design?.[item.slug] || designImg;

            return (
              <a
                key={item.slug}
                href={`#/projetos/design/${item.slug}`}
                className="group flex flex-col rounded-xl border border-white/12 bg-surface overflow-hidden hover:border-magenta/50 transition-colors"
              >
                {/* capa com fundo desfocado + convite inteiro visível */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 scale-110 blur-xl opacity-40"
                    style={{
                      backgroundImage: `url(${imagem})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />

                  <div className="relative flex items-center justify-center h-full py-3">
                    <img
                      src={imagem}
                      alt={item.titulo}
                      className="max-h-full max-w-[85%] object-contain rounded shadow-lg group-hover:scale-[1.05] transition-transform duration-500"
                    />
                  </div>

                  {item.tipo && (
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-white border border-white/20">
                      {item.tipo}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cta" />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-sm text-white leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="text-white/55 text-xs mt-2 leading-relaxed line-clamp-2 flex-1">
                    {item.desc}
                  </p>

                  {/* paleta de cores em miniatura */}
                  {paleta.length > 0 && (
                    <div className="flex items-center gap-1.5 mt-3">
                      {paleta.slice(0, 4).map((cor) => (
                        <span
                          key={cor}
                          className="h-3.5 w-3.5 rounded-full border border-white/20"
                          style={{ backgroundColor: cor }}
                        />
                      ))}
                    </div>
                  )}

                  {/* ferramentas como tags pequenas */}
                  {ferramentas.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {ferramentas.slice(0, 2).map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-white/12 bg-surface2 px-2.5 py-1 text-[10px] text-white/70"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between gap-2">
                    {item.data && (
                      <span className="font-mono text-[10px] text-muted truncate">
                        {item.data}
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold text-white group-hover:border-magenta group-hover:text-magenta transition-colors shrink-0">
                      {p.viewMore} <FiArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        {filtrados.length === 0 && (
            <p className="text-white/40 text-sm text-center py-12">
              Nenhum projeto encontrado nessa categoria.
            </p>
          )
        }
      </div>
    </section>
  );
}