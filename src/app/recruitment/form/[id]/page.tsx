import React, { JSX, useState } from "react";
import { Send, Target, MapPin, Building, Paperclip } from "lucide-react";
import { recruitmentPositions } from "../../../data/positions";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return recruitmentPositions.map((item) => ({
    id: item.id.toString(),
  }));
}

const ApplicationFormPage = async ({ params }: Props): Promise<JSX.Element> => {
  const { id } = await params;
  const position = recruitmentPositions.find((item) => item.id === id);

  //useStateを使わずに実装が必要なため、一時コメントアウト
  //   const [applicationFormData, setApplicationFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     age: "",
  //     experience: "",
  //     motivation: "",
  //     portfolio: "",
  //     resume: null as File | null,
  //     coverLetter: null as File | null,
  //   });

  //   const handleApplicationInputChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const { name, value } = e.target;
  //     setApplicationFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  //   const handleApplicationFileChange = (
  //     e: React.ChangeEvent<HTMLInputElement>
  //   ) => {
  //     const { name, files } = e.target;
  //     setApplicationFormData((prev) => ({
  //       ...prev,
  //       [name]: files?.[0] || null,
  //     }));
  //   };

  //   const handleApplicationSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     alert(
  //       "ご応募ありがとうございます。書類選考の結果を1週間以内にご連絡いたします。"
  //     );
  //     setApplicationFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       address: "",
  //       age: "",
  //       experience: "",
  //       motivation: "",
  //       portfolio: "",
  //       resume: null,
  //       coverLetter: null,
  //     });
  //   };

  if (!position) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold mb-6 gradient-text animate-text-shimmer">
            募集要項が見つかりません
          </h1>
          <Link href="/recruitment">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced">
              採用情報一覧に戻る
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            応募フォーム
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            {position.title}への応募
          </p>
        </div>

        {/*useStateを使わずに実装が必要なため、一時コメントアウト */}
        {/* <div className="glass-card p-8 md:p-12 rounded-2xl stagger-fade-in stagger-delay-1">
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="font-serif text-2xl font-bold mb-4 text-gray-800">
              {position.title}
            </h2>
            <p className="text-gray-700 mb-4">{position.description}</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Target className="w-4 h-4 mr-2 text-blue-600" />
                <span>{position.salary}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                <span>{position.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Building className="w-4 h-4 mr-2 text-blue-600" />
                <span>{position.type}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleApplicationSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={applicationFormData.name}
                  onChange={handleApplicationInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors hover-lift-enhanced"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={applicationFormData.email}
                  onChange={handleApplicationInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors hover-lift-enhanced"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={applicationFormData.phone}
                  onChange={handleApplicationInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors hover-lift-enhanced"
                  placeholder="090-1234-5678"
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  年齢
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={applicationFormData.age}
                  onChange={handleApplicationInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors hover-lift-enhanced"
                  placeholder="25"
                  min="18"
                  max="100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                住所
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={applicationFormData.address}
                onChange={handleApplicationInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors hover-lift-enhanced"
                placeholder="東京都渋谷区..."
              />
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                職歴・経験 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="experience"
                name="experience"
                required
                rows={4}
                value={applicationFormData.experience}
                onChange={handleApplicationInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none hover-lift-enhanced"
                placeholder="これまでの職歴や経験について詳しくご記入ください"
              />
            </div>

            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                志望動機 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="motivation"
                name="motivation"
                required
                rows={4}
                value={applicationFormData.motivation}
                onChange={handleApplicationInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none hover-lift-enhanced"
                placeholder="志望動機をご記入ください"
              />
            </div>

            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ポートフォリオURL
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={applicationFormData.portfolio}
                onChange={handleApplicationInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors hover-lift-enhanced"
                placeholder="https://your-portfolio.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  履歴書 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    onChange={handleApplicationFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hover-lift-enhanced"
                  />
                  <Paperclip className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC, DOCX形式（最大5MB）
                </p>
              </div>
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  職務経歴書
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="coverLetter"
                    name="coverLetter"
                    onChange={handleApplicationFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hover-lift-enhanced"
                  />
                  <Paperclip className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC, DOCX形式（最大5MB）
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                個人情報の取り扱いについて
              </h3>
              <p className="text-sm text-gray-600">
                ご提供いただいた個人情報は、採用選考の目的のみに使用し、適切に管理いたします。
                選考終了後は、法令に基づき適切に処理いたします。
              </p>
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-white py-4 px-6 rounded-lg font-semibold hover-lift-enhanced flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              応募する
            </button>
          </form>
        </div> */}

        <div className="text-center mt-12 stagger-fade-in stagger-delay-2">
          <Link href={`/recruitment/${position.id}`} key={position.id}>
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced mr-4">
              募集要項に戻る
            </button>
          </Link>
          <Link href="/recruitment">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mr-4 hover-lift-enhanced">
              採用情報一覧に戻る
            </button>
          </Link>
          <Link href="/">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors hover-lift-enhanced">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormPage;
