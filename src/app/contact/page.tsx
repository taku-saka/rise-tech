"use client";
import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const handleContactInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://rt-solutions.co.jp/api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactFormData),
    });

    if (res.ok) {
      alert(
        "お問い合わせありがとうございます。担当者より3営業日以内にご連絡いたします。"
      );
      setContactFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
      });
    } else {
      alert("送信に失敗しました。");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 to-blue-50/95 py-20 relative z-10 page-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 stagger-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer">
            お問い合わせ
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-words">
            お気軽にお問い合わせください。担当者より迅速にご連絡いたします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card-enhanced p-8 rounded-2xl animate-slide-in-left stagger-fade-in stagger-delay-1">
            <h2 className="font-serif text-2xl font-bold mb-6 text-gray-800">
              お問い合わせフォーム
            </h2>
            <div className="relative">
              {/* <div className="absolute w-full h-full rounded-xl bg-white opacity-80 text-center z-10  text-xl font-bold p-10 pt-30">
                <p className="">
                  現在準備中です。 <br />
                  <br />
                  お電話またはメールでお問い合わせください。
                </p>
              </div> */}

              <form onSubmit={handleContactSubmit} className="space-y-6 p-5">
                <div className="grid md:grid-cols-2 gap-4">
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
                      value={contactFormData.name}
                      onChange={handleContactInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover-lift-enhanced text-gray-700"
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
                      value={contactFormData.email}
                      onChange={handleContactInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover-lift-enhanced text-gray-700"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={contactFormData.company}
                      onChange={handleContactInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover-lift-enhanced text-gray-700"
                      placeholder="株式会社サンプル"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactFormData.phone}
                      onChange={handleContactInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover-lift-enhanced text-gray-700"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ご興味のあるサービス
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={contactFormData.service}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover-lift-enhanced text-gray-700"
                  >
                    <option value="">選択してください</option>
                    <option value="受託開発">受託開発</option>
                    <option value="システム開発/SES">システム開発/SES</option>
                    <option value="自社サービス">自社サービス</option>
                    <option value="コンサルティング">コンサルティング</option>
                    <option value="SNS運用代行">SNS運用代行</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={contactFormData.subject}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover-lift-enhanced text-gray-700"
                    placeholder="お問い合わせの件名"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={contactFormData.message}
                    onChange={handleContactInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-none hover-lift-enhanced text-gray-700"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary-enhanced text-white py-4 px-6 rounded-lg font-semibold hover-lift-enhanced flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-5 h-5 mr-2" />
                  送信する
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div className="glass-card-enhanced p-8 rounded-2xl animate-slide-in-right stagger-fade-in stagger-delay-2">
              <h2 className="font-serif text-2xl font-bold mb-10 text-gray-800">
                お問い合わせ先
              </h2>

              <div className="space-y-10">
                <div className="flex items-start group">
                  <Phone className="w-6 h-6 mr-4 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      電話でのお問い合わせ
                    </h3>
                    <p className="text-gray-700 text-lg font-semibold">
                      03-6804-2140
                    </p>
                    <p className="text-gray-600 text-sm">
                      受付時間：平日 9:00-18:00
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start group">
                  <Mail className="w-6 h-6 mr-4 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      メールでのお問い合わせ
                    </h3>
                    <p className="font-semibold text-gray-800">
                      info＠risetech-solutions.co.jp
                    </p>
                    <p className="text-sm text-gray-700">
                      (＠は半角に書き換えてください)
                    </p>
                    <p className="text-gray-600 text-sm mt-4">
                      24時間受付（返信は営業時間内）
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start group mb-4">
                  <MapPin className="w-6 h-6 mr-4 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      本社所在地
                    </h3>
                    <p className="text-gray-700">
                      〒104-0045
                      <br />
                      東京都中央区築地2-10-2
                      <br />
                      JP-BASE築地駅前 7階
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card-enhanced p-8 rounded-2xl animate-slide-in-right-delay stagger-fade-in stagger-delay-3">
              <h2 className="font-serif text-2xl font-bold mb-10 text-gray-800">
                よくあるご質問
              </h2>

              <div className="space-y-10">
                <div className="group">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    Q. 見積もりは無料ですか？
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A.
                    はい、お見積もりは無料で承っております。お気軽にお問い合わせください。
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    Q. 対応可能な地域はどこですか？
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A. 全国対応可能です。リモートでの対応も行っております。
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    Q. 小規模な案件でも対応可能ですか？
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A.
                    はい、規模に関わらず対応いたします。まずはお気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 stagger-fade-in stagger-delay-4">
          <Link href="/">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
