import { FiArrowLeft, FiCode, FiLayers, FiExternalLink } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import { useLanguage } from "../context/LanguageContext";
import { projetosImagens } from "../data/projetosImagens";

export default function ProjetoDetalhe({ categoria, slug }) {
  const { t } = useLanguage();
  const pageData = t.projetosDesignPage;
  const d = t.projetoDetalheDesign;

  const projeto = pageData.items.find((item) => item.slug === slug);
  const imagem = projetosImagens.dev?.[slug];

  if (!projeto) {
    return (
      <section className="px-6 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 mb-6">{d.notFound}</p>
          <a
            href={listVoltar}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} /> {d.back}
          </a>
        </div>
      </section>
    );
  }

  const tecnologias = projeto.tecnologias || [];
  const caracteristicas = projeto.caracteristicas || [];

  return (
    <section className="px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        <a
          href={listVoltar}
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
        >
          <FiArrowLeft size={16} /> {d.back}
        </a>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* coluna esquerda */}
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl mb-2">
              {projeto.titulo}
            </h1>
            <span className="block h-[3px] w-14 rounded-full bg-brand-cta mb-4" />

            <p className="text-white/60 leading-relaxed mb-5">
              {projeto.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl border border-white/12 bg-surface p-3 flex items-center gap-2.5">
                <span className="rounded-lg bg-white/10 p-2 text-white">
                  <FiCode size={18} />
                </span>
                <div>
                  <p className="font-display font-semibold text-lg text-white leading-none">
                    {tecnologias.length}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {d.tecCount}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-white/12 bg-surface p-3 flex items-center gap-2.5">
                <span className="rounded-lg bg-white/10 p-2 text-white">
                  <FiLayers size={15} />
                </span>
                <div>
                  <p className="font-display font-semibold text-lg text-white leading-none">
                    {caracteristicas.length}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {d.caracCount}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mb-5">
              {projeto.repoLink ? (
                <a
                  href={projeto.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-2 text-sm text-white hover:border-magenta hover:text-magenta transition-colors"
                >
                  <RiGlobalLine size={13} /> {d.repo}
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-sm text-white/30 cursor-not-allowed">
                  <RiGlobalLine size={13} /> {d.noLink}
                </span>
              )}

              {projeto.demoLink ? (
                <a
                  href={projeto.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-2 text-sm text-white hover:border-magenta hover:text-magenta transition-colors"
                >
                  <FiExternalLink size={13} /> {d.demo}
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-sm text-white/30 cursor-not-allowed">
                  <FiExternalLink size={13} /> {d.noLink}
                </span>
              )}
            </div>

            {tecnologias.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 font-display font-semibold text-white mb-2.5">
                  <FiCode size={14} className="text-magenta" />
                  {d.tecTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tecnologias.map((tec) => (
                    <span
                      key={tec}
                      className="rounded-full border border-white/12 bg-surface2 px-3 py-1.5 text-sm text-white/85"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* coluna direita */}
          <div>
            <div className="rounded-2xl border border-white/12 bg-surface overflow-hidden mb-4">
              <img
                src={imagem}
                alt={projeto.titulo}
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>

            {caracteristicas.length > 0 && (
              <div className="rounded-2xl border border-white/12 bg-surface p-4">
                <h3 className="flex items-center gap-2 font-display font-semibold text-white mb-3">
                  <FiLayers size={14} className="text-magenta" />
                  {d.caracTitle}
                </h3>
                <ul className="space-y-3">
                  {caracteristicas.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-magenta shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}