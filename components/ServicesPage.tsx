import React from "react";
import { SERVICES } from "../constants";

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 space-y-24 md:space-y-40">
      <header className="max-w-4xl space-y-6 md:space-y-8">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-8 md:w-12 h-[2px] bg-blue-500"></div>
          <span className="text-blue-500 dark:text-blue-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] font-black">
            Offerings Matrix
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tighter leading-none dark:text-white text-slate-900">
          STRATEGIC <br /> <span className="gradient-text">INTEGRATIONS</span>.
        </h2>
        <p className="text-lg md:text-2xl dark:text-gray-400 text-slate-600 leading-relaxed font-medium">
          Leveraging 10 years of cross-functional engineering to provide
          high-stakes technical consulting, architecture design, and elite
          development.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {SERVICES.map((service, idx) => (
          <div
            key={service.title}
            className="electric-card p-6 md:p-10 lg:p-14 group hover:-translate-y-4 transition-all duration-700 dark:bg-zinc-900/40 bg-white border-2 dark:border-white/5 border-slate-200 shadow-2xl relative overflow-visible hover:shadow-blue-500/10"
          >
            {/* Floating Number Decor */}
            <span className="absolute top-6 right-6 md:top-10 md:right-14 text-4xl md:text-6xl font-display font-black dark:text-white/5 text-slate-100 pointer-events-none group-hover:text-blue-500/10 transition-colors">
              0{idx + 1}
            </span>

            <div className="flex justify-between items-start mb-8 md:mb-12">
              <div className="w-16 h-16 md:w-20 md:h-20 dark:bg-blue-500/10 bg-blue-50 rounded-[2rem] flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 shadow-inner border dark:border-blue-500/20 border-blue-100">
                <i
                  className={`${service.icon} text-2xl md:text-3xl text-blue-600 dark:text-blue-500 group-hover:text-white transition-all duration-500`}
                ></i>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black dark:text-white text-slate-900 uppercase tracking-tight group-hover:text-blue-500 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="dark:text-gray-400 text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-8 md:mb-10">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] md:text-[10px] font-mono dark:text-gray-500 text-slate-400 border dark:border-white/10 border-slate-200 px-3 py-1.5 md:px-4 md:py-2 rounded-xl uppercase font-black tracking-widest group-hover:border-blue-500/30 group-hover:text-blue-500 transition-colors duration-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-6 md:pt-8 border-t dark:border-white/5 border-slate-100 flex justify-between items-center">
                <a
                  href="#contact"
                  className="text-[10px] md:text-xs font-black text-blue-500 uppercase tracking-[0.3em] flex items-center gap-3 md:gap-4 hover:text-blue-700 transition-all duration-300 group/btn hover:scale-105 active:scale-95 transform-gpu"
                >
                  Initialize Project
                  <i className="fa-solid fa-arrow-right-long group-hover/btn:translate-x-3 transition-transform duration-300"></i>
                </a>
                <span className="text-[8px] md:text-[9px] font-mono dark:text-gray-800 text-slate-200 uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                  Priority Status: Green
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust / Client Section */}
      <section className="py-12 md:py-20 border-y dark:border-white/5 border-slate-200 text-center space-y-8 md:space-y-12">
        <p className="text-[10px] md:text-xs font-black dark:text-gray-600 text-slate-400 uppercase tracking-[0.5em]">
          Selected Technology Ecosystems I've Empowered
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-24 opacity-30 dark:opacity-20 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-1000">
          <i className="fa-brands fa-react text-4xl md:text-5xl hover:text-[#61DAFB] transition-colors"></i>
          <i className="fa-brands fa-java text-4xl md:text-5xl hover:text-[#007396] transition-colors"></i>
          <i className="fa-brands fa-node-js text-4xl md:text-5xl hover:text-[#339933] transition-colors"></i>
          <i className="fa-brands fa-python text-4xl md:text-5xl hover:text-[#3776AB] transition-colors"></i>
          <i className="fa-brands fa-aws text-4xl md:text-5xl hover:text-[#FF9900] transition-colors"></i>
          <i className="fa-brands fa-docker text-4xl md:text-5xl hover:text-[#2496ED] transition-colors"></i>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark:bg-zinc-900 bg-slate-900 rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-32 text-center space-y-8 md:space-y-12 relative overflow-hidden shadow-3xl group">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
        <h3 className="text-3xl md:text-5xl lg:text-7xl font-display font-black text-white uppercase leading-none tracking-tighter">
          Ready to Architect <br /> the{" "}
          <span className="text-blue-500">Exceptional</span>?
        </h3>
        <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium">
          Currently accepting selected high-impact projects for Q3/Q4 2024.
          Let's build the future of your technical infrastructure.
        </p>
        <div className="pt-4 md:pt-8">
          <a
            href="#contact"
            className="inline-flex px-10 py-5 md:px-16 md:py-8 bg-blue-600 hover:bg-white hover:text-black text-white font-black rounded-3xl transition-all duration-500 text-xs md:text-sm uppercase tracking-widest shadow-2xl shadow-blue-600/30 hover:scale-105 active:translate-y-1"
          >
            Secure Project Uplink
          </a>
        </div>
      </section>
    </div>
  );
};
