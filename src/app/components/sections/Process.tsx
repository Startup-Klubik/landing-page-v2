import { ArrowRight, Search, FileCode, CheckCircle2, Headphones } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import FadeUp from "../shared/FadeUp";

const phases = [
  {
    step: "01",
    name: "Discovery & Alignment",
    Icon: Search,
    description: "We evaluate business objectives, existing system constraints, and repository architecture to pinpoint root technical bottlenecks.",
  },
  {
    step: "02",
    name: "Architectural Specification",
    Icon: FileCode,
    description: "We define pragmatic system blueprints and data models — choosing simple, proven technologies over unnecessary complexity.",
  },
  {
    step: "03",
    name: "Hardened Implementation",
    Icon: CheckCircle2,
    description: "We deliver working, production-ready software — clean, maintainable, rigorously tested, and built for team extensibility.",
  },
  {
    step: "04",
    name: "Advisory & Handover",
    Icon: Headphones,
    description: "We conduct structured team walkthroughs and documentation handoffs, remaining engaged as trusted technical advisors.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16 md:mb-20 max-w-2xl">
          <SectionLabel>Engagement Model</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight mb-4">
            A structured framework from discovery to delivery
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Our advisory engagements follow disciplined milestones to eliminate uncertainty and ensure software architecture serves measurable business value.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, index) => (
            <FadeUp key={p.step} delay={index * 0.12}>
              <div className="group bg-slate-50/70 border border-slate-200/90 rounded-2xl md:rounded-3xl p-8 shadow-2xs hover:shadow-md hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold text-[#047857] tracking-wider flex items-center">
                        <span className="phase-pulse-dot" />
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
