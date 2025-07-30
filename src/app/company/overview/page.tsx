import Link from "next/link";
import React from "react";

const CompanyOverviewPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200/10 to-cyan-200/10 rounded-full blur-3xl animate-drift-slow"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl animate-drift-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/5 to-cyan-300/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-cyan-300/5 to-blue-300/5 rounded-full blur-2xl animate-float-medium"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 elegant-slide-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            企業概要
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            株式会社Rise Tech Solutionsについて
          </p>
        </div>

        {/* Company Image */}
        <div className="glass-card-enhanced p-8 md:p-12 rounded-2xl mb-8 sophisticated-fade stagger-delay-1">
          <div className="relative overflow-hidden rounded-xl mb-8 group">
            <img
              src="/Bar-Lounge.webp"
              alt="Rise Tech Solutions オフィス"
              className="w-full h-64 md:h-80 object-cover hover-lift-enhanced transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="glass-card-enhanced p-8 md:p-12 rounded-2xl luxury-entrance stagger-delay-2">
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-3">
              <div className="md:col-span-1 p-2">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  社名
                </h3>
              </div>
              <div className="md:col-span-2 p-2">
                <p className="text-gray-700 flex items-center">
                  株式会社Rise Tech Solutions（旧会社名:株式会社IFS）
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-4 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  代表取締役CEO
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 flex items-center">節賀 由樹</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-4 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  年商
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 flex items-center">5億2,000万円</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-5 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 p-2 flex items-center">
                  役員層
                </h3>
              </div>
              <div className=" md:col-span-2 space-y-2 grid grid-cols-2 text-gray-700">
                <p className="">社長室</p>
                <p>中島 嘉寿</p>
                <p className="">取締役COO</p>
                <p>青木 耶雲</p>
                {/* <p className="">執行役員CSO</p>
                  <p>藤井 謙治</p> */}
                <p className="">執行役員VPoE</p>
                <p>熊谷 洸介</p>
                <p className="">VPoE</p>
                <p>坂口 拓</p>
                <p className="">Principal Engineer</p>
                <p>加藤 一登</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-6 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  社員数
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 flex items-center">
                  53名（パート含む）
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-7 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  事業内容
                </h3>
              </div>
              <div className="md:col-span-2 flex items-center">
                <div className="space-y-2 text-gray-700">
                  <p className="">受託開発</p>
                  <p className="">システム開発/SES</p>
                  <p className="">自社サービス</p>
                  <p className="">コンサルティング</p>
                  <p className="">SNS運用代行</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-8 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  連絡先
                </h3>
              </div>
              <div className="md:col-span-2">
                <div className="space-y-2 text-gray-700 flex items-center">
                  <div className="flex items-center">
                    <span>TEL: 03-6804-2140</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-9 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  本社所在地
                </h3>
              </div>
              <div className="md:col-span-2 flex items-center">
                <div className="text-gray-700">
                  <span>
                    〒104-0045
                    <br />
                    東京都中央区築地2-10-2 JP-BASE築地駅前 7階
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 premium-reveal stagger-delay-9 p-2">
              <div className="md:col-span-1">
                <h3 className="font-serif text-lg font-bold text-gray-800 flex items-center">
                  熊本支局
                </h3>
              </div>
              <div className="md:col-span-2 flex items-center">
                <div className="text-gray-700">
                  <span>
                    〒860-0047
                    <br />
                    熊本県熊本市西区春日1丁目14-1
                    <br />
                    くまもと森都心プラザ2階　クロスポイント Room.1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 luxury-entrance stagger-delay-9">
          <Link href="/">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverviewPage;
