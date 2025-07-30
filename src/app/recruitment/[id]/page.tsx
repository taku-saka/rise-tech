import React, { JSX } from "react";
import {
  CheckCircle,
  Star,
  Target,
  MapPin,
  Building,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { recruitmentPositions } from "../../data/positions";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return recruitmentPositions.map((item) => ({
    id: item.id.toString(),
  }));
}

const RecruitmentDetailPage = async ({
  params,
}: Props): Promise<JSX.Element> => {
  const { id } = await params;
  const position = recruitmentPositions.find((item) => item.id === id);

  if (!position) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6 gradient-text animate-text-shimmer">
            募集要項が見つかりません
          </h1>
          <Link href="/recruitment">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              採用情報一覧に戻る
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = position.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 rounded-2xl stagger-fade-in">
          <div className="relative overflow-hidden rounded-xl mb-8 stagger-fade-in stagger-delay-1">
            <img
              src={position.image}
              alt={position.title}
              className="w-full h-64 md:h-80 object-cover hover-lift-enhanced"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <IconComponent className="w-12 h-12" />
            </div>
          </div>

          <div className="mb-8 stagger-fade-in stagger-delay-2">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-800 animate-text-shimmer">
              {position.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{position.description}</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  年収
                </h3>
                <p className="text-gray-700">{position.salary}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  勤務地
                </h3>
                <p className="text-gray-700">{position.location}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-purple-600" />
                  雇用形態
                </h3>
                <p className="text-gray-700">{position.type}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="stagger-fade-in stagger-delay-3">
              <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
                応募要件
              </h2>
              <ul className="space-y-2">
                {position.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stagger-fade-in stagger-delay-4">
              <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
                福利厚生
              </h2>
              <ul className="space-y-2">
                {position.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 stagger-fade-in stagger-delay-5">
            <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
              応募方法
            </h2>
            <p className="text-gray-700 mb-4">
              下記の応募フォームよりご応募ください。
            </p>
            {/* <div className="space-y-2 text-gray-700">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <span>
                  recruit@risetech-solutions.co.jp
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <span>03-6804-2140（採用担当）</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="text-center mt-12 stagger-fade-in stagger-delay-6">
          <Link href={`/recruitment/form/${position.id}`} key={position.id}>
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced mr-4 cursor-pointer">
              <Send className="w-4 h-4 mr-2 inline" />
              応募フォームへ
            </button>
          </Link>
          <Link href="/recruitment">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mr-4 hover-lift-enhanced cursor-pointer">
              採用情報一覧に戻る
            </button>
          </Link>
          <Link href="/">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDetailPage;
