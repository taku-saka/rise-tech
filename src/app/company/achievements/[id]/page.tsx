import React, { JSX } from "react";
import { ExternalLink } from "lucide-react";
import { achievements } from "../../../data/achievements";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return achievements.map((item) => ({
    id: item.id.toString(),
  }));
}

const AchievementDetailPage = async ({
  params,
}: Props): Promise<JSX.Element> => {
  const { id } = await params;
  const achievementItem = achievements.find(
    (item) => item.id === parseInt(id, 10)
  );

  if (!achievementItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6 gradient-text animate-text-shimmer">
            実績が見つかりません
          </h1>
          <Link href="/company/achievements">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              実績一覧に戻る
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card-enhanced p-8 md:p-12 rounded-2xl stagger-fade-in">
          <div className="mb-8 stagger-fade-in stagger-delay-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {achievementItem.category}
              </span>
              <span className="text-gray-500">{achievementItem.period}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-800 animate-text-shimmer">
              {achievementItem.title}
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-xl mb-8 stagger-fade-in stagger-delay-2">
            <img
              src={achievementItem.image}
              alt={achievementItem.title}
              className="w-full h-64 md:h-80 object-cover hover-lift-enhanced"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="stagger-fade-in stagger-delay-3">
              <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
                プロジェクト概要
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    クライアント
                  </h3>
                  <p className="text-gray-700">{achievementItem.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">期間</h3>
                  <p className="text-gray-700">{achievementItem.period}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">使用技術</h3>
                  <div className="flex flex-wrap gap-2">
                    {achievementItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="stagger-fade-in stagger-delay-4">
              <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
                プロジェクト詳細
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">課題</h3>
                  <p className="text-gray-700">{achievementItem.challenges}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">解決策</h3>
                  <p className="text-gray-700">{achievementItem.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">成果</h3>
                  <p className="text-gray-700">{achievementItem.results}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 stagger-fade-in stagger-delay-5">
            <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
              お客様の声
            </h2>
            <p className="text-gray-700 italic">
              "{achievementItem.testimonial}"
            </p>
            <p className="text-gray-600 mt-2">
              - {achievementItem.client} 担当者様
            </p>
          </div>

          {/* 成果物がそろうまで一時コメントアウト
          {achievementItem.url && (
            <div className="text-center mb-8 stagger-fade-in stagger-delay-6">
              <a
                href={achievementItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary-enhanced text-white px-6 py-3 rounded-full font-semibold hover-lift-enhanced"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                サイトを見る
              </a>
            </div>
          )} */}
        </div>

        <div className="text-center mt-12 stagger-fade-in stagger-delay-6">
          <Link href="/company/achievements">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced mr-4 cursor-pointer">
              実績一覧に戻る
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mr-4 hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors hover-lift-enhanced cursor-pointer">
              お問い合わせ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetailPage;
