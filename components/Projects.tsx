import React, { useMemo, useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { Project } from "../types";
import { ScrollReveal } from "./ScrollReveal";

const TAG_DESCRIPTIONS: Record<string, string> = {
  Frappe:
    "Full-stack web framework based on Python & MariaDB, optimized for ERP systems.",
  React:
    "Industry-standard UI library for building complex, reactive web interfaces.",
  Python:
    "High-level programming language used for backend logic and data processing.",
  Redis:
    "In-memory data structure store, used as a database, cache, and message broker.",
  "React Native":
    "Framework for building native mobile apps using React and JavaScript.",
  TypeScript:
    "Strongly typed programming language that builds on JavaScript for better scale.",
  "Node.js":
    "JavaScript runtime built on Chrome's V8 engine for scalable network apps.",
  Firebase:
    "Platform developed by Google for creating mobile and web applications.",
  "D3.js":
    "Powerful JavaScript library for producing dynamic, interactive data visualizations.",
  Java: "Robust, object-oriented language for mission-critical enterprise systems.",
  "Spring Boot":
    "Framework designed to simplify the bootstrapping and development of new Spring apps.",
  Docker:
    "Platform for developing, shipping, and running applications in containers.",
  Kubernetes:
    "Open-source system for automating deployment, scaling, and management of containers.",
  OAuth2:
    "Industry-standard protocol for authorization and secure identity management.",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  activeFilter,
  onFilterChange,
}) => {
  const [shouldLoadImg, setShouldLoadImg] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [isHoveringDemo, setIsHoveringDemo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadImg(true); // Trigger image load when card is near viewport
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px", // Start loading 200px before it enters the viewport
      },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-[2.5rem] dark:bg-zinc-900 bg-white border dark:border-white/5 border-slate-200 h-[400px] md:h-[500px] lg:h-[600px] shadow-2xl"
    >
      <div className="absolute inset-0 overflow-hidden bg-slate-200 dark:bg-zinc-800">
        {shouldLoadImg && (
          <img
            src={project.imageUrl}
            alt={project.title}
            onLoad={() => setImgLoaded(true)}
            loading="lazy"
            className={`w-full h-full object-cover transform scale-105 group-hover:scale-115 group-hover:-translate-y-4 transition-all duration-[2000ms] ease-out 
              ${imgLoaded ? "opacity-20 dark:opacity-30 group-hover:opacity-60 dark:group-hover:opacity-50" : "opacity-0"}
            `}
          />
        )}

        {/* Loading Spinner for Image */}
        {!imgLoaded && shouldLoadImg && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-black dark:via-black/80 dark:to-transparent bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />

      <div className="p-6 md:p-8 lg:p-14 absolute inset-0 flex flex-col justify-end z-20 transition-all duration-700 ease-out group-hover:-translate-y-8">
        <div className="mb-6 flex flex-wrap gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 shadow-sm">
            {project.category}
          </span>
          <div className="w-full flex flex-wrap gap-2 relative">
            {project.tags.map((tag) => (
              <div key={tag} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onFilterChange(tag);
                  }}
                  onMouseEnter={() => setHoveredTag(tag)}
                  onMouseLeave={() => setHoveredTag(null)}
                  className={`text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border transition-all duration-300 relative z-30 font-black
                    ${
                      activeFilter?.toLowerCase() === tag.toLowerCase()
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                        : "dark:bg-white/5 bg-white/40 dark:border-white/10 border-slate-200 dark:text-white/40 text-slate-500 hover:border-blue-500 hover:text-blue-600"
                    }
                  `}
                >
                  {tag}
                </button>
                {hoveredTag === tag && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 dark:bg-zinc-950/90 bg-white/95 backdrop-blur-md border dark:border-white/10 border-slate-200 p-3 rounded-xl shadow-2xl z-[60] animate-in fade-in slide-in-from-bottom-2 duration-300 pointer-events-none">
                    <p className="text-[8px] text-blue-500 font-mono mb-1 uppercase tracking-tighter">
                      Stack Intelligence
                    </p>
                    <p className="text-[10px] dark:text-gray-300 text-slate-700 leading-tight font-medium">
                      {TAG_DESCRIPTIONS[tag] ||
                        "Core technology used in this architecture."}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent dark:border-t-zinc-950 border-t-white"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 dark:group-hover:text-blue-400 group-hover:text-blue-600 transition-colors duration-500 tracking-tight dark:text-white text-slate-900">
          {project.title}
        </h3>
        <p className="dark:text-gray-400 text-slate-700 mb-10 line-clamp-3 text-base md:text-lg leading-relaxed transition-all duration-500 group-hover:dark:text-gray-100 group-hover:text-slate-900 font-medium">
          {project.description}
        </p>
        <div className="flex justify-between items-center overflow-hidden h-14">
          <div className="flex items-center gap-5 transform translate-y-0 md:translate-y-16 md:group-hover:translate-y-0 transition-transform duration-700 relative">
            <button className="w-14 h-14 rounded-full dark:bg-white bg-slate-900 text-white dark:text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl shadow-black/20">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>

            <div className="relative">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHoveringDemo(true)}
                  onMouseLeave={() => setIsHoveringDemo(false)}
                  className="px-8 py-4 rounded-full bg-blue-600 hover:bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-xl relative z-20 group/demo"
                >
                  View Live Demo{" "}
                  <i className="fa-solid fa-bolt text-[8px] animate-pulse"></i>
                  {/* Tooltip for Live Demo */}
                  {isHoveringDemo && (
                    <div className="absolute bottom-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-48 bg-zinc-950 text-white border border-blue-500/30 p-3 rounded-xl shadow-[0_10px_40px_rgba(59,130,246,0.3)] z-[100] animate-in fade-in zoom-in duration-300 pointer-events-none">
                      <div className="flex items-center gap-2 mb-1">
                        <i className="fa-solid fa-external-link text-blue-400 text-[10px]"></i>
                        <p className="text-[9px] font-black uppercase tracking-widest text-blue-400">
                          Security Gateway
                        </p>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-tight">
                        Opening external demo environment in a new secure tab.
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-zinc-950"></div>
                    </div>
                  )}
                </a>
              ) : (
                <span className="text-[10px] font-mono dark:text-white/40 text-slate-400 font-black uppercase tracking-[0.2em]">
                  Architecture Case Study
                </span>
              )}
            </div>
          </div>
          <span className="text-[10px] font-mono dark:text-white/5 text-slate-200 uppercase tracking-[0.4em] group-hover:text-blue-500/30 transition-colors">
            0{index + 1}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 border dark:border-white/0 border-transparent group-hover:border-blue-500/20 rounded-[2.5rem] transition-all duration-1000 pointer-events-none" />
    </div>
  );
};

