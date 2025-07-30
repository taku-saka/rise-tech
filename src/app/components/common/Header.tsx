"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { companyMenuItems } from "../../data/menu";
import Link from "next/link";

const Header = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "header-scrolled"
          : "bg-gradient-to-r from-cyan-400/90 via-blue-600/85 to-blue-900/90"
      }`}
    >
      {/* Advanced Creative 3D IT Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
        {/* Enhanced Floating Code Elements */}
        <div className="absolute top-2 left-10 text-cyan-300/30 text-sm font-mono animate-float-code transform-gpu">
          Git
        </div>
        <div className="absolute top-4 right-20 text-blue-300/25 text-xs font-mono animate-float-code-delay transform-gpu">
          SQL
        </div>
        <div className="absolute bottom-2 left-1/4 text-cyan-400/35 text-xs font-mono animate-float-code-slow transform-gpu">
          HTML
        </div>
        <div className="absolute bottom-4 right-1/3 text-blue-400/30 text-xs font-mono animate-float-code-fast transform-gpu">
          CSS
        </div>
        <div className="absolute top-1/2 left-1/2 text-cyan-300/20 text-xs font-mono animate-float-code transform-gpu">
          React
        </div>
        <div className="absolute top-3 right-1/2 text-blue-300/25 text-xs font-mono animate-float-code-delay transform-gpu">
          JavaScript
        </div>
        <div className="absolute bottom-3 left-1/6 text-cyan-400/30 text-xs font-mono animate-float-code-slow transform-gpu">
          PHP
        </div>
        <div className="absolute top-1/4 right-1/6 text-blue-400/25 text-xs font-mono animate-float-code-fast transform-gpu">
          Java
        </div>

        {/* Enhanced Creative 3D Geometric Shapes with Advanced Movement */}
        <div className="absolute top-1/2 left-1/6 w-4 h-4 border-2 border-cyan-300/40 animate-geometric-spiral-dance transform-gpu perspective-1000 preserve-3d"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-geometric-morphing-flow transform-gpu"></div>
        <div className="absolute bottom-1/2 left-1/3 w-5 h-1 bg-cyan-400/25 animate-geometric-elastic-bounce transform-gpu"></div>
        <div className="absolute top-2/3 right-1/5 w-3 h-3 border border-blue-300/35 animate-geometric-quantum-phase transform-gpu"></div>

        {/* New Creative 3D Geometric Shapes with Enhanced Movement */}
        <div className="absolute top-1/6 left-1/2 w-2 h-6 bg-gradient-to-b from-cyan-400/20 to-blue-400/20 animate-geometric-fractal-expansion transform-gpu perspective-1000"></div>
        <div className="absolute bottom-1/6 right-1/2 w-6 h-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-geometric-holographic-drift transform-gpu perspective-1000"></div>
        <div
          className="absolute top-1/4 left-1/8 w-4 h-4 border-l-2 border-t-2 border-cyan-300/30 animate-geometric-spiral-dance transform-gpu"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/8 w-4 h-4 border-r-2 border-b-2 border-blue-300/30 animate-geometric-morphing-flow transform-gpu"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Hexagonal Shapes with Creative 3D Movement */}
        <div
          className="absolute top-1/5 right-1/3 w-3 h-3 border border-cyan-400/25 animate-geometric-elastic-bounce transform-gpu"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/5 w-4 h-4 border border-blue-400/25 animate-geometric-quantum-phase transform-gpu"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "4s",
          }}
        ></div>

        {/* Diamond Shapes with Enhanced Creative 3D Movement */}
        <div
          className="absolute top-3/4 left-2/3 w-3 h-3 bg-cyan-300/20 animate-geometric-fractal-expansion transform-gpu"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/8 right-1/4 w-2 h-2 bg-blue-300/25 animate-geometric-holographic-drift transform-gpu"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Octagon Shapes */}
        <div
          className="absolute top-1/3 left-3/4 w-3 h-3 border border-cyan-300/30 animate-geometric-spiral-dance transform-gpu"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            animationDelay: "3.5s",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-3/4 w-4 h-4 border border-blue-300/25 animate-geometric-morphing-flow transform-gpu"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            animationDelay: "4.5s",
          }}
        ></div>

        {/* Triangle Shapes */}
        <div
          className="absolute top-1/7 left-1/3 w-3 h-3 border border-cyan-400/30 animate-geometric-elastic-bounce transform-gpu"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "5s",
          }}
        ></div>
        <div
          className="absolute bottom-1/7 right-1/3 w-4 h-4 border border-blue-400/25 animate-geometric-quantum-phase transform-gpu"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "5.5s",
          }}
        ></div>

        {/* Enhanced Circuit-like Lines with 3D Perspective */}
        {/* <div className="absolute top-0 left-0 w-full h-full transform-gpu">
          <svg className="w-full h-full opacity-15" viewBox="0 0 100 20">
            <defs>
              <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
                <stop
                  offset="100%"
                  stopColor="currentColor"
                  stopOpacity="0.1"
                />
              </linearGradient>
              <linearGradient id="circuit2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                <stop
                  offset="100%"
                  stopColor="currentColor"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>
            <path
              d="M0,10 L20,10 L25,5 L30,15 L35,10 L50,10"
              stroke="url(#circuit1)"
              strokeWidth="0.8"
              fill="none"
              className="text-cyan-400 animate-pulse-slow"
            />
            <path
              d="M50,10 L70,10 L75,15 L80,5 L85,10 L100,10"
              stroke="url(#circuit2)"
              strokeWidth="0.8"
              fill="none"
              className="text-blue-400 animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M0,5 L15,5 L20,10 L25,5 L40,5"
              stroke="url(#circuit1)"
              strokeWidth="0.6"
              fill="none"
              className="text-cyan-300 animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            />
            <path
              d="M60,15 L75,15 L80,10 L85,15 L100,15"
              stroke="url(#circuit2)"
              strokeWidth="0.6"
              fill="none"
              className="text-blue-300 animate-pulse-slow"
              style={{ animationDelay: "3s" }}
            />
          </svg>
        </div> */}

        {/* Data Flow Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-slide-horizontal transform-gpu"></div>
        <div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-slide-horizontal transform-gpu"
          style={{ animationDelay: "2s", animationDirection: "reverse" }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-code transform-gpu"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float-code-delay transform-gpu"></div>
        <div className="absolute bottom-1/3 left-3/4 w-1 h-1 bg-cyan-300/40 rounded-full animate-float-code-slow transform-gpu"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-300/40 rounded-full animate-float-code-fast transform-gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <img
                  src="/logo/ifs_logo.png"
                  alt="Rise Tech Solutions Logo"
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="font-serif text-xl md:text-2xl font-bold gradient-text-header transition-all duration-300 group-hover:scale-105">
                Rise Tech Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-white">
            <Link href="/services">
              <button className="hover:text-cyan-300 transition-all duration-300 font-medium hover:scale-105 relative group cursor-pointer">
                事業内容
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </Link>
            {/* ドロップダウンメニューの修正 */}
            <div
              className="relative dropdown-container"
              onMouseEnter={() => setCompanyDropdown(true)}
              onMouseLeave={() => setCompanyDropdown(false)}
            >
              <button className="hover:text-cyan-300 transition-all duration-300 font-medium flex items-center hover:scale-105 relative group cursor-pointer">
                企業情報{" "}
                <ChevronRight
                  className={`w-4 h-4 ml-1 transition-transform ${
                    companyDropdown ? "rotate-90" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div
                className={`dropdown-menu absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-48 z-50 ${
                  companyDropdown ? "show" : ""
                }`}
              >
                {companyMenuItems.map((item) => (
                  <Link href={`/company/${item.id}`} key={item.id}>
                    <button
                      key={item.id}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors hover:scale-105 transform cursor-pointer"
                    >
                      {item.title}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/news">
              <button className="hover:text-cyan-300 transition-all duration-300 font-medium hover:scale-105 relative group cursor-pointer">
                ニュース
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </Link>
            <Link href="/recruitment">
              <button className="hover:text-cyan-300 transition-all duration-300 font-medium hover:scale-105 relative group cursor-pointer">
                採用情報
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover-lift-enhanced hover:scale-105 relative overflow-hidden group cursor-pointer">
                <span className="relative z-10">お問い合わせ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transform transition-transform duration-300 hover:scale-110 text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-blue-800/30 animate-slide-down">
          <nav className="px-4 py-6 space-y-4 text-white">
            <Link href="/services" passHref>
              <div
                className="block w-full text-left py-2 hover:text-cyan-300 transition-colors transform hover:translate-x-2 cursor-pointer"
                onClick={handleLinkClick}
              >
                事業内容
              </div>
            </Link>
            <Link href="/company/overview" passHref>
              <div
                className="block w-full text-left py-2 hover:text-cyan-300 transition-colors transform hover:translate-x-2 cursor-pointer"
                onClick={handleLinkClick}
              >
                企業情報
              </div>
            </Link>
            <Link href="/news" passHref>
              <div
                className="block w-full text-left py-2 hover:text-cyan-300 transition-colors transform hover:translate-x-2 cursor-pointer"
                onClick={handleLinkClick}
              >
                ニュース
              </div>
            </Link>
            <Link href="/recruitment" passHref>
              <div
                className="block w-full text-left py-2 hover:text-cyan-300 transition-colors transform hover:translate-x-2 cursor-pointer"
                onClick={handleLinkClick}
              >
                採用情報
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div
                className="block w-full text-left py-2 hover:text-cyan-300 transition-colors transform hover:translate-x-2 cursor-pointer"
                onClick={handleLinkClick}
              >
                お問い合わせ
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
