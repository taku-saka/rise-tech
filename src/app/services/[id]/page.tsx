import React, { JSX } from "react";
import { CheckCircle, Star, Settings } from "lucide-react";
import { services } from "../../data/services";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return services.map((item) => ({
    id: item.id.toString(),
  }));
}

const ServiceDetailPage = async ({ params }: Props): Promise<JSX.Element> => {
  const { id } = await params;
  const serviceItem = services.find((item) => item.id === id);

  if (!serviceItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6 gradient-text animate-text-shimmer">
            サービスが見つかりません
          </h1>
          <Link href="/services">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              事業内容一覧に戻る
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = serviceItem.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            {serviceItem.title}
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            {serviceItem.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-12 stagger-fade-in stagger-delay-1">
          <div className="relative overflow-hidden rounded-xl mb-8">
            <img
              src={serviceItem.image}
              alt={serviceItem.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <IconComponent className="w-12 h-12 mb-2" />
              <h2 className="text-2xl font-bold">{serviceItem.title}</h2>
            </div>
          </div>
        </div>

        {/* Sub Services */}
        {serviceItem.subServices && (
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center gradient-text stagger-fade-in stagger-delay-2">
              サービス詳細
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceItem.subServices.map((subService, index) => (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-2xl stagger-fade-in stagger-delay-${
                    index + 3
                  }`}
                >
                  {/* {subService.image && (
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <img
                        src={subService.image}
                        alt={subService.title}
                        className="w-full h-48 object-cover hover-lift-enhanced"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    </div>
                  )} */}
                  <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">
                    {subService.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{subService.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      主な特徴
                    </h4>
                    {subService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Features and Technology Stack for specific services */}
        {id === "outsourcing" && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl stagger-fade-in stagger-delay-5">
              <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Star className="w-6 h-6 mr-3 text-blue-600" />
                サービスの特徴
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      要件定義から運用まで一貫対応
                    </h3>
                    <p className="text-gray-600 text-sm">
                      プロジェクトの企画段階から運用・保守まで、全工程をサポートします。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      最新技術の活用
                    </h3>
                    <p className="text-gray-600 text-sm">
                      React、Vue.js、Node.js等の最新技術を駆使した開発を行います。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      セキュリティ重視
                    </h3>
                    <p className="text-gray-600 text-sm">
                      企業データの安全性を最優先に、堅牢なセキュリティ対策を実装します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      アジャイル開発手法
                    </h3>
                    <p className="text-gray-600 text-sm">
                      柔軟で迅速な開発プロセスにより、変化するニーズに対応します。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl stagger-fade-in stagger-delay-6">
              <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-blue-600" />
                技術スタック
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    フロントエンド
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• React</li>
                    <li>• Vue.js</li>
                    <li>• TypeScript</li>
                    <li>• Next.js</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    バックエンド
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Node.js</li>
                    <li>• Python</li>
                    <li>• Java</li>
                    <li>• PHP</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">インフラ</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AWS</li>
                    <li>• Docker</li>
                    <li>• Kubernetes</li>
                    <li>• CI/CD</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    データベース
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• PostgreSQL</li>
                    <li>• MySQL</li>
                    <li>• MongoDB</li>
                    <li>• Redis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center stagger-fade-in stagger-delay-7">
          <Link href="/services">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced m-2 cursor-pointer">
              事業内容一覧に戻る
            </button>
          </Link>
          <Link href="/">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors m-2 hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors m-2 hover-lift-enhanced cursor-pointer">
              お問い合わせ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
