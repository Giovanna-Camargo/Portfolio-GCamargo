import devImg from "../assets/project-dev.jpg";
import designImg from "../assets/project-design.jpg";
import { useLanguage } from "../context/LanguageContext";6

const IMAGES = {
  DEV: devImg,
  DESIGN: designImg,
};

export default function Portfolio() {
  const { t } = useLanguage();
  const c = t.portfolio;

  return (
    <section id="projetos" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-xs text-magenta mb-4">{c.eyebrow}</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-12">
          {c.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {c.items.map((p) => (
            <article
              key={p.tag}
              className="group rounded-2xl border border-white/12 bg-surface overflow-hidden hover:border-magenta/50 transition-colors"
            >
              <div className="overflow-hidden">
                <img
                  src={IMAGES[p.tag]}
                  alt={p.titulo}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="eyebrow text-xs bg-brand-cta bg-clip-text text-transparent">
                  {p.tag}
                </span>
                <h3 className="font-display font-semibold text-xl text-white mt-2">
                  {p.titulo}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
