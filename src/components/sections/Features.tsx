"use strict";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Zap, Heart, Layers } from "lucide-react";
import GlassCard from "../ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".philo-header", {
        scrollTrigger: {
          trigger: ".philo-header",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
      });

      // Cards Animation
      gsap.from(".philo-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 60,
        rotateX: -15,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Background Visualization Animation
      gsap.to(".philo-bg-circle", {
        scale: 1.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Human Centered",
      description:
        "Technology exists to serve people. We prioritize empathy and emotional connection in every line of code.",
    },
    {
      icon: Zap,
      title: "Value Creation",
      description:
        "We don't just build features; we build solutions that create tangible value for users and businesses alike.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Security",
      description:
        "Robust architectures and secure data handling are the foundation of any meaningful digital relationship.",
    },
    {
      icon: Layers,
      title: "Seamless Flow",
      description:
        "Information should move effortlessly. We design for fluid experiences that feel natural and intuitive.",
    },
  ];

  return (
    <section 
      id="philosophy"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-[#1a0a2e]"
    >
      {/* Decorative Elements */}
      <div className="absolute top-[20%] right-0 w-[40vw] h-[40vw] bg-electric-purple/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#0d051a] to-transparent z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <h4 className="philo-header text-electric-purple font-heading font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Our Core Philosophy
          </h4>
          <h2 className="philo-header text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
            The <span className="text-gradient">Facilitator</span> Between <br /> Data and Inspiration
          </h2>
          <p className="philo-header text-light-purple/60 text-lg leading-relaxed max-w-2xl">
            In an era of information overload, we focus on what matters most: the inspiration that happens when data finds a bridge to the human mind.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {values.map((value, idx) => (
            <div key={idx} className="philo-card group">
              <GlassCard 
                className="h-full p-8 flex flex-col"
                variant={idx % 2 === 1 ? "accent" : "default"}
              >
                <div className="w-14 h-14 bg-dark-violet rounded-xl flex items-center justify-center mb-8 border border-glass-border group-hover:bg-electric-purple group-hover:scale-110 transition-all duration-500">
                  <value.icon className="w-7 h-7 text-electric-purple group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white group-hover:text-bright-purple transition-colors">
                  {value.title}
                </h3>
                <p className="text-light-purple/60 leading-relaxed text-sm">
                  {value.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Interactive Visualization Area */}
        <div className="philo-header relative w-full h-80 glass geometric-cut flex items-center justify-center p-12 overflow-hidden">
          <div className="philo-bg-circle absolute w-[500px] h-[500px] border border-electric-purple/10 rounded-full"></div>
          <div className="philo-bg-circle absolute w-[300px] h-[300px] border border-neon-purple/20 rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full glass border border-electric-purple/40 flex items-center justify-center backdrop-blur-md shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-gradient-accent opacity-50"></div>
                </div>
              ))}
            </div>
            
            <div className="max-w-xl">
              <h4 className="text-xl font-heading font-bold mb-2 text-white">Interconnected Ecosystem</h4>
              <p className="text-sm text-light-purple/50 leading-relaxed">
                We design integrated experiences where every touchpoint reinforces your core message, creating a cohesive journey that stays with your audience long after they leave the screen.
              </p>
            </div>
            
            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-heading font-bold uppercase tracking-widest transition-all">
              Learn More
            </button>
          </div>
          
          {/* Animated Connecting Lines (Simulated with CSS) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-purple to-transparent scale-x-150 -rotate-12"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent scale-x-150 rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
