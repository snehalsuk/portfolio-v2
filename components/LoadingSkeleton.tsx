import React from "react";

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white p-6 md:p-12 lg:p-24 flex flex-col justify-center animate-pulse">
      {/* Navbar Placeholder */}
      <div className="fixed top-0 left-0 w-full h-20 border-b border-white/5 bg-[#020205]/80 backdrop-blur-md z-50"></div>

      {/* Hero Content Placeholders */}
      <div className="max-w-4xl w-full space-y-8 mt-20">
        {/* Title Lines */}
        <div className="space-y-4">
          <div className="h-16 md:h-24 bg-white/5 rounded-2xl w-3/4"></div>
          <div className="h-16 md:h-24 bg-white/10 rounded-2xl w-full"></div>
          <div className="h-16 md:h-24 bg-white/5 rounded-2xl w-2/3"></div>
        </div>

        {/* Description */}
        <div className="space-y-3 pt-8">
          <div className="h-4 bg-white/10 rounded w-full max-w-2xl"></div>
          <div className="h-4 bg-white/5 rounded w-5/6 max-w-2xl"></div>
          <div className="h-4 bg-white/5 rounded w-4/6 max-w-2xl"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 pt-8">
          <div className="h-14 w-48 bg-blue-900/20 rounded-full border border-blue-500/20"></div>
          <div className="h-14 w-48 bg-white/5 rounded-full border border-white/10"></div>
        </div>
      </div>

      {/* Geometric Decoration Placeholder */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] border border-white/5 rounded-full opacity-20 -z-10 hidden lg:block"></div>
    </div>
  );
};
