import React from "react";
import { recruitmentPositions } from "../../data/positions";
import Link from "next/link";

interface RecruitmentSectionProps {
  recruitRef: (node: Element | null) => void;
  recruitVisible: boolean;
}

const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({
  recruitRef,
  recruitVisible,
}) => {
  return (
    <section
      ref={recruitRef}
      className="py-20 px-4 bg-gradient-to-br from-slate-900/95 to-blue-900/95 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-drift-slow"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl animate-drift-reverse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${
            recruitVisible
              ? "animate-on-scroll-enhanced visible"
              : "animate-on-scroll-enhanced"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text-header animate-text-shimmer text-shadow-2xs">
            採用情報
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto animate-fade-in-words">
            共に成長し、未来を創造する仲間を募集しています
          </p>
        </div>

        <div className="relative overflow-hidden mb-12">
          <div
            className="flex space-x-8 animate-slide-infinite-enhanced hover:pause-animation"
            style={{ width: `${recruitmentPositions.length * 2 * 400}px` }}
          >
            {/* First set */}
            {recruitmentPositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <div
                  key={`first-${position.id}`}
                  className={`glass-card-enhanced p-8 rounded-2xl hover-lift-enhanced cursor-pointer group flex-shrink-0 w-80 ${
                    recruitVisible ? "animate-card-appear" : "opacity-0"
                  } stagger-delay-${index + 1}`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={position.image}
                      alt={position.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-blue-100 mb-6">{position.description}</p>
                  <Link href={`/recruitment/${position.id}`} key={position.id}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover-lift-enhanced cursor-pointer">
                      募集要項を見る
                    </button>
                  </Link>
                </div>
              );
            })}

            {/* Second set for seamless loop */}
            {recruitmentPositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <div
                  key={`second-${position.id}`}
                  className={`glass-card-enhanced p-8 rounded-2xl hover-lift-enhanced cursor-pointer group flex-shrink-0 w-80 ${
                    recruitVisible ? "animate-card-appear" : "opacity-0"
                  } stagger-delay-${index + 1}`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={position.image}
                      alt={position.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-blue-100 mb-6">{position.description}</p>
                  <Link href={`/recruitment/${position.id}`} key={position.id}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover-lift-enhanced cursor-pointer">
                      募集要項を見る
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link href="/recruitment">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
