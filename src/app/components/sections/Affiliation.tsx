import FadeUp from "../shared/FadeUp";

export default function Affiliation() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] tracking-tight mb-3">
                Incubated at DTU SkyLab — Denmark&apos;s innovation hub
              </h2>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
                Founded by computer science engineers at the Technical University of Denmark (DTU). We combine systems engineering and academic knowledge into high-impact commercial software.
              </p>
            </div>

            <div className="flex items-center shrink-0">
              <div className="border-trace-card flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-6 py-4 shadow-2xs hover:border-slate-300 transition-colors">
                <img
                  src="./logos/skylab.png"
                  alt="DTU Skylab"
                  className="h-8 w-auto object-contain"
                />
                <div className="border-l border-slate-200 pl-4">
                  <div className="text-sm font-bold text-[#0f172a]">DTU SkyLab</div>
                  <div className="text-xs text-slate-500">Innovation Hub</div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
