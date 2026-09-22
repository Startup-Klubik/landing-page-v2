import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070d14] text-slate-400 px-6 py-16 md:py-20 text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center select-none group" aria-label="Cora Technologies">
              <img
                src="./logos/Logo-light.svg"
                alt="Cora Technologies"
                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>
            <p className="text-xs text-slate-400 font-normal">
              Technical Advisory & Systems Architecture
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-8 text-xs text-slate-400 font-medium">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#explore-with-us" className="hover:text-white transition-colors">Explore with us</a>
            <a href="#about-us" className="hover:text-white transition-colors">About us</a>
            <a href="#process" className="hover:text-white transition-colors">How we work</a>
            <a href="#contact" className="hover:text-white transition-colors">Inquiries</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@coratechnologies.com"
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="Email Cora Technologies"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/cora-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              aria-label="Cora Technologies on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Cora Technologies. All rights reserved.</p>
          <p>Incubated at DTU SkyLab, Kongens Lyngby, Denmark.</p>
        </div>
      </div>
    </footer>
  );
}
