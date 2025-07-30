import React from "react";
import { ArrowRight } from "lucide-react";
import { achievements } from "../../data/achievements";
import Link from "next/link";

interface AchievementsSectionProps {
  achievementsRef: (node: Element | null) => void;
  achievementsVisible: boolean;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievementsRef,
  achievementsVisible,
}) => {
  return (
    <section
      ref={achievementsRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(248, 250, 252, 0.5), rgba(219, 234, 254, 0.5)),
          linear-gradient(-45deg, 
            rgba(59, 130, 246, 0.05) 0%, 
            rgba(6, 182, 212, 0.05) 25%, 
            rgba(30, 64, 175, 0.05) 50%, 
            rgba(59, 130, 246, 0.05) 75%, 
            rgba(6, 182, 212, 0.05) 100%
          )
        `,
      }}
    >
      {/* Enhanced 3D Background Animation for Achievements Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 3D Geometric Shapes for Achievements Background */}
        <div
          className="absolute top-20 right-10 w-18 h-18 bg-gradient-to-br from-cyan-400/15 to-blue-400/10 animate-hero-holographic-nexus transform-gpu preserve-3d"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-40 left-20 w-22 h-22 bg-gradient-to-br from-blue-400/12 to-cyan-400/15 animate-hero-dimensional-vortex transform-gpu preserve-3d"
          style={{
            animationDelay: "6s",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-br from-cyan-300/10 to-blue-300/12 animate-hero-crystalline-matrix transform-gpu preserve-3d rounded-full"
          style={{ animationDelay: "9s" }}
        ></div>

        {/* Complex Geometric Shapes for Achievements */}
        <div
          className="absolute top-1/5 left-2/3 w-14 h-14 bg-gradient-to-br from-blue-500/10 to-cyan-500/12 animate-hero-prismatic-cascade transform-gpu preserve-3d"
          style={{
            animationDelay: "4s",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-500/12 to-blue-500/10 animate-hero-quantum-tessellation transform-gpu preserve-3d"
          style={{
            animationDelay: "7s",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        ></div>

        {/* Floating Particles for Achievements */}
        <div
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "8s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-4 h-4 bg-blue-300/20 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "11s" }}
        ></div>

        {/* Circuit Lines for Achievements */}
        <div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "9s", animationDirection: "reverse" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${
            achievementsVisible
              ? "animate-on-scroll-enhanced visible"
              : "animate-on-scroll-enhanced"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer text-shadow-2xs">
            実績紹介
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.slice(0, 2).map((achievement, index) => (
            <Link href={`achievements/${achievement.id}`} key={achievement.id}>
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl hover-lift-enhanced shadow-lg group cursor-pointer ${
                  achievementsVisible ? "animate-card-appear" : "opacity-0"
                } stagger-delay-${index + 1}`}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover news-image-enhanced"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-subtle">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-4 h-[3.5rem] overflow-hidden">{achievement.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  詳細を見る{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/achievements">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
