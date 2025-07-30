import React from "react";
import { ChevronRight } from "lucide-react";

interface VideoSectionProps {
  videoRef: (node: Element | null) => void;
  videoVisible: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoRef,
  videoVisible,
}) => {
  return (
    <section
      ref={videoRef}
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`${
            videoVisible
              ? "animate-on-scroll-enhanced visible"
              : "animate-on-scroll-enhanced"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group stagger-fade-in stagger-delay-1">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  src="/ifsvid.mp4"
                ></video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            <div className="space-y-6 stagger-fade-in stagger-delay-2">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold gradient-text animate-text-shimmer">
                革新的なソリューション
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-words">
                最新のテクノロジーと創造性を融合させ、従来の枠を超えた革新的なソリューションを提供します。
                私たちのチームは、常に新しい可能性を探求し、お客様のビジネスに真の価値をもたらします。
              </p>
              <div className="space-y-3">
                {[
                  "最先端技術の活用",
                  "カスタマイズされたアプローチ",
                  "継続的なサポート",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center animate-slide-in-left-stagger stagger-delay-${
                      index + 3
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2 animate-bounce-subtle" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
