"use client";

import MobileActivityCard from "./MobileActivityCard";
import HomePdfViewer from "./HomePdfViewer";  // PDF 모달 컴포넌트 import
import { useEffect, useState } from "react";
import { useFetchActivites } from "@/hooks/queries";

// 활동 데이터 타입 정의
interface MobileActivity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

export default function MobileActivity() {
  const [selectedPdf, setSelectedPdf] = useState<{ pdfUrl: string; title: string } | null>(null);

  const {data: activities, isLoading, isError} = useFetchActivites()
  const handleOpenPdf = (pdfUrl: string, title: string) => {
    setSelectedPdf({ pdfUrl, title });
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };

  if (isError) {
    return <div className="text-red-500">데이터 불러오기 실패: {isError}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>로딩 중입니다...</div>
      ) : activities.length === 0 ? (
        <div>활동 데이터가 없습니다.</div>
      ) : (
        <MobileActivityCard
          activity={activities}
          isLoading={isLoading}
          onOpenPdf={handleOpenPdf}  // PDF 열기 핸들러 전달
        />
      )}
      {selectedPdf && (
        <HomePdfViewer
          pdfUrl={selectedPdf.pdfUrl}
          title={selectedPdf.title}
          onClose={handleClosePdf}  // PDF 닫기 핸들러
        />
      )}
    </div>
  );
}
