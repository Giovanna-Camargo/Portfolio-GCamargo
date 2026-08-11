import { useLanguage } from "../context/LanguageContext";

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/12 bg-surface2 px-4 py-2 text-sm text-white/85 hover:border-magenta/60 hover:text-white transition-colors">
      {children}
    </span>
  );
}

export default function Habilidades() {
  const { t } = useLanguage();
  const c = t.habilidades;

  return (
    <section id="habilidades" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-xs text-magenta mb-4">
          {c.subtitle}
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-12">
          {c.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              {c.hardTitle}{" "}
              <span className="text-muted font-body font-normal text-sm">
                {c.hardSuffix}
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {c.hard.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              {c.softTitle}{" "}
              <span className="text-muted font-body font-normal text-sm">
                {c.softSuffix}
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {c.soft.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
