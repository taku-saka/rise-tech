import React, { JSX } from "react";
import { recruitmentPositions } from "../../../data/positions";
import ApplicationForm from "./ApplicationForm";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return recruitmentPositions.map((item) => ({
    id: item.id.toString(),
  }));
}

const ApplicationFormPage = async ({
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
          <a href="/recruitment">
            <button className="btn-primary text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced">
              採用情報一覧に戻る
            </button>
          </a>
        </div>
      </div>
    );
  }

  // iconプロパティを除外したデータを作成（クライアントコンポーネントに渡すため）
  const positionData = {
    id: position.id,
    title: position.title,
    description: position.description,
    salary: position.salary,
    location: position.location,
    type: position.type,
    image: position.image,
    requirements: position.requirements,
    benefits: position.benefits,
  };

  return <ApplicationForm position={positionData} />;
};

export default ApplicationFormPage;
