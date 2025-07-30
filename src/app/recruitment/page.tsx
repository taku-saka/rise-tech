import React from "react";
import {
  ArrowRight,
  MapPin,
  Building,
  Target,
  ExternalLink,
  Youtube,
} from "lucide-react";
import { recruitmentPositions } from "../data/positions";
import Link from "next/link";

const RecruitmentListPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            採用情報
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words mb-4">
            共に成長し、未来を創造する仲間を募集しています
          </p>
          <div className="text-center mb-8 stagger-fade-in stagger-delay-6">
            <a
              href="https://www.wantedly.com/companies/company_4068809"
              target="_blank"
              rel="noopener noreferrer"
              className="m-3 inline-flex items-center btn-primary-enhanced text-white px-6 py-3 rounded-full font-semibold hover-lift-enhanced"
            >
              {/* <ExternalLink className="w-4 h-4 mr-2" /> */}
              <img className="w-6 h-6 mr-3" src="/Wantedly_Mark_Wht.png" />
              <span>Wantedly掲載情報</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=bcV_XG0Y4Pg"
              target="_blank"
              rel="noopener noreferrer"
              className="m-3 inline-flex items-center btn-primary-enhanced text-white px-6 py-3 rounded-full font-semibold hover-lift-enhanced"
            >
              <Youtube className="w-6 h-6 mr-3" />
              会社紹介動画
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {recruitmentPositions.map((position, index) => {
            const IconComponent = position.icon;
            return (
              <Link href={`/recruitment/${position.id}`} key={position.id}>
                <div
                  key={position.id}
                  className={`bg-white p-8 rounded-2xl hover-lift-enhanced shadow-lg cursor-pointer stagger-fade-in stagger-delay-${
                    index + 1
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={position.image}
                      alt={position.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-gray-800">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{position.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Building className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    詳細を見る <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center stagger-fade-in stagger-delay-5">
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

export default RecruitmentListPage;
