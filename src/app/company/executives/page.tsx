import React from "react";
import { ArrowRight } from "lucide-react";
import { executives } from "../../data/executives";
import Link from "next/link";

const ExecutivesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            役員/執行役員一覧
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            株式会社Rise Tech Solutionsの経営陣をご紹介します
          </p>
        </div>

        {/* Executives */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center gradient-text stagger-fade-in stagger-delay-4">
            役員
          </h2>
          {(() => {
            const filteredExecutives = executives.filter((exec) => exec.type === "executive");
            const gridColsClass =
              filteredExecutives.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

            return (
              <div className={`grid ${gridColsClass} gap-8 items-stretch`}>
                {filteredExecutives.map((executive, index) => (
                  <Link
                    href={`/company/executives/${executive.id}`}
                    key={executive.id}
                  >
                    <div
                      key={executive.id}
                      className={`flex flex-col justify-between h-full glass-card p-8 rounded-2xl hover-lift-enhanced cursor-pointer group stagger-fade-in stagger-delay-${
                        index + 2
                      }`}
                    >
                      <div>
                        <div className="text-center mb-6">
                          <div className="relative inline-block mb-4">
                            <img
                              src={executive.image}
                              alt={executive.name}
                              className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 hover-lift-enhanced"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                          </div>
                          <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                            {executive.name}
                          </h3>
                          <p className="text-gray-600 mb-1">{executive.nameKana}</p>
                          <div className="flex items-center justify-center mb-4">
                            <span className="text-blue-600 font-semibold">
                              {executive.position}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 min-h-[4.5rem]">
                          {executive.bio}
                        </p>
                      </div>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        詳細を見る{" "}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Officers */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center gradient-text stagger-fade-in stagger-delay-4">
            執行役員
          </h2>
          {(() => {
            const filteredExecutives = executives.filter((exec) => exec.type === "officer");
            const gridColsClass =
              filteredExecutives.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

            return (
              <div className={`grid ${gridColsClass} gap-8`}>
                {filteredExecutives.map((executive, index) => (
                  <div
                    key={executive.id}
                    className={`glass-card p-6 rounded-2xl hover-lift-enhanced cursor-pointer group stagger-fade-in stagger-delay-${
                      index + 5
                    }`}
                  >
                    <div className="text-center mb-4">
                      <div className="relative inline-block mb-4">
                        <img
                          src={executive.image}
                          alt={executive.name}
                          className="w-24 h-24 object-cover rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 hover-lift-enhanced"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">
                        {executive.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        {executive.nameKana}
                      </p>
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {executive.position}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs leading-relaxed mb-3">
                      {executive.bio}
                    </p>
                    {/* <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors text-sm">
                      詳細を見る{" "}
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>

        <div className="text-center stagger-fade-in stagger-delay-6">
          <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecutivesPage;
