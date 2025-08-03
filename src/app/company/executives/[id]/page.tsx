import React, { JSX } from "react";
import { CheckCircle } from "lucide-react";
import { executives } from "../../../data/executives";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return executives.map((item) => ({
    id: item.id.toString(),
  }));
}

const ExecutiveDetailPage = async ({ params }: Props): Promise<JSX.Element> => {
  const { id } = await params;
  const executive = executives.find((item) => item.id === id);

  if (!executive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6 gradient-text animate-text-shimmer">
            役員が見つかりません
          </h1>
          <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
            役員一覧に戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 rounded-2xl stagger-fade-in">
          {/* Executive Profile */}
          <div className="text-center mb-12 stagger-fade-in stagger-delay-1">
            <div className="relative inline-block mb-6">
              <img
                src={executive.image}
                alt={executive.name}
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mx-auto shadow-2xl hover-lift-enhanced"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-text-shimmer">
              {executive.name}
            </h1>
            <p className="text-xl text-gray-600 mb-4">{executive.nameKana}</p>
            <div className="flex items-center justify-center mb-6">
              <span className="text-blue-600 font-semibold text-lg">
                {executive.position}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8 stagger-fade-in stagger-delay-2">
            <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
              プロフィール
            </h2>
            <p className="text-gray-700 leading-relaxed">{executive.bio}</p>
          </div>

          {/* Career */}
          <div className="mb-8 stagger-fade-in stagger-delay-3">
            <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
              経歴
            </h2>
            <div className="space-y-3">
              {executive.career.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-8 stagger-fade-in stagger-delay-4">
            <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
              専門分野
            </h2>
            <div className="flex flex-wrap gap-2">
              {executive.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="bg-blue-50 p-6 rounded-lg stagger-fade-in stagger-delay-5">
            <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
              メッセージ
            </h2>
            <p className="text-gray-700 leading-relaxed italic">
              "{executive.message}"
            </p>{" "}
          </div>
        </div>
        <div className="text-center mt-12 stagger-fade-in stagger-delay-6">
          <Link href="/company/executives">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced m-2 cursor-pointer">
              役員一覧に戻る
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors m-2 hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors hover-lift-enhanced m-2 cursor-pointer">
              お問い合わせ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDetailPage;
