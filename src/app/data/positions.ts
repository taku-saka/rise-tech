import { Code, TrendingUp, Users, Briefcase } from "lucide-react";

export const recruitmentPositions = [
  {
    id: "beginner",
    title: "未経験エンジニア募集",
    description:
      "プログラミング未経験でも大丈夫。充実した研修制度で一からサポートします。",
    icon: Users,
    image: "/image/recruit/beginner.jpg",
    salary: "年収 300-450万円 (現場により異なります)",
    location: "東京・熊本",
    type: "正社員",
    requirements: [
      "やる気と学習意欲",
      "基本的なPCスキル",
      "コミュニケーション能力",
    ],
    benefits: [
      "充実した研修制度",
      "メンター制度",
      "資格取得支援",
      "リモートワーク可",
    ],
  },
  {
    id: "experienced",
    title: "エンジニア経験者募集",
    description:
      "あなたの技術力を活かし、より大きなプロジェクトに挑戦しませんか。",
    icon: Code,
    image: "/image/recruit/experienced.jpeg",
    salary: "年収 500-800万円",
    location: "東京・熊本・リモート",
    type: "正社員",
    requirements: ["3年以上の開発経験", "Web開発スキル", "チームワーク"],
    benefits: [
      "技術書購入支援",
      "勉強会参加費支給",
      "フレックスタイム",
      "副業OK",
    ],
  },
  {
    id: "sales",
    title: "営業担当募集",
    description:
      "お客様との信頼関係を築き、ビジネスの成長を支える営業職を募集しています。",
    icon: Briefcase,
    image: "/image/recruit/sales.jpeg",
    salary: "年収 400-700万円",
    location: "東京・熊本",
    type: "正社員",
    requirements: [
      "営業経験2年以上",
      "IT業界への興味",
      "プレゼンテーション能力",
    ],
    benefits: [
      "インセンティブ制度",
      "営業車貸与",
      "交通費全額支給",
      "成果報酬",
    ],
  },
  {
    id: "marketing",
    title: "マーケティング担当募集",
    description:
      "デジタルマーケティングの知識を活かし、ブランド価値向上に貢献してください。",
    icon: TrendingUp,
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    salary: "年収 450-650万円",
    location: "東京・リモート",
    type: "正社員",
    requirements: ["マーケティング経験", "SNS運用経験", "データ分析スキル"],
    benefits: [
      "最新ツール使用可",
      "セミナー参加支援",
      "クリエイティブ環境",
      "裁量労働制",
    ],
  },
];
