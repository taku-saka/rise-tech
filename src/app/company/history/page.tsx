import Link from "next/link";
import React from "react";

const CompanyHistoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            沿革
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            株式会社Rise Tech Solutionsの歩み
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl stagger-fade-in stagger-delay-1">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-800 to-cyan-500"></div>

              <div className="space-y-8">
                <div className="relative pl-12 stagger-fade-in stagger-delay-2">
                  <div className="absolute left-2 w-4 h-4 bg-blue-800 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2021年12月
                    </h3>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      株式会社IFS設立
                    </h4>
                    <p className="text-gray-700">
                      東京都中央区にて株式会社IFSを設立。システム開発事業を開始。
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-3">
                  <div className="absolute left-2 w-4 h-4 bg-blue-800 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2022年3月
                    </h3>
                    <h4 className="font-semibold text-blue-800 mb-3">
                      SES事業拡大
                    </h4>
                    <p className="text-gray-700">
                      システムエンジニアリングサービス（SES）事業を本格展開。優秀なエンジニアチームを構築。
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-3">
                  <div className="absolute left-2 w-4 h-4 bg-blue-700 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2023年3月
                    </h3>
                    <h4 className="font-semibold text-blue-700 mb-3">
                      本社を南青山から原宿に移転
                    </h4>
                    <p className="text-gray-700"></p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-3">
                  <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2023年12月
                    </h3>
                    <h4 className="font-semibold text-blue-600 mb-3">
                      受託開発事業開始
                      <br />
                      本社を原宿から築地に移転
                    </h4>
                    <p className="text-gray-700">
                      お客様のニーズに応える受託開発事業を開始し、多様な業界のシステム開発を手がける。
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-5">
                  <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2024年4月
                    </h3>
                    <h4 className="font-semibold text-blue-600 mb-3">
                      熊本市と立地協定を締結
                    </h4>
                    <p className="text-gray-700">
                      事業拡大に伴い、熊本市での事業所新設のため、熊本市と立地協定を締結
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-5">
                  <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2024年5月
                    </h3>
                    <h4 className="font-semibold text-blue-600 mb-3">
                      熊本支局を開設
                    </h4>
                    <p className="text-gray-700"></p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-5">
                  <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2024年12月
                    </h3>
                    <h4 className="font-semibold text-blue-600 mb-3">
                      コンサルティング事業開始
                    </h4>
                    <p className="text-gray-700">
                      DX推進支援とビジネス戦略コンサルティング事業を開始。企業のデジタル変革を支援。
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-6">
                  <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2025年1月
                    </h3>
                    <h4 className="font-semibold text-blue-600 mb-3">
                      SNS運用代行事業開始
                    </h4>
                    <p className="text-gray-700">
                      デジタルマーケティングの一環として、SNS運用代行サービスを開始。
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-7">
                  <div className="absolute left-2 w-4 h-4 bg-cyan-600 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md border-2 border-cyan-200 hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2025年4月
                    </h3>
                    <h4 className="font-semibold text-cyan-600 mb-3">
                      株式会社Rise Tech Solutionsに社名変更
                    </h4>
                    <p className="text-gray-700">
                      事業拡大と新たなビジョンのもと、株式会社Rise Tech
                      Solutionsに社名を変更。
                    </p>
                  </div>
                </div>

                <div className="relative pl-12 stagger-fade-in stagger-delay-8">
                  <div className="absolute left-2 w-4 h-4 bg-cyan-500 rounded-full -translate-x-1/2"></div>
                  <div className="bg-white p-6 rounded-xl shadow-md border-2 border-cyan-200 hover-lift-enhanced">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                      2025年現在
                    </h3>
                    <h4 className="font-semibold text-cyan-600 mb-3">
                      自社サービス開発開始
                    </h4>
                    <p className="text-gray-700">
                      革新的な自社プロダクトの企画・開発・運営を開始。さらなる成長を目指す。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 stagger-fade-in stagger-delay-9">
          <Link href="/">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistoryPage;
