"use client";

import React from "react";
import { useEffect, useState } from "react";

import HeroSection from "./components/sections/HeroSection";
import VisionSection from "./components/sections/VisionSection";
import VideoSection from "./components/sections/VideoSection";
import NewsSection from "./components/sections/NewsSection";
import ServicesSection from "./components/sections/ServicesSection";
import AchievementsSection from "./components/sections/AchievementsSection";
import RecruitmentSection from "./components/sections/RecruitmentSection";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [visionRef, visionVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [videoRef, videoVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [newsRef, newsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [achievementsRef, achievementsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [recruitRef, recruitVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <main>
        <HeroSection heroRef={heroRef} heroVisible={heroVisible} />
        <VisionSection visionRef={visionRef} visionVisible={visionVisible} />
        <VideoSection videoRef={videoRef} videoVisible={videoVisible} />
        <NewsSection newsRef={newsRef} newsVisible={newsVisible} />
        <ServicesSection
          servicesRef={servicesRef}
          servicesVisible={servicesVisible}
        />
        <AchievementsSection
          achievementsRef={achievementsRef}
          achievementsVisible={achievementsVisible}
        />
        <RecruitmentSection
          recruitRef={recruitRef}
          recruitVisible={recruitVisible}
        />
      </main>
    </div>
  );
  // };
}
