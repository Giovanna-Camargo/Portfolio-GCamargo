import devImg from "../assets/project-dev.jpg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function ProjetosDev() {
  const { t } = useLanguage();
  const p = t.projetosDevPage;

  return (
    <section className="px-6 pt-40 pb-24">
      <div className="max-w-6xl mx-auto">
        <a
          href="#/"
          className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:border-magenta hover:text-magenta transition-colors"
        >
          <FiArrowLeft size={16} /> {p.back}
        </a>

        <p className="eyebrow text-xs text-magenta mb-4">{p.eyebrow}</p>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl mb-4">
          {p.heading}
        </h1>
        <p className="text-white/60 max-w-xl mb-12">{p.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {p.items.map((item) => (
            <article
              key={item.slug}
              className="group rounded-2xl border border-white/12 bg-surface overflow-hidden hover:border-magenta/50 transition-colors"
            >
              <div className="overflow-hidden">
                <img
                  src={item.imagem || devImg}
                  alt={item.titulo}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="eyebrow text-xs bg-brand-cta bg-clip-text text-transparent">
                  DEV
                </span>
                <h3 className="font-display font-semibold text-xl text-white mt-2">
                  {item.titulo}
                </h3>
                <p className="text-white/60 text-sm mt-2">{item.desc}</p>
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                  {item.data && (
                    <span className="font-mono text-xs text-muted">
                      {item.data}
                    </span>
                  )}

                  <a
                    href={`#/projetos/dev/${item.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:border-magenta hover:text-magenta transition-colors"
                  >
                    {p.viewMore} <FiArrowRight size={14} />
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