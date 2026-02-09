import React from "react";
import { EXPERIENCES } from "../constants";
import { ScrollReveal } from "./ScrollReveal";

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
      {EXPERIENCES.map((exp, index) => (
        <ScrollReveal key={exp.id} delay={index * 0.1}>
          <div className="relative pl-8 md:pl-12 border-l-2 dark:border-white/10 border-slate-200 group pb-8 md:pb-12 last:pb-0">
            {/* Dot */}
            <div className="absolute left-[-6px] top-0 w-[10px] h-[10px] rounded-full bg-slate-300 dark:bg-white/20 group-hover:bg-pink-500 transition-colors shadow-[0_0_15px_rgba(236,72,153,0)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"></div>

            <div className="mb-2 text-pink-600 dark:text-pink-400 font-mono text-xs md:text-sm uppercase tracking-widest font-black">
              {exp.period}
            </div>
            <h3 className="text-xl md:text-3xl font-bold mb-1 dark:text-white text-slate-900">
              {exp.position}
            </h3>
            <div className="text-base md:text-lg text-blue-600 dark:text-white/60 mb-4 md:mb-6 font-semibold">
              {exp.company}
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {exp.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 md:gap-4 dark:text-gray-400 text-slate-600 leading-relaxed font-medium text-sm md:text-base"
                >
                  <span className="mt-1.5 md:mt-2.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></span>
                  {resp}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[9px] md:text-[10px] font-mono border dark:border-white/10 border-slate-200 rounded-lg px-3 py-1 md:px-4 md:py-1.5 dark:text-gray-500 text-slate-500 uppercase font-black hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};
