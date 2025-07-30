import React from "react";

interface VisionSectionProps {
  visionRef: (node: Element | null) => void;
  visionVisible: boolean;
}

const VisionSection: React.FC<VisionSectionProps> = ({
  visionRef,
  visionVisible,
}) => {
  return (
    <section
      ref={visionRef}
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-xl animate-drift-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-xl animate-drift-reverse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div
          className={`${
            visionVisible
              ? "animate-on-scroll-enhanced visible"
              : "animate-on-scroll-enhanced"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 gradient-text animate-text-shimmer">
            技術で未来を切り拓き、
            <br className="block xl:hidden" />
            想いをかたちに。
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto animate-fade-in-words">
            私たちは、最先端のテクノロジーを駆使して、お客様のビジョンを現実へと導きます。単なるシステム開発にとどまらず、共に未来を創造する"真のパートナー"でありたいと願っています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
