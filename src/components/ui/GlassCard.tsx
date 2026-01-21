"use strict";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "bordered";
  hover?: boolean;
  glow?: boolean;
  cut?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  glow = false,
  cut = true,
}) => {
  const variants = {
    default: "glass-card",
    accent: "bg-gradient-to-br from-medium-violet/40 to-deep-violet/80 backdrop-blur-xl border border-glass-border",
    bordered: "glass border-2 border-electric-purple/30 shadow-2xl",
  };

  const hoverClasses = hover 
    ? "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-glass-border/40 transition-all duration-500" 
    : "transition-all duration-500";
    
  const glowClasses = glow 
    ? "after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_20px_rgba(139,92,246,0.1)] after:pointer-events-none" 
    : "";

  return (
    <div
      className={`relative ${variants[variant]} ${hoverClasses} ${glowClasses} ${
        cut ? "geometric-cut" : "rounded-2xl"
      } ${className}`}
    >
      {/* Corner Accent for Cut variant */}
      {cut && (
        <>
          <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[141%] h-[141%] bg-electric-purple/10 rotate-45 transform translate-x-[50%] -translate-y-[50%]"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[141%] h-[141%] bg-electric-purple/10 rotate-45 transform -translate-x-[50%] translate-y-[50%]"></div>
          </div>
        </>
      )}

      {/* Internal Reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
