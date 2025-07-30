import React, { JSX } from "react";
import { Heart, Share2 } from "lucide-react";
import { news } from "../../data/news";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id.toString(),
  }));
}

const NewsDetailPage = async ({ params }: Props): Promise<JSX.Element> => {
  const { id } = await params;
  const newsItem = news.find((item) => item.id === parseInt(id, 10));

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6 gradient-text animate-text-shimmer">
            ニュースが見つかりません
          </h1>
          <Link href="/news">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              ニュース一覧に戻る
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 rounded-2xl stagger-fade-in">
          <div className="mb-8 stagger-fade-in stagger-delay-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {newsItem.category}
              </span>
              <time className="text-gray-500">{newsItem.date}</time>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-800 animate-text-shimmer">
              {newsItem.title}
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-xl mb-8 stagger-fade-in stagger-delay-2">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-64 md:h-80 object-cover hover-lift-enhanced"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed stagger-fade-in stagger-delay-3">
            {newsItem.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8 stagger-fade-in stagger-delay-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
                  <Heart className="w-5 h-5" />
                  <span>いいね</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
                  <Share2 className="w-5 h-5" />
                  <span>シェア</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 stagger-fade-in stagger-delay-5">
          <Link href="/news">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced mr-4 cursor-pointer">
              ニュース一覧に戻る
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
