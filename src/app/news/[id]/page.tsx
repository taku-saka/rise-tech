import React, { JSX } from "react";
import { news } from "../../data/news";
import Link from "next/link";
import NewsDetailClient from "./NewsDetailClient";

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

  return <NewsDetailClient newsItem={newsItem} />;
};

export default NewsDetailPage;
