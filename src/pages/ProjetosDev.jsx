import { projetosImagens } from "../data/projetosImagens";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function ProjetosDev({ categoria, slug }) {
  const { t } = useLanguage();
  const p = t.projetosDevPage;

  const pageData =
    categoria === "dev" ? t.projetosDevPage : t.projetosDesignPage;
  const listVoltar = categoria === "dev" ? "#/projetos/dev" : "#/projetos/design";

  const projeto = pageData.items.find((item) => item.slug === slug);
  const imagem = projetosImagens[categoria]?.[slug];

  return (
    <section className="px-6 pt-40 pb-24">
      <div className="max-w-6xl mx-auto">
        <a
          href="#/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
        >
          <FiArrowLeft size={16} /> {p.back}
        </a>

        <p className="eyebrow text-xs text-magenta mb-4">{p.eyebrow}</p>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl mb-2">
          {p.heading}
        </h1>
        <span className="block h-[3px] w-16 rounded-full bg-brand-cta mb-4" />
        <p className="text-white/60 max-w-xl mb-12">{p.subtitle}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {p.items.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col rounded-xl border border-white/12 bg-surface overflow-hidden hover:border-magenta/50 transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imagem || imagem}
                  alt={item.titulo}
                  className="w-full h-36 object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cta" />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <span className="eyebrow text-[10px] bg-brand-cta bg-clip-text text-transparent">
                  DEV
                </span>
                <h3 className="font-display font-semibold text-sm text-white mt-1.5 leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-white/55 text-xs mt-2 leading-relaxed line-clamp-2 flex-1">
                  {item.desc}
                </p>

                <div className="mt-4 flex items-center justify-between gap-2">
                  {item.data && (
                    <span className="font-mono text-[10px] text-muted truncate">
                      {item.data}
                    </span>
                  )}

                  <a
                    href={`#/projetos/dev/${item.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-magenta hover:text-magenta transition-colors shrink-0"
                  >
                    {p.viewMore} <FiArrowRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}