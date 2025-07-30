import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import Link from "next/link";

const ServicesOverviewPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            事業内容
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            多様な技術領域で、お客様のビジネス成長をサポートします
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link href={`/services/${service.id}`} key={service.id}>
                <div
                  key={service.id}
                  className={`glass-card p-8 rounded-2xl hover-lift-enhanced cursor-pointer group stagger-fade-in stagger-delay-${
                    index + 1
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    詳細を見る{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
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

export default ServicesOverviewPage;
