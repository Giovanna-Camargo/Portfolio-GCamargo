import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const c = t.footer;

  return (
    <footer
      id="contato"
      className="relative overflow-hidden border-t border-line px-6 py-20 bg-brand-glow"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="eyebrow text-xs text-magenta mb-4">{c.eyebrow}</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">
          {c.heading}
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-10">
          {c.paragraph}
        </p>

        <div className="flex items-center justify-center gap-4 mb-14">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gcamargotech@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-cta px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <FiMail size={16} />{c.sendEmail}
          </a>
          <a
            href="https://github.com/Giovanna-Camargo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/20 p-3 text-white/80 hover:text-white hover:border-white/40 transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/giovanna-camargo-5092363a4/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/20 p-3 text-white/80 hover:text-white hover:border-white/40 transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        <p className="text-white/40 text-xs">
          {c.madeBy} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
