"use client";

import MobileCarousel from "./MobileSlider";  // 모바일 캐러셀 컴포넌트
import './MobileCarousel.css';
import HomePdfViewer from "./HomePdfViewer";
import { useState } from "react";

interface MobileActivity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

interface MobileActivityCardProps {
  activity: MobileActivity[];
}

export default function MobileActivityCard({
  activity,
}: MobileActivityCardProps) {
  const [selectedPdf, setSelectedPdf] = useState<{ pdfUrl: string; title: string } | null>(null);

  const handleOpenPdf = (pdfUrl: string, title: string) => {
    setSelectedPdf({ pdfUrl, title });
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };


  return (
    <section className='mobile-carousel-wrapper'>
      <MobileCarousel>
        {activity.map((item) => (
          <div
            className="mobile-carousel-item"
            key={item.id}
            onClick={() => handleOpenPdf(item.pdfPath, item.title)} // 클릭 시 PDF 열기
          >
            <img
              src={item.imagePath}
              alt={item.title}
              className="mobile__item-img"
            />
            <p className="mobile-description-overlay">
              {item.description} <br />
              {item.title}
            </p>
          </div>
        ))}
      </MobileCarousel>
      {selectedPdf && (
        <HomePdfViewer
          pdfUrl={selectedPdf.pdfUrl}
          title={selectedPdf.title}
          onClose={handleClosePdf}  // PDF 닫기 핸들러
        />
      )}
    </section>
  );
}
