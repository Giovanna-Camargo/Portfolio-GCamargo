import { FiArrowLeft, FiTool, FiTag, FiDownload, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { projetosImagens } from "../data/projetosImagens";

export default function ProjetoDetalheDesign({ slug }) {
  const { t } = useLanguage();
  const pageData = t.projetosDesignPage;
  const d = t.projetoDetalheDesign;

  const projeto = pageData.items.find((item) => item.slug === slug);
  const imagem = projetosImagens.design?.[slug];

  if (!projeto) {
    return (
      <section className="px-6 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 mb-6">{d.notFound}</p>
          <a
            href="#/projetos/design"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} /> {d.back}
          </a>
        </div>
      </section>
    );
  }

  const ferramentas = projeto.ferramentas || [];
  const paleta = projeto.paleta || [];

  return (
    <section className="px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        <a
          href="#/projetos/design"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
        >
          <FiArrowLeft size={16} /> {d.back}
        </a>

        {/* showcase da imagem em destaque, estilo "capa" */}
        <div className="relative rounded-2xl border border-white/12 bg-surface overflow-hidden mb-8">
          <div
            className="absolute inset-0 scale-110 blur-2xl opacity-40"
            style={{
              backgroundImage: `url(${imagem})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

          <div className="relative flex items-center justify-center py-8 px-6">
            <img
              src={imagem}
              alt={projeto.titulo}
              className="max-h-[420px] w-auto rounded-lg shadow-2xl object-contain"
            />
          </div>

          {projeto.tipo && (
            <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-white border border-white/20">
              {projeto.tipo}
            </span>
          )}
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          {/* coluna esquerda: história do projeto */}
          <div>
            <span className="eyebrow text-xs text-magenta">{d.eyebrow}</span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl mt-2 mb-3">
              {projeto.titulo}
            </h1>
            <span className="block h-[3px] w-14 rounded-full bg-brand-cta mb-4" />

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {projeto.desc}
            </p>

            {projeto.cliente && (
              <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
                <FiTag size={14} className="text-magenta shrink-0" />
                <span className="text-white/50">{d.cliente}:</span>
                <span className="text-white">{projeto.cliente}</span>
              </div>
            )}

            {ferramentas.length > 0 && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-2.5">
                  <FiTool size={14} className="text-magenta" />
                  {d.ferramentasTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ferramentas.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-white/12 bg-surface2 px-3 py-1.5 text-xs text-white/85"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2.5">
              {projeto.demoLink ? (
                <a
                  href={projeto.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-cta px-4 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  <FiExternalLink size={13} /> {d.verProjeto}
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs text-white/30 cursor-not-allowed">
                  <FiExternalLink size={13} /> {d.noLink}
                </span>
              )}

              {projeto.downloadLink && (
                <a
                  href={projeto.downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-xs text-white hover:border-magenta hover:text-magenta transition-colors"
                >
                  <FiDownload size={13} /> {d.baixar}
                </a>
              )}
            </div>
          </div>

          {/* coluna direita: paleta de cores + ficha técnica */}
          <div className="rounded-2xl border border-white/12 bg-surface p-5">
            <h3 className="font-display font-semibold text-sm text-white mb-4">
              {d.paletaTitle}
            </h3>

            {paleta.length > 0 ? (
              <div className="flex flex-wrap gap-3 mb-6">
                {paleta.map((cor) => (
                  <div key={cor} className="flex flex-col items-center gap-1.5">
                    <span
                      className="h-9 w-9 rounded-full border border-white/20"
                      style={{ backgroundColor: cor }}
                    />
                    <span className="font-mono text-[10px] text-white/50">
                      {cor}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/40 text-xs mb-6">{d.semPaleta}</p>
            )}

            <div className="h-px bg-white/10 mb-5" />

            <dl className="space-y-3 text-xs">
              {projeto.tipo && (
                <div className="flex justify-between gap-2">
                  <dt className="text-white/50">{d.tipoLabel}</dt>
                  <dd className="text-white text-right">{projeto.tipo}</dd>
                </div>
              )}
              {projeto.data && (
                <div className="flex justify-between gap-2">
                  <dt className="text-white/50">{d.dataLabel}</dt>
                  <dd className="text-white text-right">{projeto.data}</dd>
                </div>
              )}
              {projeto.formato && (
                <div className="flex justify-between gap-2">
                  <dt className="text-white/50">{d.formatoLabel}</dt>
                  <dd className="text-white text-right">{projeto.formato}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}