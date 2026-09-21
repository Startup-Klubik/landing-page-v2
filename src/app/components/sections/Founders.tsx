import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../shared/SectionLabel";
import FadeUp from "../shared/FadeUp";

const leaders = [
  {
    name: "Dan",
    title: "Chief Executive Officer & Chief Technology Officer",
    focus: "Technical Advisory & Architecture",
    avatar: "/avatars/Dan.JPG",
    bio: "Leads software architecture, codebase analysis, and systems engineering. Brings deep technical depth from DTU to advise on scalable, maintainable distributed systems.",
    linkedin: "https://www.linkedin.com/company/cora-technologies",
  },
  {
    name: "Diana",
    title: "Chief Product Officer & Co-founder",
    focus: "Product Strategy & Operations",
    avatar: "/avatars/Diana.png",
    bio: "Leads product strategy, client advisory, and stakeholder alignment. Bridges complex technical implementations with clear commercial outcomes and timeline discipline.",
    linkedin: "https://www.linkedin.com/company/cora-technologies",
  },
  {
    name: "Alexandra",
    title: "Head of User Experience & Brand",
    focus: "Interface Design & Brand Systems",
    avatar: "/avatars/Alexandra.png",
    bio: "Directs interface architecture, brand identity, and design systems. Ensures sophisticated engineering platforms deliver polished, accessible, and intuitive user experiences.",
    linkedin: "https://www.linkedin.com/company/cora-technologies",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="py-28 md:py-36 px-6 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <FadeUp className="mb-16 md:mb-20">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] max-w-2xl leading-tight">
            Founded by systems engineers and technical advisors
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl leading-relaxed text-base md:text-lg">
            We combine academic depth from DTU SkyLab with real-world engineering execution. Every engagement is directly led and architected by our founding partners.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <FadeUp key={leader.name} delay={index * 0.1}>
              <div className="border border-slate-200/90 bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-2xs h-full flex flex-col justify-between transition-all duration-300 hover:border-emerald-200/60 hover:shadow-[0_8px_32px_rgba(4,120,87,0.08),0_2px_8px_rgba(0,0,0,0.06)]">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="w-22 h-22 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-2xs">
                      <img
                        src={leader.avatar}
                        alt={`${leader.name} — ${leader.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-500 hover:text-[#0f172a] inline-flex items-center gap-1.5 transition-colors p-2 rounded-lg hover:bg-slate-50"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#047857]">
                      {leader.focus}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0f172a] mt-1.5 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-5 leading-normal">
                      {leader.title}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>DTU SkyLab</span>
                  <span className="text-[#047857] font-medium">Founding Partner</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
