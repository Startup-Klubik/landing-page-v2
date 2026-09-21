import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import WaveCanvas from "../shared/WaveCanvas";

export default function Hero() {
  return (
    <section className="relative pt-44 pb-28 md:pt-52 md:pb-36 px-6 overflow-hidden bg-[#f8fafc]">
      {/* Animated flow-line waves */}
      <WaveCanvas />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-[66px] font-extrabold leading-[1.08] tracking-tight text-[#0f172a] mb-8"
        >
          Technical consultancy rooted in how software actually works.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 font-normal"
        >
          Whether you need hands-on development, a technical assessment, or a long-term engineering partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#contact"
            id="hero-cta-primary"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-sm bg-[#047857] hover:bg-[#059669] transition-all shadow-sm hover:shadow-md"
          >
            Work with us <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            id="hero-cta-secondary"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-slate-300 bg-white text-[#0f172a] font-semibold text-sm hover:border-slate-400 hover:bg-slate-50 transition-all shadow-sm"
          >
            Explore Services <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

