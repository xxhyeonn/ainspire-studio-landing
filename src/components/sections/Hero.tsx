"use strict";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ArrowRight, ChevronDown, Monitor, Smartphone, Cpu } from "lucide-react";
import Button from "../ui/Button";

// Dynamic import for Three.js component to avoid SSR issues
const NetworkBackground = dynamic(() => import("../three/NetworkBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#1a0a2e]" />,
});

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-content", {
        opacity: 0,
        y: 60,
        duration: 1.5,
        stagger: 0.2,
      })
      .from(".stat-item", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
      }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Network Background */}
      <div className="absolute inset-0 z-0">
        <NetworkBackground />
      </div>

      {/* Overlay Gradients for Depth */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-radial"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 z-[1] pointer-events-none bg-gradient-to-t from-[#1a0a2e] to-transparent"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-content inline-flex items-center gap-2 px-4 py-2 glass border border-glass-border mb-8 geometric-cut-sm">
            <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></span>
            <span className="text-xs font-heading font-medium tracking-[0.2em] text-light-purple/80 uppercase">
              Connecting Minds, Inspiring Lives
            </span>
          </div>

          {/* Headline */}
          <h1 
            ref={titleRef}
            className="hero-content text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[1.05] tracking-tight"
          >
            Digital Bridges <br /> 
            <span className="text-gradient">For Human Connection</span>
          </h1>

          {/* Subheadline */}
          <p 
            ref={subtitleRef}
            className="hero-content text-lg md:text-xl text-light-purple/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Beyond simple data exchange—we build platforms that facilitate 
            inspiration and meaningful interaction through cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div 
            ref={buttonsRef}
            className="hero-content flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button variant="primary" size="lg" glow className="min-w-[200px]">
              Start Scaling <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Our Philosophy
            </Button>
          </div>

          {/* Quick Stats/Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-glass-border/30 pt-12">
            {[
              { icon: Monitor, label: "Web Innovation", value: "Modern Web" },
              { icon: Smartphone, label: "App Ecosystem", value: "Mobile First" },
              { icon: Cpu, label: "AI Integration", value: "Smart Solutions" },
            ].map((stat, idx) => (
              <div key={idx} className="stat-item flex flex-col items-center">
                <stat.icon className="w-6 h-6 text-electric-purple mb-3" />
                <span className="text-xs font-heading uppercase tracking-widest text-light-purple/40 mb-1">
                  {stat.label}
                </span>
                <span className="text-sm font-bold text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-light-purple/40 font-heading">Scroll</span>
        <ChevronDown className="w-6 h-6 text-light-purple/30" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[30vw] h-[30vw] bg-electric-purple/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[25vw] h-[25vw] bg-neon-purple/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
