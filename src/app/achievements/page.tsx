import React from "react";
import { ArrowRight } from "lucide-react";
import { achievements } from "../data/achievements";
import Link from "next/link";

const AchievementsListPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            実績紹介
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            これまでに手がけたプロジェクトの実績をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            return (
              <Link
                href={`/achievements/${achievement.id}`}
                key={achievement.id}
              >
                <div
                  key={achievement.id}
                  className={`bg-white p-6 rounded-2xl hover-lift-enhanced shadow-lg cursor-pointer group stagger-fade-in stagger-delay-${
                    (index % 6) + 1
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover news-image-enhanced"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    詳細を見る{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center stagger-fade-in stagger-delay-6">
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

export default AchievementsListPage;
