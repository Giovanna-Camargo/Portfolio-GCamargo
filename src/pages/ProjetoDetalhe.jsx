import { FiArrowLeft, FiCode, FiLayers, FiExternalLink } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import { useLanguage } from "../context/LanguageContext";
import { projetosImagens } from "../data/projetosImagens";

export default function ProjetoDetalhe({ categoria, slug }) {
  const { t } = useLanguage();
  const pageData =
    categoria === "dev" ? t.projetosDevPage : t.projetosDesignPage;
  const listVoltar = categoria === "dev" ? "#/projetos/dev" : "#/projetos/design";

  const projeto = pageData.items.find((item) => item.slug === slug);
  const imagem = projetosImagens[categoria]?.[slug];

  if (!projeto) {
    return (
      <section className="px-6 pt-40 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 mb-6">{t.projetoDetalhe.notFound}</p>
          <a
            href={listVoltar}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} /> {t.projetoDetalhe.back}
          </a>
        </div>
      </section>
    );
  }

  const tecnologias = projeto.tecnologias || [];
  const caracteristicas = projeto.caracteristicas || [];

  return (
    <section className="px-6 pt-40 pb-24">
      <div className="max-w-6xl mx-auto">
        <a
          href={listVoltar}
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
        >
          <FiArrowLeft size={16} /> {t.projetoDetalhe.back}
        </a>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* coluna esquerda */}
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
              {projeto.titulo}
            </h1>
            <span className="block h-[3px] w-16 rounded-full bg-brand-cta mb-6" />

            <p className="text-white/60 leading-relaxed mb-8">
              {projeto.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-white/12 bg-surface p-4 flex items-center gap-3">
                <span className="rounded-lg bg-white/10 p-2.5 text-white">
                  <FiCode size={18} />
                </span>
                <div>
                  <p className="font-display font-semibold text-lg text-white leading-none">
                    {tecnologias.length}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {t.projetoDetalhe.tecCount}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-white/12 bg-surface p-4 flex items-center gap-3">
                <span className="rounded-lg bg-white/10 p-2.5 text-white">
                  <FiLayers size={18} />
                </span>
                <div>
                  <p className="font-display font-semibold text-lg text-white leading-none">
                    {caracteristicas.length}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {t.projetoDetalhe.caracCount}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {projeto.repoLink ? (
                <a
                  href={projeto.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm text-white hover:border-magenta hover:text-magenta transition-colors"
                >
                  <RiGlobalLine size={15} /> {t.projetoDetalhe.repo}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/30 cursor-not-allowed">
                  <RiGlobalLine size={15} /> {t.projetoDetalhe.noLink}
                </span>
              )}

              {projeto.demoLink ? (
                <a
                  href={projeto.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm text-white hover:border-magenta hover:text-magenta transition-colors"
                >
                  <FiExternalLink size={15} /> {t.projetoDetalhe.demo}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/30 cursor-not-allowed">
                  <FiExternalLink size={15} /> {t.projetoDetalhe.noLink}
                </span>
              )}
            </div>

            {tecnologias.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 font-display font-semibold text-white mb-4">
                  <FiCode size={16} className="text-magenta" />
                  {t.projetoDetalhe.tecTitle}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tecnologias.map((tec) => (
                    <span
                      key={tec}
                      className="rounded-full border border-white/12 bg-surface2 px-4 py-2 text-sm text-white/85"
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
            <div className="rounded-2xl border border-white/12 bg-surface overflow-hidden mb-6">
              <img
                src={imagem}
                alt={projeto.titulo}
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>

            {caracteristicas.length > 0 && (
              <div className="rounded-2xl border border-white/12 bg-surface p-6">
                <h3 className="flex items-center gap-2 font-display font-semibold text-white mb-4">
                  <FiLayers size={16} className="text-magenta" />
                  {t.projetoDetalhe.caracTitle}
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