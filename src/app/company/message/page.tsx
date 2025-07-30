import Link from "next/link";
import React from "react";

const CEOMessagePage = () => {
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
            代表挨拶
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            代表取締役CEO 節賀 由樹
          </p>
        </div>

        <div className="glass-card-enhanced p-8 md:p-12 rounded-2xl sophisticated-fade stagger-delay-1">
          {/* CEO Photo */}
          <div className="text-center mb-12 luxury-entrance stagger-delay-2">
            <div className="relative inline-block group">
              <img
                src="/S__4333606.jpg"
                alt="代表取締役CEO 節賀 由樹"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h2 className="font-serif text-2xl font-bold mt-6 text-gray-800">
              代表取締役CEO
            </h2>
            <p className="text-xl text-gray-600 mt-2 ">
              節賀 由樹（せつが ゆうき）
            </p>
          </div>

          {/* CEO Message */}
          <div className="space-y-6 premium-reveal stagger-delay-3 pt-4 px-6 pb-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 text-center mb-8 ">
              ご挨拶
            </h3>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="">
                はじめまして。株式会社Rise Tech Solutions 代表取締役CEOの節賀
                由樹（せつが ゆうき）です。
              </p>

              <p className="">
                私たちは、「テクノロジーで、未来の当たり前をつくる」というビジョンのもと、
                システム開発、業務のデジタル化、そしてDX推進に伴うコンサルティングを通じて、企業や地域社会の課題解決に取り組んでいます。
              </p>

              <p className="">
                単なるIT導入ではなく、本質を見極め、"使われ続ける仕組み"をつくること。
                それが、私たちRise Tech
                Solutionsが最も大切にしている価値観です。
              </p>

              <p className="">
                現場に根ざし、小さな改善から大きな変革まで。
                私たちは、お客様一人ひとりにとってリアルな"等身大のDX"を共に設計し、実現します。
              </p>

              <p className="">
                ご縁をいただける皆さまと、新しい未来を共創できることを心から楽しみにしております。
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 premium-reveal stagger-delay-4">
          <Link href="/">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced mr-4 cursor-pointer">
              ホームに戻る
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors hover-lift-enhanced cursor-pointer">
              お問い合わせ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CEOMessagePage;
