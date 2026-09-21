import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#047857]">
        {children}
      </span>
      <div className="h-px w-10 bg-slate-300" />
    </div>
  );
}
