"use strict";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  glow = false,
  ...props
}) => {
  const baseStyles = "relative font-heading font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center overflow-hidden geometric-button group";
  
  const variants = {
    primary: "bg-electric-purple text-white hover:bg-neon-purple",
    secondary: "bg-dark-violet text-white border border-glass-border hover:bg-medium-violet",
    ghost: "bg-transparent text-white hover:bg-white/10",
    outline: "bg-transparent text-electric-purple border-2 border-electric-purple hover:bg-electric-purple hover:text-white",
  };
  
  const sizes = {
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-12 py-5 text-base",
  };

  const glowStyles = glow ? "shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)]" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${glowStyles} ${className}`}
      {...props}
    >
      {/* Decorative Overlay for interaction */}
      <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      
      {/* Border animation for outline variant */}
      {variant === "outline" && (
        <span className="absolute inset-0 w-full h-full"></span>
      )}
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      
      {/* Background shape animation */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
    </button>
  );
};

export default Button;
