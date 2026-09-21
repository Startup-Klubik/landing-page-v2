import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center select-none group" aria-label="Cora Technologies Home">
          <img
            src="./logos/Logo.svg"
            alt="Cora Technologies"
            className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm text-slate-600 font-medium">
          <a href="#services" className="hover:text-[#0f172a] transition-colors">Services</a>
          <a href="#due-diligence" className="hover:text-[#0f172a] transition-colors">Due Diligence</a>
          <a href="#founders" className="hover:text-[#0f172a] transition-colors">Leadership</a>
          <a href="#process" className="hover:text-[#0f172a] transition-colors">Engagement</a>
        </nav>

        <a
          href="#contact"
          id="nav-cta"
          className="hidden md:inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl text-white bg-[#047857] hover:bg-[#059669] transition-all shadow-sm"
        >
          Start a Conversation
        </a>

        <button
          className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-6 flex flex-col gap-4 text-sm font-medium shadow-xl">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-slate-600 hover:text-[#0f172a] py-1.5">Services</a>
          <a href="#due-diligence" onClick={() => setMenuOpen(false)} className="text-slate-600 hover:text-[#0f172a] py-1.5">Due Diligence</a>
          <a href="#founders" onClick={() => setMenuOpen(false)} className="text-slate-600 hover:text-[#0f172a] py-1.5">Leadership</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-slate-600 hover:text-[#0f172a] py-1.5">Engagement</a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-5 py-3.5 rounded-xl text-white bg-[#047857] hover:bg-[#059669] mt-2 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      )}
    </header>
  );
}
