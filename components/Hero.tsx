import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NeuralNetwork3D } from "./NeuralNetwork3D";
import { StarField } from "./StarField";
import { TechOrbit } from "./TechOrbit";
import { WHATSAPP_URL } from "../constants";

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-20">
      {/* Top Center Purple Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] -z-10 rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>

      {/* Star Field Background */}
      <StarField />

      {/* Immersive 3D Background */}
      <div className="absolute inset-0 -z-10 opacity-60 dark:opacity-80 pointer-events-none">
        <NeuralNetwork3D density={60} />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-display font-black leading-[1.1] tracking-tight dark:text-white text-slate-900">
            Turning ideas into <br />
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent italic pr-2">
              scalable
            </span>
            <br />
            software.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl dark:text-gray-400 text-slate-600 leading-relaxed max-w-xl font-medium">
            Senior software developer with 2+ years of experience developing
            modern web, mobile, and ERP applications. Skilled in React.js, React
            Native, Java, MySQL, and Frappe, with a strong focus on maintainable
            code and scalable system design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 pointer-events-auto">
            <Link
              href="/work"
              className="px-8 py-4 md:px-10 md:py-5 bg-blue-600 text-white font-black rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition-all duration-500 flex items-center gap-4 group shadow-2xl shadow-blue-500/20 text-sm md:text-base"
            >
              INITIALIZE EXPLORATION
              <i className="fa-solid fa-bolt-lightning group-hover:rotate-12 transition-transform"></i>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 md:px-10 md:py-5 border dark:border-white/10 border-slate-200 dark:text-white text-slate-900 font-black rounded-full hover:bg-blue-50 dark:hover:bg-white/5 transition-all duration-500 backdrop-blur-md flex items-center gap-3 text-sm md:text-base"
            >
              <i className="fa-brands fa-whatsapp text-[#25D366]"></i>
              DIRECT UPLINK
            </a>
          </div>
        </motion.div>

        {/* Right Column: Tech Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <TechOrbit />
        </motion.div>
      </div>

      {/* Decorative Side Text */}
      <div className="hidden xl:block absolute left-0 bottom-24 pointer-events-none rotate-90 origin-left">
        <p className="text-[10px] font-mono dark:text-gray-800 text-slate-300 tracking-[1em] uppercase">
          Architecture // React // AWS // AI // Frappe // N8N
        </p>
      </div>
    </div>
  );
};
