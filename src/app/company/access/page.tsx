import React from "react";
import { MapPin, Phone, TramFront, Car } from "lucide-react";
import Link from "next/link";

const CompanyAccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            アクセス
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            株式会社Rise Tech Solutionsへのアクセス情報
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 本社 */}
          <div className="glass-card p-8 rounded-2xl stagger-fade-in stagger-delay-1">
            <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800 text-center">
              本社
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">住所</h3>
                  <p className="text-gray-700">
                    〒104-0045
                    <br />
                    東京都中央区築地2-10-2
                    <br />
                    JP-BASE築地駅前 7階
                    <br />
                  </p>
                  <br />
                </div>
              </div>

              <div className="flex items-start py-4">
                <Phone className="w-5 h-5 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">電話番号</h3>
                  <p className="text-gray-700">03-6804-2140</p>
                  <p className="text-gray-700 text-xs mt-2">
                    受付時間：平日 9:00-18:00
                  </p>
                  <br />
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                <TramFront className="w-5 h-5 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">最寄り駅</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• 東京メトロ日比谷線「築地駅」徒歩1分</p>
                    <p>• 東京メトロ有楽町線「新富町駅」徒歩3分</p>
                    <p>• 都営浅草線「東銀座駅」徒歩5分</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <iframe
                className="border-0 w-full h-60 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3221501295297!2d139.77088947623076!3d35.669068930641366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b59f6e21525%3A0x9200d6ab02bb2180!2z5qCq5byP5Lya56S-UmlzZSBUZWNoIFNvbHV0aW9ucw!5e0!3m2!1sja!2sjp!4v1752464754144!5m2!1sja!2sjp"
              ></iframe>
            </div>
          </div>

          {/* 熊本支局 */}
          <div className="glass-card p-8 rounded-2xl stagger-fade-in stagger-delay-2">
            <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800 text-center">
              熊本支局
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">住所</h3>
                  <p className="text-gray-700">
                    〒860-0047
                    <br />
                    熊本県熊本市西区春日1丁目14-1
                    <br />
                    くまもと森都心プラザ2階
                    <br />
                    クロスポイント Room.1
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                <TramFront className="w-5 h-5 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">最寄り駅</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• JR鹿児島本線「熊本駅」徒歩3分</p>
                    <p>• 熊本市電「熊本駅前駅」徒歩3分</p>
                    <p>• 熊本市電「祇園橋駅」徒歩9分</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                <Car className="w-5 h-5 mr-3 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    アクセス情報
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• 熊本空港から車で約40分</p>
                    <p>• 熊本ICから車で約50分</p>
                    <p>• 駐車場完備</p>
                  </div>
                </div>
              </div>
              <div className="h-full flex">
                {/* Map placeholder */}
                <iframe
                  className="border-0 w-full h-60 rounded-md justify-end"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1677.041670055791!2d130.69023226963589!3d32.79004942576782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f45f2976f24b%3A0xc9e3471f8212a2bb!2z44GP44G-44KC44Go5qOu6YO95b-D44OX44Op44K2!5e0!3m2!1sja!2sjp!4v1752465569187!5m2!1sja!2sjp"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 stagger-fade-in stagger-delay-3">
          <Link href="/">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced m-2 cursor-pointer">
              ホームに戻る
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors hover-lift-enhanced m-2 cursor-pointer">
              お問い合わせ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyAccessPage;
