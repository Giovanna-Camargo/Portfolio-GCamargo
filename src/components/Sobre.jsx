import { useLanguage } from "../context/LanguageContext";

const formacao = [
  {
    periodo: "2026 – 2027",
    curso: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Fatec Taubaté",
  },
  {
    periodo: "2023 – 2025",
    curso: "Técnico em Desenvolvimento de Sistemas",
    instituicao: "Etec João Gomes de Araújo",
  },
];

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
          <ol className="relative border-l border-white/15 pl-6 space-y-10">
            {formacao.map((f) => (
              <li key={f.curso} className="relative">
                <span className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full bg-brand-cta" />
                <p className="font-mono text-xs text-muted mb-1">
                  {f.periodo}
                </p>
                <h3 className="font-display font-semibold text-lg text-white">
                  {f.curso}
                </h3>
                <p className="text-white/60 text-sm mt-1">{f.instituicao}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
