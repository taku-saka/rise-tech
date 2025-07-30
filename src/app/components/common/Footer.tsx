"use client";

import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";
import { services } from "../../data/services";
import { companyMenuItems } from "../../data/menu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95 text-white py-16 relative overflow-hidden z-10">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(30, 64, 175, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-4 gap-8 mb-12 ">
          {/* Company Info */}
          <div className="col-span-4 md:col-span-2 mb-5">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Rise Tech Solutions Logo"
                className="h-8 w-8"
              />
              <h3 className="font-serif text-2xl font-bold gradient-text-header">
                Rise Tech Solutions
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              すべての挑戦を、テクノロジーでミライにつなぐ。
              <br />
              最先端の技術でお客様のビジョンを現実のものとします。
            </p>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span>TEL: 03-6804-2140</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p>〒104-0045</p>
                  <p>東京都中央区築地2-10-2</p>
                  <p>JP-BASE築地駅前 7階</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-lg font-bold mb-4 text-white">
              サービス
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>
                    <button className="text-blue-200 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform cursor-pointer">
                      {service.title}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-lg font-bold mb-4 text-white">
              企業情報
            </h4>
            <ul className="space-y-2">
              {companyMenuItems.map((item) => (
                <li key={item.id}>
                  <Link href={`/company/${item.id}`}>
                    <button className="text-blue-200 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform cursor-pointer">
                      {item.title}
                    </button>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/news">
                  <button className="text-blue-200 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform cursor-pointer">
                    ニュース
                  </button>
                </Link>
              </li>
              <li>
                <Link href="recruitment">
                  <button className="text-blue-200 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform cursor-pointer">
                    採用情報
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-blue-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.wantedly.com/companies/company_4068809">
                <button className="text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform cursor-pointer">
                  <img className="w-6 h-6" src="/Wantedly_Mark_Wht.png" />
                </button>
              </a>

              <a href="https://x.com/ifsifs2021?s=21&t=OuLw0uLpANwdHzcWUkNY0w">
                <button className="text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </button>
              </a>
              <a href="https://www.instagram.com/_rts.2021_?igsh=Nm1mdGNsNGVjb3dp">
                <button className="text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </button>
              </a>
              <a href="https://youtube.com/@ifs-qj7yc?si=RwK2G7jiQ9Yi0E34">
                <button className="text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform cursor-pointer">
                  <Youtube className="w-5 h-5" />
                </button>
              </a>
              <a href="https://www.tiktok.com/@risetechsolutions">
                <button className="text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform cursor-pointer">
                  <Music2 className="w-5 h-5" />
                </button>
              </a>
            </div>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover-lift-enhanced flex items-center hover:scale-105 cursor-pointer">
                <Mail className="w-4 h-4 mr-2" />
                お問い合わせ
              </button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800/30 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2025 Rise Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
