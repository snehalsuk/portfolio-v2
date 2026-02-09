import React from "react";
import Link from "next/link";
import { WHATSAPP_URL, LINKEDIN_URL } from "../constants";
import { ScrollReveal } from "./ScrollReveal";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-24 border-t border-white/5 relative overflow-hidden">
      <ScrollReveal direction="up" className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 mb-10 md:mb-16">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-display font-black tracking-tighter cursor-pointer group flex items-center gap-2"
          >
            <span className="group-hover:text-blue-400 transition-colors uppercase dark:text-white text-slate-900">
              SNEHAL
            </span>
            <span className="text-blue-500">.</span>
          </Link>

          <ul className="flex flex-wrap justify-center gap-6 md:gap-12 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Base
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-white transition-colors">
                Archive
              </Link>
            </li>
            <li>
              <Link
                href="/journey"
                className="hover:text-white transition-colors"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex gap-3 md:gap-4">
            <a
              href="https://github.com/snehalSukDev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/40 transition-all hover:scale-110 dark:text-white text-slate-600"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-sm md:text-base"></i>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/40 transition-all hover:scale-110 dark:text-white text-slate-600"
            >
              <i className="fa-brands fa-linkedin-in text-sm md:text-base"></i>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all hover:scale-110 dark:text-white text-slate-600"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-sm md:text-base"></i>
            </a>
            {/* <a
              href="https://x.com/snehalSukDev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/40 transition-all hover:scale-110 dark:text-white text-slate-600"
              aria-label="Twitter / X"
            >
              <i className="fa-brands fa-x-twitter text-sm md:text-base"></i>
            </a> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 md:pt-16 border-t border-white/5">
          <p className="text-[10px] md:text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} Snehal Sukhadeve. All systems nominal.
          </p>
          <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 font-mono">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            OPERATIONAL
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};
