import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Menu, X, Mail, Phone, Search, PenTool, Code2, Activity, ShieldCheck, Layers, Cpu, ChevronDown } from "lucide-react";
import dokeroLogo from "../imports/Icon-500-500-color__1_.png";

const defaultMotion = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!productsOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Element | null;
      if (target && !target.closest("[data-products-menu]")) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [productsOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div
      className="min-h-screen text-[#1a1523] overflow-x-hidden"
      style={{
        fontFamily: "'Geist', sans-serif",
        background: `
          radial-gradient(ellipse 70% 50% at 10% 5%, rgba(155, 47, 212, 0.10) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 90% 10%, rgba(212, 37, 106, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(155, 47, 212, 0.03) 0%, transparent 50%),
          #ffffff
        `,
      }}
    >

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={dokeroLogo} alt="Dokero logo" className="w-8 h-8 object-contain" />
            <span className="text-base tracking-tight text-[#1a1523]" style={{ fontWeight: 800 }}>DOKERO</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#717171] font-medium relative" data-products-menu>
            <a href="#services" className="hover:text-[#1a1523] transition-colors">Services</a>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium hover:text-[#1a1523] transition-colors"
              onClick={() => setProductsOpen((value) => !value)}
            >
              Products <ChevronDown size={14} />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-3 w-[220px] rounded-[1.75rem] border border-black/[0.08] bg-white/95 backdrop-blur-xl shadow-2xl p-3">
                <a
                  href="#architect"
                  onClick={() => setProductsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-[#1a1523] hover:bg-[#f6f4ff]"
                >
                  Dokero Architect
                </a>
                <a
                  href="#engine"
                  onClick={() => setProductsOpen(false)}
                  className="mt-1 block rounded-2xl px-4 py-3 text-sm text-[#1a1523] hover:bg-[#f6f4ff]"
                >
                  Dokero Engine
                </a>
                <a
                  href="/speccy.html"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setProductsOpen(false)}
                  className="mt-1 block rounded-2xl px-4 py-3 text-sm text-[#1a1523] hover:bg-[#f6f4ff]"
                >
                  Specy
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex text-sm font-semibold px-5 py-2 rounded-full text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #9B2FD4, #D4256A, #E06020)" }}
          >
            Get in touch
          </a>

          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black/[0.07] px-6 py-4 flex flex-col gap-4 text-sm font-medium" data-products-menu>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-[#717171] hover:text-[#1a1523]">Services</a>
            <button
              type="button"
              className="text-left text-[#717171] hover:text-[#1a1523]"
              onClick={() => setProductsOpen((value) => !value)}
            >
              Products
            </button>
            {productsOpen && (
              <div className="ml-4 flex flex-col gap-2">
                <a href="#architect" onClick={() => { setMenuOpen(false); setProductsOpen(false); }} className="text-[#717171] hover:text-[#1a1523]">Dokero Architect</a>
                <a href="#engine" onClick={() => { setMenuOpen(false); setProductsOpen(false); }} className="text-[#717171] hover:text-[#1a1523]">Dokero Engine</a>
                <a href="/speccy.html" target="_blank" rel="noreferrer" onClick={() => { setMenuOpen(false); setProductsOpen(false); }} className="text-[#717171] hover:text-[#1a1523]">Specy</a>
              </div>
            )}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[#717171] hover:text-[#1a1523]">Get in touch</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-6 overflow-hidden">

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(155,47,212,0.18),_transparent_60%)] blur-3xl hero-float" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-[68px] font-extrabold leading-[1.06] tracking-tight text-[#1a1523] mb-6"
          >
            We solve your hardest process problems{" "}
            <br className="hidden md:block" />
            with the right technology.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="text-lg md:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Dokero works with organisations to find where things break down and build the technical solutions that fix them. With or without AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              transition={defaultMotion}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-px shadow-md"
              style={{ background: "#1a1523" }}
            >
              Our Services <ArrowRight size={15} />
            </motion.a>
            <motion.a
              href="#products"
              whileHover={{ y: -2 }}
              transition={defaultMotion}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-black/[0.15] text-[#1a1523] font-semibold text-sm hover:bg-white/60 transition-all"
            >
              Discover our products <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#717171] mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a1523] max-w-2xl leading-tight">
              Technical consulting built around your actual problems
            </h2>
            <p className="mt-4 text-[#717171] max-w-xl leading-relaxed text-[15px]">
              We start by understanding your organisation, your workflows and where value is being lost. Then we build something that genuinely fixes it.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Process Consulting",
                body: "We map workflows, pinpoint bottlenecks and set clear priorities so work flows smoothly and teams can act with confidence.",
                color: "#9B2FD4",
              },
              {
                num: "02",
                title: "Technical Implementation",
                body: "We build and integrate the chosen solution, using automation, integrations or lightweight AI so teams have reliable, repeatable processes.",
                color: "#D4256A",
              },
              {
                num: "03",
                title: "Governance and Validation",
                body: "We add validation, monitoring and reporting so solutions stay aligned with your standards and leaders keep clear visibility as systems evolve.",
                color: "#E06020",
              },
            ].map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.995 }}
                transition={defaultMotion}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl border border-black/[0.07] p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: s.color }}
                />
                <div className="text-xs font-bold tracking-widest mb-6" style={{ color: s.color }}>{s.num}</div>
                <h3 className="text-xl font-bold text-[#1a1523] mb-3 leading-tight">{s.title}</h3>
                <p
                  className="text-sm text-[#717171] leading-relaxed"
                  style={{
                    textAlign: 'justify',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {s.body}
                </p>
              </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#717171] mb-3">How We Work</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a1523] leading-tight mb-4">
              From problem to working solution
            </h2>
            <p className="text-[#717171] text-[15px] leading-relaxed">
              We follow a clear process so nothing gets lost between discovery and delivery. Every step is grounded in what your organisation actually needs.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-black/[0.06]" />
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="hidden md:block absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white border border-black/[0.12] shadow-sm"
                style={{ left: `${12.5 + 25 * idx}%` }}
              />
            ))}
            <div className="grid md:grid-cols-4 gap-px bg-black/[0.06] border border-black/[0.06] rounded-2xl overflow-hidden">
              {[
              {
                num: "01",
                stage: "Assess",
                icon: Search,
                color: "#9B2FD4",
                hoverBg: "rgba(155,47,212,0.12)",
                desc: "We map your processes and pain points so you can see where work stalls and why.",
              },
              {
                num: "02",
                stage: "Design",
                icon: PenTool,
                color: "#B82BA0",
                hoverBg: "rgba(184,43,160,0.12)",
                desc: "We define the right technical approach for your team without overcomplicating the solution.",
              },
              {
                num: "03",
                stage: "Build",
                icon: Code2,
                color: "#D4256A",
                hoverBg: "rgba(212,37,106,0.12)",
                desc: "We build and integrate the solution so workflows work the way your people need them to.",
              },
              {
                num: "04",
                stage: "Monitor",
                icon: Activity,
                color: "#E06020",
                hoverBg: "rgba(224,96,32,0.12)",
                desc: "We track outcomes, catch issues early and keep your organisation aligned as conditions change.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.stage}
                whileHover={{ y: -4 }}
                transition={defaultMotion}
                className="relative p-5 group transition-all duration-300 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.74)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = step.hoverBg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.74)";
                }}
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: step.color }}
                />
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-[#1a1523] mb-0">{step.stage}</h3>
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-3xl text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: step.color }}
                  >
                    <step.icon size={18} />
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#717171] leading-6 md:max-w-[90%]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          </div>
          </FadeUp>

          <FadeUp delay={0.2}>
          <div className="mt-12 bg-[#1a1523] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-12"
              style={{
                background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(155,47,212,0.45), transparent)",
              }}
            />
            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#fff] mb-3">The result</p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                  Technology that actually fits how you work
                </h3>
                <p className="text-white text-[15px] leading-relaxed max-w-lg">
                  A solution that stays reliable as your organisation grows, your processes evolve and your team adapts. We build with long-term clarity, not just a quick fix.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm whitespace-nowrap transition-all hover:opacity-90 hover:-translate-y-px flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #9B2FD4, #D4256A, #E06020)" }}
              >
                Start a conversation <ArrowRight size={15} />
              </a>
            </div>
          </div>
          </FadeUp>
        </div>
      </section>
      {/* ── PRODUCTS ── */}
      <section id="products" className="py-20 px-6">
        <FadeUp>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#717171] mb-3">Our products</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1a1523] max-w-3xl mx-auto">
              Built to help teams manage architecture, execution and AI governance.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-[2rem] border border-black/[0.08] bg-white/80 p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#efe5ff] text-[#7c3cff]">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1523] mb-3">Dokero Architect</h3>
              <p className="text-sm text-[#717171] leading-relaxed">
                Define architecture rules, approval flows and policy guardrails for teams that need clear structure without slowing down delivery.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-black/[0.08] bg-white/80 p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#ffe8e3] text-[#d4256a]">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1523] mb-3">Dokero Engine</h3>
              <p className="text-sm text-[#717171] leading-relaxed">
                Execute workflows with confidence, monitor runtime behavior, and keep automation aligned to the policies your team has agreed on.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-black/[0.08] bg-white/80 p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#e9f3ff] text-[#1d6fff]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1523] mb-3">Specy</h3>
              <p className="text-sm text-[#717171] leading-relaxed">
                Capture your codebase intent and turn it into a governance-ready architecture model that AI agents can safely build against.
              </p>
            </div>
          </div>
        </div>
        </FadeUp>
      </section>
      {/* ── BACKED BY ── */}
      <section className="py-14 px-6 border-t border-b border-black/[0.06]">
        <FadeUp>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#aaa] mb-8">Backed by</p>
          <div className="flex items-center justify-center gap-14">
            {["DTU", "SkyLab"].map((name) => (
              <span key={name} className="text-2xl font-extrabold text-[#1a1523] opacity-20 tracking-tight">{name}</span>
            ))}
          </div>
        </div>
        </FadeUp>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 bg-[#1a1523]">
        <FadeUp>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#555] mb-4">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Tell us what you are trying to solve.
            </h2>
            <p className="text-[#717171] leading-relaxed mb-10 text-[15px]">
              Share where things are breaking down in your organisation. We will figure out the right technical approach together.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@dokero.com" className="flex items-center gap-3 text-white hover:opacity-70 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[11px] text-[#555]">Email</div>
                  <div className="text-sm font-medium">hello@dokero.com</div>
                </div>
              </a>
              <a href="tel:+4500000000" className="flex items-center gap-3 text-white hover:opacity-70 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[11px] text-[#555]">Phone</div>
                  <div className="text-sm font-medium">+45 00 00 00 00</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold" style={{ background: "linear-gradient(135deg, #9B2FD4, #E06020)" }}>✓</div>
                <h3 className="text-white font-bold text-xl mb-2">Message sent!</h3>
                <p className="text-[#717171] text-sm">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium text-[#555] mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a3a] focus:outline-none focus:border-[#9B2FD4] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#555] mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a3a] focus:outline-none focus:border-[#9B2FD4] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#555] mb-1.5">How can we help?</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a3a] focus:outline-none focus:border-[#9B2FD4] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-px"
                  style={{ background: "linear-gradient(135deg, #9B2FD4, #D4256A, #E06020)" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        </FadeUp>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a1523] border-t border-white/[0.07] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src={dokeroLogo} alt="Dokero logo" className="w-6 h-6 object-contain" />
            <span className="text-sm font-extrabold text-white tracking-tight">DOKERO</span>
          </div>
          <div className="flex gap-6 text-xs text-[#555] flex-wrap justify-center">
            <a href="mailto:hello@dokero.com" className="hover:text-white transition-colors">hello@dokero.com</a>
            <span>© 2026 Dokero. All rights reserved.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
