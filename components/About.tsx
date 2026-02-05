import React from "react";
import { SERVICES } from "../constants";
import { NeuralNetwork3D } from "./NeuralNetwork3D";

export const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 space-y-24 md:space-y-40">
      {/* Intro Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-10">
          <div className="flex items-center gap-6">
            <div className="w-12 h-[2px] bg-blue-500"></div>
            <span className="text-blue-500 dark:text-blue-400 font-mono text-xs uppercase tracking-[0.5em] font-black">
              Veteran Dossier
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tighter leading-none dark:text-white text-slate-900">
            ENGINEERING <br />{" "}
            <span className="gradient-text italic">PRECISE</span> FLOW.
          </h2>
          <p className="text-xl md:text-2xl dark:text-gray-400 text-slate-600 leading-relaxed font-medium">
            Over the past{" "}
            <span className="text-blue-500 font-black">2+ years</span>, I have
            evolved from a builder of components to an architect of ecosystems.
            Snehal Sukhadeve is synonymous with technical resilience and
            high-fidelity user experiences.
          </p>
          <div className="grid grid-cols-2 gap-12 py-8">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-display font-black dark:text-white text-slate-900">
                2+
              </p>
              <p className="text-xs dark:text-gray-600 text-slate-400 uppercase tracking-[0.3em] font-black">
                Years Expertise
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-display font-black dark:text-white text-slate-900">
                5+
              </p>
              <p className="text-xs dark:text-gray-600 text-slate-400 uppercase tracking-[0.3em] font-black">
                Systems Shipped
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden electric-card dark:bg-zinc-900 bg-white shadow-3xl group border-2 dark:border-white/5 border-slate-200">
            <img
              src="/images/snehal_aboutus.jpeg"
              alt="Snehal Sukhadeve"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1500ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Embedded 3D Neural Network Animation Overlay */}
            <NeuralNetwork3D />
          </div>
          {/* Floating Logic Box */}
          <div className="absolute -bottom-12 -left-12 p-10 glass-card rounded-[3rem] border-2 dark:border-white/10 border-slate-200 shadow-3xl hidden xl:block animate-bounce-slow">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl">
                <i className="fa-solid fa-code-merge text-white text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-widest dark:text-white text-slate-900">
                  Senior Software Engineer
                </p>
                {/* <p className="text-xs dark:text-gray-500 text-slate-400 uppercase font-mono mt-1">
                  Fault Tolerance // Observability
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <NeuralNetwork3D />
        </div>
        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          <h3 className="text-4xl md:text-5xl font-display font-black dark:text-white text-slate-900 uppercase tracking-tighter">
            My Architectural Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] dark:bg-zinc-900/60 bg-white/60 backdrop-blur-md border-2 dark:border-white/5 border-slate-100 shadow-xl space-y-6 group hover:border-blue-500/30 transition-all">
              <i className="fa-solid fa-microchip text-4xl text-blue-500"></i>
              <h4 className="text-2xl font-black dark:text-white text-slate-900">
                Maintainable Complexity
              </h4>
              <p className="dark:text-gray-400 text-slate-600 leading-relaxed">
                Complexity is inevitable; confusion is a choice. I design
                systems where every component has a single responsibility and a
                clear path of observation.
              </p>
            </div>
            <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] dark:bg-zinc-900/60 bg-white/60 backdrop-blur-md border-2 dark:border-white/5 border-slate-100 shadow-xl space-y-6 group hover:border-purple-500/30 transition-all">
              <i className="fa-solid fa-dna text-4xl text-purple-500"></i>
              <h4 className="text-2xl font-black dark:text-white text-slate-900">
                Evolving Organisms
              </h4>
              <p className="dark:text-gray-400 text-slate-600 leading-relaxed">
                Software should grow, not rot. I advocate for evolutionary
                architectures that allow for component swapping without
                system-wide trauma.
              </p>
            </div>
          </div>
        </div>
        <div className="dark:bg-blue-600/10 bg-blue-600 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 flex flex-col justify-center border-2 dark:border-blue-500/20 border-transparent shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <NeuralNetwork3D theme="dark" />
          </div>
          <h4 className="text-3xl md:text-4xl font-display font-black mb-8 leading-tight relative z-10">
            Beyond the <br />
            <span className="dark:text-blue-400 text-slate-900">Editor</span>
          </h4>
          <p className="text-lg font-medium opacity-80 leading-relaxed mb-10 relative z-10">
            When I'm not developing Enterprise modules or React apps, I mentor
            junior engineers, contribute to Frappe modules, and explore the
            intersection of Generative AI and UI engineering.
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest">
              Mentorship
            </span>
            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest">
              Open Source
            </span>
            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest">
              Architecture Strategy
            </span>
          </div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="text-center py-12 md:py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[150px] -z-10"></div>
        <i className="fa-solid fa-quote-right text-8xl text-blue-500/10 mb-10 block"></i>
        <h3 className="text-4xl md:text-6xl font-display font-medium leading-tight dark:text-white/90 text-slate-900 max-w-5xl mx-auto mb-16 px-6 italic">
          "The most powerful tool in a developer's arsenal isn't the latest
          framework, but the{" "}
          <span className="text-blue-500 font-black">empathy</span> to
          understand the user and the{" "}
          <span className="text-blue-500 font-black">discipline</span> to keep
          the codebase clean."
        </h3>
        <div className="inline-flex items-center gap-6 p-4 rounded-3xl dark:bg-white/5 bg-white border-2 dark:border-white/10 border-slate-200">
          <div className="w-16 h-16 rounded-2xl overflow-hidden grayscale">
            <img
              src="/images/snehal_aboutus.jpeg"
              alt="Signature"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-black uppercase tracking-widest dark:text-white text-slate-900">
              Snehal Sukhadeve
            </p>
            <p className="text-[10px] dark:text-gray-600 text-slate-500 uppercase font-mono">
              Senior Software Engineer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
