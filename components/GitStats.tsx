import React, { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ScrollReveal } from "./ScrollReveal";

interface GitStatsProps {
  theme: "dark" | "light";
}

export const GitStats: React.FC<GitStatsProps> = ({ theme }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const years = [2026, 2025, 2024, 2023];

  return (
    <div className="w-full">
      <ScrollReveal direction="up" viewportAmount={0.2}>
        <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/10 relative overflow-hidden group">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-4 mb-2">
                <i className="fa-brands fa-github text-3xl md:text-4xl dark:text-white text-slate-900"></i>
                <h3 className="text-3xl md:text-4xl font-display font-black dark:text-white text-slate-900 uppercase tracking-tight">
                  Code <span className="text-blue-500">Frequency</span>
                </h3>
              </div>
              <a
                href="https://github.com/snehalSukDev"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-slate-600 font-mono text-sm uppercase tracking-widest hover:text-blue-500 transition-colors"
              >
                @snehalSukDev // Contribution Activity
              </a>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-start">
              {/* Calendar Area */}
              <div className="flex-1 w-full overflow-x-auto pb-4 flex justify-center md:justify-end">
                <div className="min-w-[700px] md:min-w-0">
                  <GitHubCalendar
                    username="snehalSukDev"
                    year={selectedYear}
                    colorScheme={theme}
                    fontSize={12}
                    blockSize={12}
                    blockMargin={4}
                    style={{
                      color: theme === "dark" ? "#e2e8f0" : "#1e293b",
                      fontWeight: "bold",
                    }}
                    theme={{
                      light: [
                        "#ebedf0",
                        "#9be9a8",
                        "#40c463",
                        "#30a14e",
                        "#216e39",
                      ],
                      dark: [
                        "#161b22",
                        "#0e4429",
                        "#006d32",
                        "#26a641",
                        "#39d353",
                      ],
                    }}
                  />
                </div>
              </div>

              {/* Year Selector Sidebar */}
              <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto justify-center">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 uppercase tracking-widest ${
                      selectedYear === year
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                        : "dark:bg-white/5 bg-slate-100 dark:text-gray-400 text-slate-500 hover:bg-blue-500/10 hover:text-blue-500"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
