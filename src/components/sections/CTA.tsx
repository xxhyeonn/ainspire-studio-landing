"use strict";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, Cloud, Code, Globe, MessageSquare, Zap } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Animation
      gsap.from(".features-heading", {
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
      });

      // Feature Cards Parallax/Entrance
      gsap.from(".feature-card-col-1", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 70%",
        },
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".feature-card-col-2", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 70%",
        },
        opacity: 0,
        y: 150,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full network-pattern opacity-10"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-electric-purple/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-24">
          <div className="lg:w-2/3">
            <h4 className="features-heading text-neon-purple font-heading font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Value Proposition
            </h4>
            <h2 className="features-heading text-4xl md:text-6xl font-heading font-bold leading-tight">
              Signature UX Features <br />
              <span className="text-light-purple/40">That Drive Conversion</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="features-heading text-light-purple/60 leading-relaxed">
              We focus on high-impact interface details that don't just look beautiful, but actively facilitate the user journey and reinforce brand authority.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="features-grid grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Showcase Feature */}
          <div className="feature-card-col-1 lg:col-span-12 xl:col-span-8">
            <GlassCard className="p-0 border-electric-purple/40 overflow-hidden group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-electric-purple/20 border border-electric-purple/40 flex items-center justify-center geometric-cut-sm mb-8">
                    <Zap className="text-electric-purple w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-6">Interactive Network Visualizations</h3>
                  <p className="text-light-purple/70 mb-8 leading-relaxed">
                    Dynamic, data-driven visualizations that transform complex information into engaging, interactive stories. Perfect for SaaS dashboards and corporate reports.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {["Real-time data sync", "Multi-platform responsive", "Custom physics engine"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-light-purple/90">
                        <CheckCircle2 className="w-5 h-5 text-neon-purple" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-fit group/btn">
                    Explore Technology <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
                <div className="relative bg-dark-violet overflow-hidden flex items-center justify-center p-8 group-hover:bg-medium-violet transition-colors duration-700">
                  {/* Visual Representation of Feature */}
                  <div className="relative w-full aspect-square max-w-[300px]">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className={`absolute inset-0 border border-electric-purple/20 rounded-full animate-spin-slow`}
                        style={{ animationDuration: `${15 + i * 10}s`, opacity: 1 / i }}
                      ></div>
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-accent blur-3xl opacity-30 animate-pulse"></div>
                      <Globe className="w-20 h-20 text-white relative z-10 opacity-80" />
                    </div>
                    {/* Floating Nodes */}
                    {[
                      { top: '10%', left: '20%', icon: Code },
                      { top: '70%', left: '10%', icon: MessageSquare },
                      { top: '20%', left: '80%', icon: Cloud },
                    ].map((Node, idx) => (
                      <div 
                        key={idx}
                        className="absolute w-12 h-12 glass border border-electric-purple/40 flex items-center justify-center geometric-cut animate-float"
                        style={{ top: Node.top, left: Node.left, animationDelay: `${idx * 1.5}s` }}
                      >
                        <Node.icon className="w-5 h-5 text-white/80" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Side Features */}
          <div className="feature-card-col-2 lg:col-span-6 xl:col-span-4 h-full">
            <GlassCard className="p-12 h-full flex flex-col" variant="accent">
              <div className="w-12 h-12 bg-neon-purple/20 border border-neon-purple/40 flex items-center justify-center geometric-cut-sm mb-8">
                <Smartphone className="text-neon-purple w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Mobile-First Ecosystem</h3>
              <p className="text-light-purple/60 leading-relaxed mb-8 flex-grow">
                Seamless progression between devices. We build for the palm of the hand first, ensuring premium performance across all screen sizes.
              </p>
              <div className="relative h-48 bg-black/40 border border-glass-border/40 geometric-cut mt-auto flex items-center justify-center group-hover:border-neon-purple/50 transition-colors">
                <div className="w-12 h-20 border-2 border-white/20 rounded-lg relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neon-purple/10 border border-neon-purple/30 animate-pulse"></div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Lower Grid Features */}
          <div className="feature-card-col-1 lg:col-span-6 xl:col-span-4 h-full">
            <GlassCard className="p-10 h-full border-t-4 border-t-electric-purple">
              <h4 className="text-xs font-heading font-medium tracking-widest text-light-purple/40 mb-4 uppercase">Architecture</h4>
              <h3 className="text-xl font-heading font-bold mb-4 text-white">Performance-Driven Builds</h3>
              <p className="text-sm text-light-purple/60 leading-relaxed">
                Utilizing Next.js 16 and custom Edge-caching strategies to deliver sub-second load times globally.
              </p>
            </GlassCard>
          </div>

          <div className="feature-card-col-2 lg:col-span-6 xl:col-span-4 h-full">
            <GlassCard className="p-10 h-full border-t-4 border-t-neon-purple">
              <h4 className="text-xs font-heading font-medium tracking-widest text-light-purple/40 mb-4 uppercase">Analytics</h4>
              <h3 className="text-xl font-heading font-bold mb-4 text-white">Insight-First Delivery</h3>
              <p className="text-sm text-light-purple/60 leading-relaxed">
                Full funnel tracking and behavioral heatmaps integrated from launch to ensure data-driven growth.
              </p>
            </GlassCard>
          </div>

          <div className="feature-card-col-1 lg:col-span-6 xl:col-span-4 h-full">
            <GlassCard className="p-10 h-full border-t-4 border-t-bright-purple">
              <h4 className="text-xs font-heading font-medium tracking-widest text-light-purple/40 mb-4 uppercase">Security</h4>
              <h3 className="text-xl font-heading font-bold mb-4 text-white">Enterprise-Grade Protection</h3>
              <p className="text-sm text-light-purple/60 leading-relaxed">
                OWASP standard compliance and encrypted data pipelines to protect your and your users' intellectual property.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal Mock smartphone icon since it wasn't imported from lucide-react in the list
const Smartphone = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export default Features;
