import React from "react";

const TECH_ITEMS = [
  { type: "icon", value: "fa-brands fa-react", color: "text-blue-400" }, // React
  { type: "text", value: "JS", color: "text-yellow-400" }, // JS
  { type: "icon", value: "fa-solid fa-fire", color: "text-orange-500" }, // Firebase
  { type: "icon", value: "fa-solid fa-caret-up", color: "text-white" }, // Next.js (Triangle)
  { type: "text", value: "TS", color: "text-blue-500" }, // TS
  { type: "icon", value: "fa-brands fa-aws", color: "text-orange-400" }, // AWS
  { type: "icon", value: "fa-solid fa-bolt", color: "text-yellow-300" }, // Vite/Performance
];

export const TechOrbit: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
      {/* Orbits */}
      <div className="absolute inset-0 border border-white/5 rounded-full" />
      <div className="absolute inset-12 md:inset-20 border border-white/5 rounded-full" />
      <div className="absolute inset-24 md:inset-40 border border-white/5 rounded-full" />
      
      {/* Radar Lines */}
      <div className="absolute w-full h-px bg-white/5" />
      <div className="absolute w-px h-full bg-white/5" />
      <div className="absolute w-full h-px bg-white/5 rotate-45" />
      <div className="absolute w-px h-full bg-white/5 rotate-45" />

      {/* Center Glow */}
      <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />

      {/* Floating Icons */}
      {TECH_ITEMS.map((item, i) => {
        const angle = (i * 360) / TECH_ITEMS.length;
        const radius = 42; // Percentage from center
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={i}
            className="absolute w-12 h-12 md:w-16 md:h-16 bg-black/50 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group z-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {item.type === "icon" ? (
              <i className={`${item.value} text-2xl md:text-3xl ${item.color} group-hover:animate-bounce`}></i>
            ) : (
              <span className={`text-xl md:text-2xl font-bold ${item.color} group-hover:animate-pulse`}>{item.value}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
