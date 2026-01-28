
import React, { useState } from 'react';
import { SKILLS } from '../constants';

interface SkillsProps {
  activeFilter: string | null;
  onSkillClick: (skill: string) => void;
}

const SkillPulse: React.FC<{ level: number; active: boolean }> = ({ level, active }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background track */}
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="dark:text-white/5 text-slate-100"
        />
        {/* Progress path */}
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="url(#skillGradient)"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          className={`transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1) ${active ? 'opacity-100' : 'opacity-80'}`}
        />
        <defs>
          <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-black dark:text-white text-slate-900 leading-none">{level}%</span>
        <span className="text-[7px] font-mono dark:text-gray-600 text-slate-400 uppercase tracking-tighter mt-1">CAPACITY</span>
      </div>

      {/* Decorative pulse ring when active/hovered */}
      <div className={`absolute inset-0 border-2 border-blue-500/20 rounded-full transition-all duration-700 ${active ? 'scale-125 opacity-0 animate-ping' : 'scale-100 opacity-0'}`}></div>
    </div>
  );
};

const SkillSparkline: React.FC<{ active: boolean }> = ({ active }) => {
  // Generate random-looking but stable path for a sparkline
  const points = [10, 40, 25, 60, 45, 80, 70, 95];
  const path = points.map((p, i) => `${i * 15},${100 - p}`).join(' L ');

  return (
    <div className="w-full h-12 mt-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
      <svg viewBox="0 0 105 100" className="w-full h-full preserve-3d">
        <path
          d={`M 0,100 L ${path}`}
          fill="none"
          stroke="url(#sparkGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-all duration-[3000ms] ${active ? 'stroke-dasharray-[500] stroke-dashoffset-0' : ''}`}
        />
        <defs>
          <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ activeFilter, onSkillClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {SKILLS.map((skill) => (
        <div 
          key={skill.name} 
          onClick={() => onSkillClick(skill.name)}
          className={`electric-card p-6 md:p-10 transition-all duration-700 group cursor-pointer relative overflow-visible border dark:border-white/5 border-slate-200 dark:bg-zinc-900/40 bg-white shadow-xl flex flex-col
            ${activeFilter === skill.name ? 'scale-[1.02] md:scale-[1.05] ring-2 ring-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10' : 'hover:scale-[1.02] md:hover:scale-105'}
          `}
        >
          {/* Detailed Expertise Dossier Tooltip */}
          <div className="hidden md:block absolute z-50 bottom-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-80 dark:bg-zinc-950 bg-white border-2 dark:border-blue-500/30 border-slate-200 p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 pointer-events-none transform translate-y-4 group-hover:translate-y-0 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <p className="text-[10px] text-blue-500 font-mono uppercase tracking-[0.3em] font-black">Architecture Analysis</p>
            </div>
            <p className="text-sm dark:text-gray-300 text-slate-700 leading-relaxed font-medium mb-4">{skill.relevance}</p>
            
            <div className="pt-4 border-t dark:border-white/5 border-slate-100 flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-500/50 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-500/20 rounded-full"></div>
              </div>
              <span className="text-[8px] font-mono dark:text-gray-600 text-slate-400">READY_FOR_DEPLOYMENT</span>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[12px] border-transparent dark:border-t-zinc-950 border-t-white"></div>
          </div>

          <div className="flex justify-between items-start mb-6 md:mb-8 relative">
            <div className="space-y-1">
               <span className="dark:text-blue-500 text-blue-600 text-[8px] md:text-[9px] font-mono uppercase tracking-[0.4em] font-black">{skill.category}</span>
               <h3 className="text-2xl md:text-3xl font-display font-black dark:text-white text-slate-900 group-hover:text-blue-500 transition-colors">
                  {skill.name}
               </h3>
            </div>
            <SkillPulse level={skill.level} active={activeFilter === skill.name} />
          </div>
          
          <div className="flex-1 space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl dark:bg-white/5 bg-slate-50 border dark:border-white/5 border-slate-100 group-hover:border-blue-500/20 transition-all">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <i className={`${skill.icon} text-lg md:text-xl`}></i>
              </div>
              <div className="flex-1">
                 <p className="text-[9px] md:text-[10px] dark:text-gray-500 text-slate-400 uppercase font-black tracking-widest">Active Utilization</p>
                 <div className="h-1 w-full bg-blue-500/10 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-[2s] delay-300" style={{ width: `${skill.level}%` }}></div>
                 </div>
              </div>
            </div>

            {/* Growth Sparkline Visualization */}
            <div className="relative pt-2 md:pt-4">
              <div className="flex justify-between items-center mb-2">
                 <p className="text-[8px] md:text-[9px] font-mono dark:text-gray-700 text-slate-300 uppercase tracking-widest font-black">10yr Proficiency Curve</p>
                 <span className="text-[8px] md:text-[9px] font-mono text-blue-500 animate-pulse">OPTIMIZING</span>
              </div>
              <SkillSparkline active={activeFilter === skill.name} />
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex justify-between items-center pt-4 md:pt-6 border-t dark:border-white/5 border-slate-100">
            <button className="text-[8px] md:text-[9px] font-black uppercase tracking-widest dark:text-gray-500 text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 md:gap-3">
               Detailed Stats
               <i className="fa-solid fa-chart-line opacity-40 group-hover:opacity-100 transition-opacity"></i>
            </button>
            <i className="fa-solid fa-arrow-right text-[10px] md:text-xs text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"></i>
          </div>

          {/* Glitch Overlay effect on hover */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};
