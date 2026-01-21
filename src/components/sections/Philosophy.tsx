"use strict";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Sparkles, MessageCircle, Send } from "lucide-react";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to(".cta-decoration-1", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        rotate: 45,
      });

      gsap.to(".cta-decoration-2", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        rotate: -30,
      });

      // Card Appearance
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.95,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="cta"
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-[#1a0a2e]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)] opacity-50"></div>
      
      {/* Floating Decorations */}
      <div className="cta-decoration-1 absolute top-[10%] right-[15%] w-32 h-32 border border-electric-purple/20 bg-electric-purple/5 geometric-cut pointer-events-none z-0"></div>
      <div className="cta-decoration-2 absolute bottom-[20%] left-[10%] w-48 h-48 border border-neon-purple/20 bg-neon-purple/5 rounded-full pointer-events-none z-0 blur-xl"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vh] bg-electric-purple/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/2 right-0 w-[50vw] h-[50vh] bg-neon-purple/10 blur-[180px] rounded-full translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={cardRef}
          className="max-w-5xl mx-auto glass-card p-12 md:p-24 text-center geometric-cut border-neon-purple/30 relative group"
        >
          {/* Inner Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-electric-purple/10 to-transparent opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Animated Icon */}
            <div className="inline-flex w-20 h-20 bg-dark-violet items-center justify-center geometric-cut-sm mb-12 border border-glass-border group-hover:border-neon-purple transition-all duration-500 scale-110">
              <Sparkles className="w-10 h-10 text-neon-purple animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8 leading-tight tracking-tight">
              Ready to Build Your <br />
              <span className="text-gradient">Digital Legacy?</span>
            </h2>
            
            <p className="text-xl text-light-purple/60 mb-16 max-w-2xl mx-auto leading-relaxed">
              Join visionary founders and innovative enterprises in creating digital experiences 
               that transcend the ordinary and inspire the extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button variant="primary" size="lg" glow className="w-full sm:w-auto min-w-[240px]">
                Book a Strategy Call <MessageCircle className="ml-3 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[240px]">
                Send an Inquiry <Send className="ml-3 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges / Small Info */}
            <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40">
              {[
                "Modern Architecture",
                "SEO Optimized",
                "Conversion Focused",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-bright-purple rounded-full"></div>
                  <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-white">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Corner Lines */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-neon-purple/40"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-neon-purple/40"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
