"use strict";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Globe,
  Mail,
  Instagram,
  Twitter,
  Github,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Philosophy", to: "philosophy" },
        { name: "Features", to: "features" },
        { name: "Work with us", to: "cta" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", to: "#" },
        { name: "Mobile Apps", to: "#" },
        { name: "UX/UI Design", to: "#" },
        { name: "Brand Identity", to: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", to: "#" },
        { name: "Our Process", to: "#" },
        { name: "Privacy Policy", to: "#" },
        { name: "Terms of Service", to: "#" },
      ],
    },
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#0d051a]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric-purple/30 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-electric-purple/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-accent flex items-center justify-center geometric-cut-sm">
                <Globe className="text-white w-7 h-7" />
              </div>
              <span className="text-2xl font-heading font-bold text-white tracking-tight uppercase">
                Ainspire <span className="text-electric-purple">Studio</span>
              </span>
            </div>
            <p className="text-light-purple/60 mb-8 max-w-sm leading-relaxed">
              We create digital bridges that connect minds and inspire lives. Beyond simple data exchange, we build for human connection.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Github, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 border border-glass-border flex items-center justify-center geometric-cut-sm hover:bg-electric-purple hover:border-electric-purple transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-light-purple group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-heading font-bold mb-6 text-lg uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 bg-neon-purple mr-2 geometric-cut-sm"></span>
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.to.startsWith("#") || link.to === "" ? (
                      <a
                        href={link.to}
                        className="text-light-purple/60 hover:text-white transition-colors flex items-center group text-sm"
                      >
                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        {link.name}
                      </a>
                    ) : (
                      <ScrollLink
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="text-light-purple/60 hover:text-white transition-colors flex items-center group text-sm cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        {link.name}
                      </ScrollLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-glass-border mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-light-purple/40 text-sm">
            &copy; {currentYear} Ainspire Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-light-purple/40 hover:text-white transition-colors text-sm flex items-center gap-1 group"
            >
              System Status
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-light-purple/40 text-xs uppercase tracking-widest">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
