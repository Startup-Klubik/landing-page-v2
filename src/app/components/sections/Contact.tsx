import { useState } from "react";
import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import FadeUp from "../shared/FadeUp";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "dan.vyhlidal@gmail.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
    } catch (err: unknown) {
      console.error("EmailJS error:", JSON.stringify(err));
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[#0b131e] text-white">
      <FadeUp>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">
              Get in touch
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Tell us about your challenges.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-10">
              Whether you require an independent systems review, due diligence on an upcoming transaction, or hands-on architectural engineering, our partners are available for a confidential exploration call.
            </p>

            <div className="space-y-5 text-sm">
              <div className="flex items-center gap-4 text-slate-300 p-3">
                <div className="w-11 h-11 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-slate-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Innovation Hub</div>
                  <div className="text-sm font-medium text-white">DTU SkyLab, Kongens Lyngby, Denmark</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {status === "sent" ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl p-12 text-center shadow-lg">
                <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-emerald-950 text-emerald-400 border border-emerald-800">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Inquiry received</h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Cora Technologies. A partner will review your technical brief and respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-slate-900/90 border border-slate-800 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-xl">
                {status === "error" && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-800/60 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                    <AlertCircle size={16} className="shrink-0 text-red-400" />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-2">
                    Work Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-2">
                    Project Scope &amp; Objectives
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Briefly describe your systems architecture, project goals, or diligence scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl text-white font-semibold text-xs uppercase tracking-wider bg-[#047857] hover:bg-[#059669] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending…</>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
