import React from "react";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  heroRef: (node: Element | null) => void;
  heroVisible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroRef, heroVisible }) => {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-800/90 to-cyan-600/80"></div>

      {/* Ultra-Advanced Creative 3D Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden preserve-3d">
        {/* Crystalline Matrix - Ultra-Advanced 3D Shapes */}
        <div
          className="absolute top-10 left-5 w-20 h-20 bg-gradient-to-br from-cyan-400/25 to-blue-400/30 animate-hero-crystalline-matrix transform-gpu preserve-3d"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/25 animate-hero-crystalline-matrix transform-gpu preserve-3d"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            animationDelay: "5s",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-br from-cyan-300/15 to-blue-300/20 animate-hero-crystalline-matrix transform-gpu preserve-3d"
          style={{ animationDelay: "10s" }}
        ></div>

        {/* Prismatic Cascade - Advanced Morphing Shapes */}
        <div
          className="absolute top-1/4 left-1/6 w-16 h-16 bg-gradient-to-t from-blue-500/20 to-cyan-500/25 animate-hero-prismatic-cascade transform-gpu preserve-3d"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute top-3/4 right-1/6 w-22 h-22 bg-gradient-to-t from-cyan-500/15 to-blue-500/20 animate-hero-prismatic-cascade transform-gpu preserve-3d"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "7s",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/8 w-18 h-18 bg-gradient-to-t from-blue-400/20 to-cyan-400/15 animate-hero-prismatic-cascade transform-gpu preserve-3d"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "12s",
          }}
        ></div>

        {/* Quantum Tessellation - Complex Geometric Patterns */}
        <div
          className="absolute top-1/3 right-1/4 w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-blue-400/25 animate-hero-quantum-tessellation transform-gpu preserve-3d"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animationDelay: "3s",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-400/15 to-cyan-400/20 animate-hero-quantum-tessellation transform-gpu preserve-3d"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animationDelay: "8s",
          }}
        ></div>

        {/* Holographic Nexus - Advanced Light Effects */}
        <div
          className="absolute top-1/5 left-2/3 w-26 h-26 bg-gradient-to-br from-cyan-300/15 to-blue-300/20 animate-hero-holographic-nexus transform-gpu preserve-3d"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/5 right-2/3 w-22 h-22 bg-gradient-to-br from-blue-300/20 to-cyan-300/15 animate-hero-holographic-nexus transform-gpu preserve-3d"
          style={{ animationDelay: "9s" }}
        ></div>

        {/* Dimensional Vortex - Ultra-Complex Shapes */}
        <div
          className="absolute top-2/3 left-1/8 w-24 h-24 bg-gradient-to-br from-blue-500/15 to-cyan-500/20 animate-hero-dimensional-vortex transform-gpu preserve-3d"
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            animationDelay: "6s",
          }}
        ></div>
        <div
          className="absolute top-1/8 right-1/8 w-18 h-18 bg-gradient-to-br from-cyan-500/20 to-blue-500/15 animate-hero-dimensional-vortex transform-gpu preserve-3d"
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            animationDelay: "11s",
          }}
        ></div>

        {/* Ethereal Constellation - Particle-like Elements */}
        <div
          className="absolute top-1/6 left-1/2 w-6 h-6 bg-cyan-400/30 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/6 right-1/2 w-8 h-8 bg-blue-400/25 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-4 h-4 bg-cyan-300/35 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "11s" }}
        ></div>
        <div
          className="absolute bottom-1/2 right-1/3 w-10 h-10 bg-blue-300/20 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "16s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-5 h-5 bg-cyan-500/25 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "21s" }}
        ></div>
        <div
          className="absolute bottom-3/4 right-3/4 w-7 h-7 bg-blue-500/30 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "26s" }}
        ></div>

        {/* Advanced 3D Particle Swarm */}
        <div
          className="absolute top-1/4 left-1/5 w-3 h-3 bg-cyan-400/40 rounded-full animate-hero-particle-swarm-3d transform-gpu"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/5 w-2 h-2 bg-blue-400/40 rounded-full animate-hero-particle-swarm-3d transform-gpu"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-3/5 w-4 h-4 bg-cyan-300/40 rounded-full animate-hero-particle-swarm-3d transform-gpu"
          style={{ animationDelay: "6.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-2/5 w-2 h-2 bg-blue-300/40 rounded-full animate-hero-particle-swarm-3d transform-gpu"
          style={{ animationDelay: "9.5s" }}
        ></div>
        <div
          className="absolute bottom-2/3 left-4/5 w-3 h-3 bg-cyan-500/40 rounded-full animate-hero-particle-swarm-3d transform-gpu"
          style={{ animationDelay: "12.5s" }}
        ></div>
        <div
          className="absolute top-4/5 right-4/5 w-2 h-2 bg-blue-500/40 rounded-full animate-hero-particle-swarm-3d transform-gpu"
          style={{ animationDelay: "15.5s" }}
        ></div>

        {/* Ultra-Advanced Circuit-like 3D Lines */}
        <div className="absolute top-0 left-0 w-full h-full transform-gpu preserve-3d">
          <svg className="w-full h-full opacity-25" viewBox="0 0 100 20">
            <defs>
              <linearGradient
                id="circuit3d-advanced1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="25%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="75%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="circuit3d-advanced2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                <stop offset="30%" stopColor="currentColor" stopOpacity="0.5" />
                <stop offset="70%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,8 L15,8 L20,4 L25,12 L30,8 L45,8 L50,6 L55,10 L60,8 L75,8"
              stroke="url(#circuit3d-advanced1)"
              strokeWidth="0.9"
              fill="none"
              className="text-cyan-400 animate-pulse-slow"
            />
            <path
              d="M25,8 L40,8 L45,12 L50,4 L55,8 L70,8 L75,10 L80,6 L85,8 L100,8"
              stroke="url(#circuit3d-advanced2)"
              strokeWidth="0.3"
              fill="none"
              className="text-blue-400 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
            <path
              d="M0,4 L20,4 L25,8 L30,4 L50,4 L55,6 L60,2 L65,4 L85,4"
              stroke="url(#circuit3d-advanced1)"
              strokeWidth="0.8"
              fill="none"
              className="text-cyan-300 animate-pulse-slow"
              style={{ animationDelay: "3s" }}
            />
            <path
              d="M15,16 L35,16 L40,12 L45,16 L65,16 L70,14 L75,18 L80,16 L100,16"
              stroke="url(#circuit3d-advanced2)"
              strokeWidth="0.5"
              fill="none"
              className="text-blue-300 animate-pulse"
              style={{ animationDelay: "4.5s" }}
            />
          </svg>
        </div>

        {/* Enhanced 3D Data Flow Lines */}
        {/* <div
          className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "1s" }}
        ></div> */}
        {/* <div
          className="absolute bottom-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "3s", animationDirection: "reverse" }}
        ></div> */}
        <div
          className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute bottom-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "7s", animationDirection: "reverse" }}
        ></div>
        {/* <div
          className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "9s" }}
        ></div> */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col justify-center min-h-screen">
        <h1
          className={`font-serif text-5xl md:text-7xl font-bold mb-6 hero-text-glow gradient-text-header ${
            heroVisible ? "animate-slide-up-bounce" : "opacity-0"
          }`}
        >
          Rise Tech Solutions
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 hero-text-shadow ${
            heroVisible ? "animate-slide-up-delay-bounce" : "opacity-0"
          }`}
        >
          テクノロジーと共創の力で、
          <br className="block md:hidden" />
          社会課題に挑み続ける。
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
