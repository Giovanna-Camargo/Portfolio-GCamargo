import { FiBookOpen } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Sobre() {
  const { t } = useLanguage();
  const c = t.sobre;

  return (
    <section id="sobre" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow text-xs text-magenta mb-4">{c.eyebrow}</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-6">
            {c.heading}
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            {c.paragraph1}
          </p>
          <p className="text-white/70 leading-relaxed">
            {c.paragraph2}
          </p>
        </div>

        <div>
          <p className="eyebrow text-xs text-magenta mb-6">
            {c.formacaoEyebrow}
          </p>

          <div className="space-y-4">
            {c.formacao.map((f) => (
              <div
                key={f.curso}
                className="group relative rounded-2xl border border-white/12 bg-surface p-5 hover:border-magenta/50 transition-colors overflow-hidden"
              >
                <span className="absolute top-0 left-0 h-full w-[3px] bg-brand-cta" />

                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-xl bg-white/5 p-2.5 text-magenta group-hover:bg-brand-cta group-hover:text-white transition-colors">
                    <FiBookOpen size={18} />
                  </span>

                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-muted mb-1 tracking-wide">
                      {f.periodo}
                    </p>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-white leading-snug">
                      {f.curso}
                    </h3>
                    <p className="text-white/55 text-sm mt-1">
                      {f.instituicao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
