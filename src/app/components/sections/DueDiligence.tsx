import { useRef } from "react";
import { ArrowRight, FileCheck2, ShieldAlert, BarChart3 } from "lucide-react";
import { motion, useInView } from "motion/react";
import SectionLabel from "../shared/SectionLabel";
import FadeUp from "../shared/FadeUp";

export default function DueDiligence() {
  const scoreRef = useRef<HTMLDivElement>(null);
  const inView = useInView(scoreRef, { once: true, margin: "-60px" });

  const dimensions = [
    { label: "Architecture Scalability", score: 91, status: "Strong", statusColor: "text-emerald-700", barColor: "#059669" },
    { label: "Security & Dependency Posture", score: 74, status: "Adequate", statusColor: "text-amber-700", barColor: "#d97706" },
    { label: "Infrastructure & Deployment", score: 88, status: "Strong", statusColor: "text-emerald-700", barColor: "#059669" },
    { label: "Technical Debt Index", score: 61, status: "Moderate", statusColor: "text-orange-700", barColor: "#ea580c" },
    { label: "Documentation & Code Health", score: 78, status: "Good", statusColor: "text-emerald-700", barColor: "#059669" },
  ];

  return (
    <section id="due-diligence" className="py-20 md:py-28 px-6 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-10 md:mb-14 max-w-3xl">
          <SectionLabel>Advisory Practice</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            Automated Technical DD
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            We are pioneering automated codebase and architectural audits designed for venture capital investors, acquirers, and founding teams. Receive a structured, evidence-backed evaluation of a software asset without month-long advisory lags.
          </p>
        </FadeUp>

        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Executive Report Sample */}
          <FadeUp delay={0.1} className="lg:col-span-7 h-full">
            <div ref={scoreRef} className="h-full rounded-2xl md:rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-8 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/70 mb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#047857]">
                      Executive Report Preview
                    </span>
                    <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
                      Technical Assessment Report
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Target: Enterprise SaaS · Series A Diligence</p>
                  </div>
                  <div className="text-right shrink-0">
                    <motion.span
                      className="text-3xl font-extrabold text-[#047857] tabular-nums"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {inView ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <CountUp to={82} inView={inView} />
                        </motion.span>
                      ) : "0"}
                    </motion.span>
                    <span className="text-xs text-slate-400 font-normal"> /100</span>
                    <p className="text-[10px] text-slate-500 mt-0.5">Confidence Score</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed pb-5 border-b border-slate-200/70 mb-5">
                  Architecture foundations robust. Moderate tech debt in auth microservices. Low deal risk with targeted post-close remediation.
                </p>

                {/* Animated Breakdown */}
                <div className="space-y-3">
                  {dimensions.map((dim, i) => (
                    <div key={dim.label}>
                      <div className="flex items-center justify-between text-xs md:text-sm mb-2">
                        <span className="font-medium text-slate-700">{dim.label}</span>
                        <div className="flex items-center gap-3">
                          <span className={`font-semibold ${dim.statusColor}`}>{dim.status}</span>
                          <span className="font-bold text-[#0f172a]">{dim.score}%</span>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200/80 rounded-md overflow-hidden">
                        <motion.div
                          className="h-full rounded-md"
                          style={{ backgroundColor: dim.barColor }}
                          initial={{ width: "0%" }}
                          animate={inView ? { width: `${dim.score}%` } : { width: "0%" }}
                          transition={{
                            duration: 0.9,
                            delay: 0.35 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/70 text-xs text-slate-500">
                Audited against 180+ static analysis, architectural coupling, and security metrics.
              </div>
            </div>
          </FadeUp>

          {/* Value Proposition */}
          <FadeUp delay={0.2} className="lg:col-span-5 h-full">
            <div className="h-full rounded-2xl md:rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-8 shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                  Built for Investors & Acquirers
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Traditional technical due diligence relies on inconsistent interviews. Our framework combines automated static code analysis with senior architectural review for repeatable clarity.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-2xs text-[#0f172a]">
                      <BarChart3 size={17} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0f172a]">Quantified Health Index</h4>
                      <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                        Deterministic scoring across scalability, security, and maintainability.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-2xs text-[#0f172a]">
                      <ShieldAlert size={17} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0f172a]">Early Risk Detection</h4>
                      <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                        Surface IP exposure, obsolete dependencies, and bottlenecks before signing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-2xs text-[#0f172a]">
                      <FileCheck2 size={17} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0f172a]">Investment Committee Brief</h4>
                      <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                        Non-technical executive summaries for GPs, angels, and board members.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-[#047857] hover:text-[#065f46] transition-colors"
                >
                  <span>Inquire about audit engagements</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ── Count-up helper ─────────────────────────────────────────── */
function CountUp({ to, inView }: { to: number; inView: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  if (inView && !hasRun.current && nodeRef.current) {
    hasRun.current = true;
    const duration = 900;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (nodeRef.current) nodeRef.current.textContent = String(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  return <span ref={nodeRef}>{inView ? undefined : "0"}</span>;
}
