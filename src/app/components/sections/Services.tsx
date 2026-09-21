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
  whenToEngage: string;
  deliverables: string[];
  technologies: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    num: "01",
    title: "Software Systems Engineering",
    description:
      "Full-cycle development for core products, platforms, and mission-critical APIs. We design and build maintainable software with clean separation of concerns, robust type systems, and comprehensive automated test coverage.",
    whenToEngage:
      "Monolithic tech debt, unmaintainable microservice sprawl, slow release cycles, or platform re-architectures where downtime is not an option.",
    deliverables: [
      "Custom APIs & Distributed Backend Services",
      "Legacy Codebase Modernization & Refactoring",
      "Domain-Driven Data Architectures",
      "Comprehensive Automated Test Suites & CI Contracts",
    ],
    technologies: "TypeScript, Go, PostgreSQL, gRPC, Distributed Architectures",
  },
  {
    id: "02",
    num: "02",
    title: "Workflow & Process Automation",
    description:
      "Bespoke internal tooling and automated pipelines that replace operational friction with deterministic developer velocity. We eliminate repetitive manual steps across developer and operations workflows.",
    whenToEngage:
      "Engineering teams burdened by manual deployments, fragile sync scripts, data reconciliation delays, or operational toil that slows release momentum.",
    deliverables: [
      "Deterministic CI/CD & Deployment Automation",
      "Custom Internal Admin & Operations Tooling",
      "Bi-Directional Multi-System Data Synchronization",
      "Audit Trails, Event Telemetry & Compliance Logging",
    ],
    technologies: "GitHub Actions, Docker, Kubernetes, Temporal, Webhooks, CLI Tooling",
  },
  {
    id: "03",
    num: "03",
    title: "Architecture & Systems Scaling",
    description:
      "Independent architectural audits, data pipeline tuning, and performance engineering for high-concurrency systems facing throughput or stability bottlenecks.",
    whenToEngage:
      "Database connection saturation, unpredictable latency spikes at peak load, memory pressure, or distributed architectures facing concurrency limits.",
    deliverables: [
      "Targeted Concurrency & Bottleneck Audits",
      "Database Query Optimization & Sharding Strategies",
      "High-Throughput Caching Topologies & Event Streams",
      "Capacity Modeling, Circuit Breakers & Fault Isolation",
    ],
    technologies: "PostgreSQL, Redis, Kafka, eBPF Profiling, OpenTelemetry",
  },
  {
    id: "04",
    num: "04",
    title: "Technical Due Diligence",
    description:
      "Objective codebase audits, architecture risk evaluations, and team reviews for venture capital, private equity, and founding teams preparing for transactions.",
    whenToEngage:
      "Institutional funding rounds, M&A acquisitions, or board-level risk reviews where investors require unbiased verification of software assets and code health.",
    deliverables: [
      "Static Code Quality & Technical Debt Quantification",
      "Security Vulnerability & Open-Source License Audits",
      "Infrastructure Cost & Scalability Risk Analysis",
      "Executive Investment Committee Diligence Briefs",
    ],
    technologies: "Static Analysis, License Compliance Scans, CVE Vulnerability Profiling",
  },
  {
    id: "05",
    num: "05",
    title: "Applied AI Integration",
    description:
      "Pragmatic integration of large language models and machine learning into existing production workflows — focused strictly on verifiable ROI rather than experimental hype.",
    whenToEngage:
      "Organizations looking to embed generative AI or intelligent reasoning into enterprise workflows with deterministic accuracy, low latency, and cost controls.",
    deliverables: [
      "Deterministic Retrieval-Augmented Generation (RAG)",
      "Domain-Specific Evaluation Harnesses & Guardrails",
      "Structured Extraction & Automated Document Reasoning",
      "Cost-Optimized Model Routing & Latency Tuning",
    ],
    technologies: "pgvector, Structured LLM APIs, Semantic Caching, Evaluation Frameworks",
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
            Engineering depth across the technical lifecycle
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed text-base md:text-lg">
            We partner with leadership and engineering teams to design resilient architectures, resolve structural tech debt, and execute complex technical initiatives across every stage of growth.
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
                      <div className="pb-8 md:pb-12 pl-8 md:pl-14 pr-2">
                        <div className="grid md:grid-cols-12 gap-8 md:gap-12 pt-2 border-t border-slate-100">
                          {/* Left Column: Narrative & Context */}
                          <div className="md:col-span-7 space-y-5">
                            <p className="text-base md:text-[17px] text-slate-700 leading-relaxed">
                              {item.description}
                            </p>

                            <div className="pt-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                                When to Engage
                              </span>
                              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                {item.whenToEngage}
                              </p>
                            </div>
                          </div>

                          {/* Right Column: Key Deliverables & Technologies */}
                          <div className="md:col-span-5 space-y-4">
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                                Key Deliverables
                              </span>
                              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
                                {item.deliverables.map((d) => (
                                  <li key={d} className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#047857] mt-2 shrink-0" />
                                    <span className="leading-snug">{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                              <span className="font-semibold text-slate-700">Core technologies:</span>{" "}
                              {item.technologies}
                            </div>
                          </div>
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
