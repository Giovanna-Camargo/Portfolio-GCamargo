import devImg from "../assets/project-dev.jpg";
import designImg from "../assets/project-design.jpg";

const projetos = [
  {
    tag: "DEV",
    titulo: "Aplicações Web & Mobile",
    img: devImg,
  },
  {
    tag: "DESIGN",
    titulo: "Design UI/UX & Design Gráfico",
    img: designImg,
  },
];

export default function Portfolio() {
  return (
    <section id="projetos" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-xs text-magenta mb-4">portfólio</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-12">
          Projetos em destaque
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projetos.map((p) => (
            <article
              key={p.tag}
              className="group rounded-2xl border border-white/12 bg-surface overflow-hidden hover:border-magenta/50 transition-colors"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
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
