import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ainspire Studio | Connecting Minds, Inspiring Lives",
  description: "Beyond simple data exchange—we build bridges for inspiration through innovative web and app solutions.",
  keywords: ["web development", "app development", "digital solutions", "innovation", "inspiration"],
  authors: [{ name: "Ainspire Studio" }],
  openGraph: {
    title: "Ainspire Studio | Connecting Minds, Inspiring Lives",
    description: "Beyond simple data exchange—we build bridges for inspiration through innovative web and app solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#1a0a2e] text-white`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