interface ProjectsProps {
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
  limit?: number;
}

export const Projects: React.FC<ProjectsProps> = ({
  activeFilter,
  onFilterChange,
  limit,
}) => {
  const categories: string[] = ["Frontend", "Mobile", "ERP", "Backend"];
  const filteredProjects = useMemo(() => {
    let result = activeFilter
      ? PROJECTS.filter(
          (p) =>
            p.tags.some((t) =>
              t.toLowerCase().includes(activeFilter.toLowerCase()),
            ) || p.category.toLowerCase().includes(activeFilter.toLowerCase()),
        )
      : PROJECTS;
    return limit ? result.slice(0, limit) : result;
  }, [activeFilter, limit]);

  return (
    <div className="space-y-10 md:space-y-16">
      {!limit && (
        <div className="flex flex-wrap items-center gap-2 md:gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <button
            onClick={() => onFilterChange(null)}
            className={`px-4 py-3 md:px-8 md:py-4 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border relative group
              ${
                !activeFilter
                  ? "dark:bg-white bg-slate-900 text-white dark:text-black border-transparent scale-105 shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                  : activeFilter
                    ? "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 dark:bg-white/5 bg-white text-gray-500 border-slate-200 dark:border-white/10"
                    : "dark:bg-white/5 bg-white text-gray-500 border-slate-200 dark:border-white/10 hover:text-blue-600"
              }`}
          >
            {!activeFilter && (
              <span className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse -z-10"></span>
            )}
            All Systems
          </button>

          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            const isDimmed = activeFilter !== null && !isActive;

            return (
              <button
                key={cat}
                onClick={() => onFilterChange(cat)}
                className={`px-4 py-3 md:px-8 md:py-4 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border relative overflow-hidden group
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-500 scale-110 shadow-[0_0_30px_rgba(59,130,246,0.5)] z-10"
                      : isDimmed
                        ? "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 dark:bg-white/5 bg-white text-gray-500 border-slate-200 dark:border-white/10"
                        : "dark:bg-white/5 bg-white text-gray-500 border-slate-200 dark:border-white/10 hover:border-blue-500 hover:text-blue-500 hover:scale-105"
                  }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></span>
                )}
                {cat}
              </button>
            );
          })}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
        {filteredProjects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.1}>
            <ProjectCard
              project={project}
              index={i}
              activeFilter={activeFilter}
              onFilterChange={onFilterChange}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
