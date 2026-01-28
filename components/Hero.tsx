import React, { useEffect, useState } from "react";
import { NeuralNetwork3D } from "./NeuralNetwork3D";
import { WHATSAPP_URL } from "../constants";

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const titleLines = [
    { text: "ARCHITECTING", gradient: false },
    { text: "DIGITAL CURRENT", gradient: true },
    { text: "FOR THE FUTURE.", gradient: false },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Immersive 3D Background for Home Page */}
      <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-80 pointer-events-none">
        <NeuralNetwork3D density={60} />
      </div>

      <div className="relative z-10 pointer-events-none">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] mb-12 select-none tracking-tighter dark:text-white text-slate-900">
          {titleLines.map((line, lineIdx) => (
            <span key={lineIdx} className="block overflow-hidden pb-4">
              <span
                className={`block transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) transform 
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} 
                  ${line.gradient ? "gradient-text italic" : ""}`}
                style={{ transitionDelay: `${lineIdx * 150}ms` }}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        <div
          className={`max-w-2xl text-lg md:text-xl dark:text-gray-400 text-slate-600 leading-relaxed mb-16 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
        >
          Senior Software Engineer &{" "}
          <span className="dark:text-white text-slate-900 font-black">
            Frontend Developer
          </span>
          . Mastering the flow between{" "}
          <span className="text-blue-600 font-bold">React Ecosystems</span>,
          <span className="text-purple-600 font-bold">Native Mobility</span>,
          and{" "}
          <span className="text-pink-600 font-bold">
            Enterprise Frappe or Java Backends
          </span>
          .
        </div>

        <div
          className={`flex flex-wrap gap-4 md:gap-8 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} pointer-events-auto`}
          style={{ transitionDelay: "900ms" }}
        >
          <a
            href="#projects"
            className="px-8 py-4 md:px-12 md:py-6 bg-blue-600 text-white font-black rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition-all duration-500 flex items-center gap-4 group shadow-2xl shadow-blue-500/20 text-sm md:text-base"
          >
            INITIALIZE EXPLORATION
            <i className="fa-solid fa-bolt-lightning group-hover:rotate-12 transition-transform"></i>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 md:px-12 md:py-6 border dark:border-white/10 border-slate-200 dark:text-white text-slate-900 font-black rounded-full hover:bg-blue-50 dark:hover:bg-white/5 transition-all duration-500 backdrop-blur-md flex items-center gap-3 text-sm md:text-base"
          >
            <i className="fa-brands fa-whatsapp text-[#25D366]"></i>
            DIRECT UPLINK
          </a>
        </div>
      </div>

      {/* Dynamic Geometric Orbit */}
      <div
        className={`absolute -right-20 md:-right-40 top-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-blue-500/5 rounded-full transition-all duration-[4000ms] transform ${isVisible ? "scale-100 rotate-90 opacity-40" : "scale-0 rotate-0 opacity-0"}`}
      >
        <div className="absolute inset-10 md:inset-20 border border-purple-500/10 rounded-full animate-[spin_12s_linear_infinite]"></div>
        <div className="absolute inset-20 md:inset-40 border border-pink-500/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
      </div>

      <div className="hidden xl:block absolute left-0 bottom-24 pointer-events-none rotate-90 origin-left">
        <p className="text-[10px] font-mono dark:text-gray-800 text-slate-300 tracking-[1em] uppercase">
          Architecture // React // AWS // AI // Frappe // N8N
        </p>
      </div>
    </div>
  );
};
