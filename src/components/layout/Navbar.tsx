"use strict";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", to: "philosophy" },
    { name: "Features", to: "features" },
    { name: "Process", to: "cta" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass border-b border-glass-border shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-accent flex items-center justify-center geometric-cut-sm animate-pulse-glow">
            <Globe className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-white uppercase">
            Ainspire <span className="text-electric-purple">Studio</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-light-purple/70 hover:text-white transition-colors cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}
          <Button variant="primary" size="sm" className="hidden lg:flex">
            Get Started <Sparkles className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#1a0a2e]/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-500 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-bold text-white hover:text-electric-purple transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
          <Button
            variant="primary"
            size="lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Project
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
