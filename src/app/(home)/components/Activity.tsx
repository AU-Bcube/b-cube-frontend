"use client";

import { useFetchActivites } from '@/hooks/queries';
import ActivityCard from './ActivityCard';
import HomePdfViewer from './HomePdfViewer';
import { useEffect, useState } from "react";

// 활동 데이터 타입 정의
interface Activity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

export default function Activity() {
  const [error, setError] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<{ pdfUrl: string; title: string } | null>(null);

  const {data: activities, isLoading, isError} = useFetchActivites()

  // PDF 모달을 열기 위한 핸들러러
  const handleOpenPdf = (pdfUrl: string, title: string) => {
    setSelectedPdf({ pdfUrl, title });
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };

  if (error) {
    return <div className="text-red-500">데이터 불러오기 실패: {error}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>로딩 중입니다...</div>
      ) : activities.length === 0 ? (
        <div>활동 데이터가 없습니다.</div>
      ) : (
        <ActivityCard
          activity={activities}
          isLoading={isLoading}
          onOpenPdf={handleOpenPdf}  // PDF 모달 열기 핸들러 전달
        />
      )}
      {/* PDF 모달 */}
      {selectedPdf && (
        <HomePdfViewer
          pdfUrl={selectedPdf.pdfUrl}
          title={selectedPdf.title}
          onClose={handleClosePdf}  // PDF 모달 닫기 핸들러
        />
      )}
    </div>
  );
}
