import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-40 pb-24 px-6 bg-brand-glow"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.05] tracking-tight">
            Giovanna{" "}
            <span className="bg-brand-cta bg-clip-text text-transparent">
              Camargo
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-md">
            Full Stack · Design UI/UX
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/curriculo-giovanna-camargo.pdf"
              className="rounded-full bg-brand-cta px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
            <a
              href="#contato"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/50 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-brand-cta opacity-20 blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-white/15 bg-surface p-2 shadow-glow">
            <img
              src={heroImg}
              alt="Foto de Giovanna Camargo"
              className="w-full h-[420px] object-cover rounded-[1.4rem]"
            />
          </div>
          <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-full bg-surface2 border border-white/10 px-4 py-2.5 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magenta opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-magenta" />
            </span>
            <span className="text-sm font-medium text-white">Disponível para contratação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
