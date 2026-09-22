import { Search, FileCode, Layers, Headphones } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import FadeUp from "../shared/FadeUp";

const phases = [
  {
    step: "01",
    name: "Discovery & Alignment",
    Icon: Search,
    description: "We sit down and figure out where we can make a real difference. No templates, no assumptions — just a direct conversation about your business, your systems, and what's actually getting in the way.",
  },
  {
    step: "02",
    name: "Proposal, PoC & Blueprint",
    Icon: Layers,
    description: "We come back with a concrete proposal: a working proof of concept that demonstrates the solution, a business case for the value it unlocks, and a clear delivery blueprint so you know exactly what you're approving.",
  },
  {
    step: "03",
    name: "Implementation & Integration",
    Icon: FileCode,
    description: "We scale the proof of concept into a production-ready solution, integrated directly into your existing systems and workflows. Built clean, tested thoroughly, and engineered to grow with you.",
  },
  {
    step: "04",
    name: "Ongoing Advisory",
    Icon: Headphones,
    description: "We don't vanish at go-live. We stay at the table — helping your team understand what was built, why it works, and how to get more from it. Ongoing advisory means the engagement evolves as your business does.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16 md:mb-20 max-w-2xl">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight mb-4">
            From first conversation to production — a process built around you
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Every engagement starts with a conversation, not a contract. We map what you actually need, shape a plan around it, and then see it through — keeping the things we build working for you long after we&apos;re done.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, index) => (
            <FadeUp key={p.step} delay={index * 0.12}>
              <div className="group bg-slate-50/70 border border-slate-200/90 rounded-2xl md:rounded-3xl p-8 shadow-2xs hover:shadow-md hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold text-[#047857] tracking-wider flex items-center">
                      PHASE {p.step}
                    </span>
                    <div className="h-10 w-10 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#0f172a] transition-colors duration-200 group-hover:bg-emerald-50 group-hover:border-emerald-200/60">
                      <p.Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
