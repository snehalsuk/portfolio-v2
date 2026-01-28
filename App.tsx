"use client";

import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { GeminiChat } from "./components/GeminiChat";
import { Footer } from "./components/Footer";
import { ElectricBackground } from "./components/ElectricBackground";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ServicesPage } from "./components/ServicesPage";
import { WHATSAPP_URL } from "./constants";

type PageView =
  | "home"
  | "about"
  | "projects"
  | "journey"
  | "contact"
  | "services";
type Theme = "dark" | "light";

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeView, setActiveView] = useState<PageView>("home");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("snehal-theme");
      if (saved) {
        setTheme(saved as Theme);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const handleNavigation = () => {
      const hash = window.location.hash.replace("#", "") as PageView;
      const validPages: PageView[] = [
        "home",
        "about",
        "projects",
        "journey",
        "contact",
        "services",
      ];

      const targetPage = validPages.includes(hash) ? hash : "home";

      if (targetPage !== activeView) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveView(targetPage);
          window.scrollTo({ top: 0, behavior: "instant" });
          setIsTransitioning(false);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleNavigation);

    // Initial load check
    const initialHash = window.location.hash.replace("#", "") as PageView;
    if (
      initialHash &&
      ["home", "about", "projects", "journey", "contact", "services"].includes(
        initialHash,
      )
    ) {
      setActiveView(initialHash);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, [activeView]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("snehal-theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
    window.location.hash = "projects";
  };

  const renderContent = () => {
    switch (activeView) {
      case "home":
        return (
          <div className="space-y-40">
            <Hero />
            <section className="py-20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16">
                <h2 className="text-5xl lg:text-7xl font-display font-black flex items-center gap-6 dark:text-white text-slate-900 uppercase">
                  <span className="text-blue-500 opacity-20 text-3xl font-mono">
                    01/
                  </span>
                  Capability Matrix
                </h2>
              </div>
              <Skills
                activeFilter={activeFilter}
                onSkillClick={handleFilterChange}
              />
            </section>
            <section className="py-20">
              <div className="flex justify-between items-end mb-16">
                <h2 className="text-5xl lg:text-7xl font-display font-black dark:text-white text-slate-900 uppercase">
                  Selected Work
                </h2>
                <a
                  href="#projects"
                  className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] hover:text-blue-700 dark:hover:text-white transition-all group flex items-center gap-3"
                >
                  View Archive
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </a>
              </div>
              <Projects
                activeFilter={null}
                onFilterChange={() => {}}
                limit={2}
              />
            </section>
          </div>
        );
      case "about":
        return <About />;
      case "services":
        return <ServicesPage />;
      case "projects":
        return (
          <div className="pt-24 md:pt-32 pb-12 md:pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-black flex items-center gap-6 uppercase tracking-tighter dark:text-white text-slate-900">
                <span className="text-purple-500 opacity-20 text-3xl font-mono">
                  02/
                </span>
                Work
              </h2>
              {activeFilter && (
                <button
                  onClick={() => setActiveFilter(null)}
                  className="text-[10px] font-mono uppercase tracking-widest bg-blue-500/10 text-blue-500 px-6 py-3 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-all flex items-center gap-3 group"
                >
                  Reset Filter{" "}
                  <i className="fa-solid fa-rotate-right group-hover:rotate-180 transition-transform duration-500"></i>
                </button>
              )}
            </div>
            <Projects
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        );
      case "journey":
        return (
          <div className="pt-24 md:pt-32 pb-12 md:pb-20">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-black mb-10 md:mb-16 flex items-center gap-6 uppercase tracking-tighter dark:text-white text-slate-900">
              <span className="text-pink-500 opacity-20 text-3xl font-mono">
                03/
              </span>
              Journey
            </h2>
            <ExperienceTimeline />
          </div>
        );
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  if (!mounted) return null;

  return (
    <div
      className={`relative min-h-screen transition-colors duration-700 ${theme === "dark" ? "bg-[#020205]" : "bg-slate-50"}`}
    >
      {activeView !== "home" && <ElectricBackground theme={theme} />}

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 md:bottom-32 md:right-8 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
        <i className="fa-brands fa-whatsapp text-2xl md:text-3xl text-white relative z-10"></i>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      </a>

      {/* Background Neon Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-20" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none -z-20" />

      <Navbar
        scrollY={scrollY}
        activeView={activeView}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main
        className={`container mx-auto px-6 lg:px-24 transition-all duration-700 ${isTransitioning ? "opacity-0 scale-[0.98] blur-sm" : "opacity-100 scale-100 blur-0"}`}
      >
        {renderContent()}
      </main>

      <Footer />
      <GeminiChat />

      {/* Page Transition Shutter - Fabulous Style */}
      <div
        className={`fixed inset-0 z-[100] transition-transform duration-[800ms] cubic-bezier(0.85, 0, 0.15, 1) pointer-events-none ${theme === "dark" ? "bg-[#0a0a0f]" : "bg-white"} ${isTransitioning ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span
              className={`text-xs font-mono uppercase tracking-[0.8em] font-black ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
            >
              Synchronizing
            </span>
            <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
