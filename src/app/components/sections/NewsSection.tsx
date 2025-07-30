import React from "react";
import { ArrowRight } from "lucide-react";
import { news } from "../../data/news";
import Link from "next/link";

interface NewsSectionProps {
  newsRef: (node: Element | null) => void;
  newsVisible: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ newsRef, newsVisible }) => {
  return (
    <section
      ref={newsRef}
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(248, 250, 252, 0.5), rgba(219, 234, 254, 0.5)),
          linear-gradient(45deg, 
            rgba(59, 130, 246, 0.05) 0%, 
            rgba(6, 182, 212, 0.05) 25%, 
            rgba(30, 64, 175, 0.05) 50%, 
            rgba(59, 130, 246, 0.05) 75%, 
            rgba(6, 182, 212, 0.05) 100%
          )
        `,
      }}
    >
      {/* Enhanced 3D Background Animation for News Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 3D Geometric Shapes for News Background */}
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-400/15 to-cyan-400/10 animate-hero-crystalline-matrix transform-gpu preserve-3d"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-cyan-400/12 to-blue-400/15 animate-hero-prismatic-cascade transform-gpu preserve-3d"
          style={{
            animationDelay: "5s",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-300/10 to-cyan-300/12 animate-hero-quantum-tessellation transform-gpu preserve-3d"
          style={{
            animationDelay: "8s",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        ></div>

        {/* Floating Particles for News */}
        <div
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-3/4 w-4 h-4 bg-cyan-300/20 rounded-full animate-hero-ethereal-constellation transform-gpu"
          style={{ animationDelay: "9s" }}
        ></div>

        {/* Circuit Lines for News */}
        <div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "7s", animationDirection: "reverse" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${
            newsVisible
              ? "animate-on-scroll-enhanced visible"
              : "animate-on-scroll-enhanced"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer text-shadow-2xs">
            ニュース
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.slice(0, 3).map((item, index) => (
            <Link href={`/news/${item.id}`} key={item.id}>
              <article
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-6 rounded-2xl hover-lift-enhanced shadow-lg cursor-pointer transform transition-all duration-500 ${
                  newsVisible ? "animate-card-appear" : "opacity-0"
                } stagger-delay-${index + 1}`}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-subtle">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <time className="text-sm text-gray-500 mb-2 block">
                  {item.date}
                </time>
                <h3 className="font-serif text-lg font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm h-[3.5rem] overflow-hidden">{item.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
