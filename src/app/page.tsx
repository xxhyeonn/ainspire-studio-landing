import SmoothScrollLayout from "@/components/layout/SmoothScrollLayout";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <div className="min-h-screen bg-[#1a0a2e] text-white selection:bg-[#8b5cf6] selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Section 1: Hero - The Vision */}
          <Hero />

          {/* Section 2: Core Philosophy - The Facilitator */}
          <Philosophy />

          {/* Section 3: Signature UX Features - Value Proposition */}
          <Features />

          {/* Section 4: Call to Action - The Next Step */}
          <CTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollLayout>
  );
}
