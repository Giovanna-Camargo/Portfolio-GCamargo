const hard = [
  "HTML5 / CSS3",
  "JavaScript",
  "Git & GitHub",
  "Lógica de Programação",
  "SQL / Banco de Dados",
  "Excel & Office 365",
  "SharePoint",
  "UI Design (Canva/Figma)",
];

const soft = [
  "Proatividade",
  "Organização",
  "Adaptabilidade",
  "Comunicação Assertiva",
  "Trabalho em Equipe",
  "Raciocínio Lógico",
];

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/12 bg-surface2 px-4 py-2 text-sm text-white/85 hover:border-magenta/60 hover:text-white transition-colors">
      {children}
    </span>
  );
}

export default function Habilidades() {
  return (
    <section id="habilidades" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-xs text-magenta mb-4">
          habilidades &amp; competências
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-12">
          O que carrego para o time
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              Hard Skills{" "}
              <span className="text-muted font-body font-normal text-sm">
                (Técnicas)
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {hard.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              Soft Skills{" "}
              <span className="text-muted font-body font-normal text-sm">
                (Comportamentais)
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {soft.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
