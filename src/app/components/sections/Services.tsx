import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SectionLabel from "../shared/SectionLabel";
import FadeUp from "../shared/FadeUp";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    num: "01",
    title: "AI & Automation",
    description:
      "We build production-ready AI and automated workflows directly into your products — not proof-of-concepts, but working systems that eliminate repetitive manual work and deliver measurable ROI. From intelligent document processing to LLM-powered features embedded in your core product, we focus on what's verifiably useful.",
  },
  {
    id: "02",
    num: "02",
    title: "Technical Due Diligence",
    description:
      "Independent codebase and architecture assessments for investors, acquirers, and companies evaluating strategic deals. We provide objective analysis of code quality, technical debt, security exposure, and scalability risk — delivered in a format that's actionable for both technical and non-technical stakeholders.",
  },
  {
    id: "03",
    num: "03",
    title: "Software Development",
    description:
      "Custom applications, APIs, and integrations — engineered from scratch or extended into your existing tech stack. We work across the full development lifecycle: greenfield builds, legacy modernisation, platform migrations, and everything in between. Clean architecture and long-term maintainability are non-negotiable.",
  },
  {
    id: "04",
    num: "04",
    title: "Software Architecture",
    description:
      "Scalable system design, infrastructure reviews, and modernisation roadmaps for systems that have outgrown their current setup. We assess what you have, identify where the structural risks are, and define a clear path forward — whether that's a phased refactor, a re-architecture, or targeted performance work.",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-28 md:py-36 px-6 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16 md:mb-20">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] max-w-2xl leading-tight">
            Engineering skill and business context — across the full technical lifecycle.
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed text-base md:text-lg">
            We build, improve, and scale the technology behind growing businesses. Whether you&apos;re integrating AI, evaluating a deal, or scaling a system that&apos;s hit its limits — we bring the engineering depth to get it right.
          </p>
        </FadeUp>

        {/* Unified Divider-Based Accordion */}
        <div className="border-t border-slate-200">
          {services.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className={`border-b border-slate-200 transition-all duration-300 ${isOpen ? "bg-emerald-50/30" : ""}`}>
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group cursor-pointer select-none relative"
                >
                  {/* Left accent bar */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[#047857] transition-all duration-300 ease-out ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                    style={{ transformOrigin: "center" }}
                  />
                  <div className="flex items-baseline gap-5 md:gap-8 min-w-0 pr-4 pl-4">
                    <span className="text-xs md:text-sm font-mono font-medium text-slate-400 group-hover:text-slate-600 transition-colors shrink-0">
                      {item.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0f172a] group-hover:text-[#047857] transition-colors truncate">
                      {item.title}
                    </h3>
                  </div>

                  <div className="shrink-0 ml-4">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-slate-800 transition-colors">
                      <Plus
                        size={18}
                        className={`transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45 text-[#047857]" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-12 pl-8 md:pl-14 pr-8 md:pr-14">
                        <div className="pt-2 border-t border-slate-100">
                          <p className="text-base md:text-[17px] text-slate-700 leading-relaxed max-w-3xl">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
