import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "../constants";

interface NavbarProps {
  scrollY: number;
  activeView: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrollY,
  activeView,
  theme,
  onToggleTheme,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navLinks = [
    { name: "Home", href: "/", key: "home" },
    { name: "About", href: "/about", key: "about" },
    { name: "Services", href: "/services", key: "services" },
    { name: "Work", href: "/work", key: "projects" },
    { name: "Journey", href: "/journey", key: "journey" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-8"}`}
      >
        <div
          className={`container mx-auto px-6 lg:px-24 flex justify-between items-center transition-all duration-500 ${isScrolled ? "glass-card rounded-full shadow-2xl px-8 md:px-12 max-w-7xl mt-4 mx-auto" : ""}`}
        >
          <Link
            href="/"
            className="text-2xl font-display font-black tracking-tighter cursor-pointer group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-all shadow-lg shadow-blue-500/30">
              <img
                src="/images/logo.png"
                alt="Brand Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="group-hover:text-blue-500 transition-colors uppercase dark:text-white text-slate-900">
              SNEHAL
            </span>
            <span className="text-blue-500 -ml-1">.</span>
          </Link>

          <ul className="hidden xl:flex gap-10 items-center">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`text-[11px] font-black transition-all uppercase tracking-[0.25em] relative group py-2 ${
                    activeView === link.key
                      ? "dark:text-white text-slate-900"
                      : "text-gray-500 hover:text-blue-500 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] bg-blue-500 transition-all duration-500 rounded-full ${
                      activeView === link.key
                        ? "w-full"
                        : "w-0 group-hover:w-1/2"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}

            <div className="flex items-center gap-4 ml-6 pl-8 border-l-2 dark:border-white/10 border-slate-200">
              <button
                onClick={onToggleTheme}
                className="relative w-12 h-12 rounded-2xl flex items-center justify-center dark:bg-white/5 bg-slate-100 hover:scale-110 active:scale-95 transition-all group overflow-hidden shadow-inner"
                aria-label="Toggle Theme"
              >
                <div className="absolute inset-0 border-2 border-blue-500/10 group-hover:border-blue-500/40 rounded-2xl transition-colors"></div>
                <div
                  className={`transform transition-transform duration-700 ${theme === "dark" ? "rotate-0" : "rotate-[360deg]"}`}
                >
                  {theme === "dark" ? (
                    <i className="fa-solid fa-moon text-blue-400 text-lg"></i>
                  ) : (
                    <i className="fa-solid fa-sun text-orange-500 text-lg"></i>
                  )}
                </div>
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all transform hover:scale-110 shadow-lg border border-[#25D366]/20"
                aria-label="Connect on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>

              <li>
                <Link
                  href="/contact"
                  className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/20 active:translate-y-1 ${
                    activeView === "contact"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black text-white"
                  }`}
                >
                  Connect
                </Link>
              </li>
            </div>
          </ul>

          <div className="xl:hidden flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <button
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200"
            >
              {theme === "dark" ? (
                <i className="fa-solid fa-moon text-blue-400"></i>
              ) : (
                <i className="fa-solid fa-sun text-orange-500"></i>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl dark:text-white text-slate-900 p-2 focus:outline-none"
            >
              <i
                className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars-staggered"} transition-all duration-300`}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className={`absolute inset-0 backdrop-blur-2xl ${theme === "dark" ? "bg-[#020205]/95" : "bg-white/95"}`}
        ></div>

        <div className="relative h-full flex flex-col justify-center items-center p-4 md:p-8 overflow-y-auto">
          <ul className="space-y-6 md:space-y-8 text-center mt-auto mb-auto">
            {navLinks.map((link, idx) => (
              <li
                key={link.key}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`transform transition-all duration-700 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-3xl md:text-4xl font-display font-black uppercase tracking-tighter ${
                    activeView === link.key
                      ? "text-blue-500"
                      : "dark:text-white text-slate-900 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li
              style={{ transitionDelay: `${navLinks.length * 100}ms` }}
              className={`pt-4 md:pt-8 transform transition-all duration-700 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} flex flex-col items-center gap-4`}
            >
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="inline-block px-10 py-4 md:px-12 md:py-5 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs md:text-sm shadow-2xl shadow-blue-600/30"
              >
                Let's Connect
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#25D366] font-bold uppercase tracking-widest text-[10px] md:text-xs py-3 px-6 md:py-4 md:px-8 border border-[#25D366]/30 rounded-2xl bg-[#25D366]/5"
              >
                <i className="fa-brands fa-whatsapp text-lg md:text-xl"></i>
                WhatsApp Me
              </a>
            </li>
          </ul>

          <div className="w-full px-8 flex justify-center gap-8 py-8 mt-auto">
            <a
              href="https://github.com/snehal-dev"
              className="text-2xl text-gray-500 hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/snehal-dev"
              className="text-2xl text-gray-500 hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href={WHATSAPP_URL}
              className="text-2xl text-gray-500 hover:text-[#25D366] transition-colors"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
