import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社 Rise Tech Solutions",
  description:
    "株式会社Rise Tech Solutionsは、ITシステム開発・DXコンサルティング・地方創生・音楽×インフルエンサー育成など、多方面に事業を展開する企業です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
