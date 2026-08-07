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
  return (
    <section id="sobre" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow text-xs text-magenta mb-4">sobre mim</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-6">
            Código e design, a mesma linguagem
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Desenvolvedora Full-Stack e UI/UX Designer em busca da minha
            primeira oportunidade profissional. Unindo a lógica de
            programação ao olhar estético do UI Design, dedico-me a criar
            interfaces modernas, intuitivas e totalmente responsivas.
          </p>
          <p className="text-white/70 leading-relaxed">
            Em constante aprimoramento das habilidades e pronta para aplicar
            meu ecossistema de competências em projetos reais, colaborando
            com equipes dinâmicas e gerando valor por meio do código e do
            design.
          </p>
        </div>

        <div>
          <p className="eyebrow text-xs text-magenta mb-6">
            formação acadêmica
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
