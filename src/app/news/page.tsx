"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { news } from "../data/news";
import Link from "next/link";

const NewsListPage = () => {
  const [newsFilter, setNewsFilter] = useState("all");

  // Filter news based on category
  const filteredNews =
    newsFilter === "all"
      ? news
      : news.filter((item) => item.category === newsFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            ニュース
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            最新のお知らせとニュースをご覧ください
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex justify-center stagger-fade-in stagger-delay-1">
          <div className="flex gap-2 bg-white p-2 rounded-lg shadow-md">
            <button
              onClick={() => setNewsFilter("all")}
              className={`cursor-pointer px-6 py-2 rounded-lg font-medium transition-all duration-300 hover-lift-enhanced ${
                newsFilter === "all"
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
              }`}
            >
              すべて
            </button>
            <button
              onClick={() => setNewsFilter("お知らせ")}
              className={`cursor-pointer px-6 py-2 rounded-lg font-medium transition-all duration-300 hover-lift-enhanced ${
                newsFilter === "お知らせ"
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
              }`}
            >
              お知らせ
            </button>
            <button
              onClick={() => setNewsFilter("サービス")}
              className={`cursor-pointer px-6 py-2 rounded-lg font-medium transition-all duration-300 hover-lift-enhanced ${
                newsFilter === "サービス"
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
              }`}
            >
              サービス
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.reverse().map((item, index) => (
            <Link href={`/news/${item.id}`} key={item.id}>
              <div>
                <article
                  key={item.id}
                  className={`bg-white p-6 rounded-2xl hover-lift-enhanced shadow-lg cursor-pointer transition-all duration-300 stagger-fade-in stagger-delay-${
                    (index % 6) + 2
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover news-image-enhanced"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <time className="text-sm text-gray-500 mb-2 block">
                    {item.date}
                  </time>
                  <h3 className="font-serif text-lg font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    続きを読む <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </article>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center stagger-fade-in stagger-delay-6">
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

export default NewsListPage;
