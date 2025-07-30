import {
  Code,
  Building,
  Smartphone,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export const services = [
  {
    id: "outsourcing",
    title: "受託開発",
    description: "お客様のニーズに合わせたカスタムシステム開発",
    icon: Code,
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    subServices: [
      {
        title: "Web制作",
        description: "レスポンシブデザインに対応したモダンなWebサイト制作",
        features: [
          "レスポンシブデザイン",
          "SEO最適化",
          "CMS構築",
          "パフォーマンス最適化",
        ],
      },
      {
        title: "Webアプリ開発",
        description: "高機能なWebアプリケーションの設計・開発",
        features: [
          "SPA開発",
          "API設計",
          "データベース設計",
          "セキュリティ対策",
        ],
      },
    ],
  },
  {
    id: "ses",
    title: "システム開発/SES",
    description: "技術力の高いエンジニアによるシステム開発支援",
    icon: Building,
    image: "/IMG_1869.jpeg",
    subServices: [
      {
        title: "システムエンジニアリングサービス",
        description: "経験豊富なエンジニアによる開発支援",
        features: [
          "要件定義支援",
          "設計・開発",
          "テスト・品質保証",
          "運用・保守",
        ],
      },
    ],
  },
  {
    id: "product",
    title: "自社サービス",
    description: "革新的な自社プロダクトの企画・開発・運営",
    icon: Smartphone,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    subServices: [
      {
        title: "フリーランスエンジニアのプラットフォーム",
        description: "エンジニアと企業をつなぐマッチングプラットフォーム",
        features: [
          "スキルマッチング",
          "プロジェクト管理",
          "評価システム",
          "決済機能",
        ],
        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "事業承継のプラットフォーム",
        description: "中小企業の事業承継を支援するデジタルプラットフォーム",
        features: [
          "承継者マッチング",
          "企業価値算定",
          "手続き支援",
          "コンサルティング",
        ],
        image:
          "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    id: "consulting",
    title: "コンサルティング",
    description: "DX推進とビジネス戦略のコンサルティング",
    icon: TrendingUp,
    image: "/S__4333626_0.jpg",
    subServices: [
      {
        title: "CSO代行コンサルティング",
        description: "最高戦略責任者として企業の戦略立案・実行を支援",
        features: ["戦略立案", "組織改革", "KPI設計", "実行支援"],
      },
      {
        title: "M&A戦略",
        description: "企業の成長戦略としてのM&Aを包括的に支援",
        features: [
          "買収戦略立案",
          "ターゲット選定",
          "デューデリジェンス",
          "統合支援",
        ],
      },
      {
        title: "マーケティング戦略",
        description: "デジタル時代に対応したマーケティング戦略の立案・実行",
        features: [
          "市場分析",
          "ブランド戦略",
          "デジタルマーケティング",
          "効果測定",
        ],
      },
    ],
  },
  {
    id: "sns",
    title: "SNS運用代行",
    description: "効果的なSNSマーケティング戦略の立案・実行",
    icon: MessageSquare,
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    subServices: [
      {
        title: "SNSマーケティング",
        description: "各種SNSプラットフォームでの効果的なマーケティング",
        features: ["コンテンツ企画", "アカウント運用", "広告運用", "効果分析"],
      },
      {
        title: "動画制作",
        description: "SNS向けの魅力的な動画コンテンツ制作",
        features: ["企画・構成", "撮影・編集", "アニメーション", "ライブ配信"],
      },
    ],
  },
];
