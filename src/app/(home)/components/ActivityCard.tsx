"use client";

import { useState } from "react";
import InfiniteLoopSlider from "./InfiniteLoopSlider";
import './Slider.css';
import HomePdfViewer from "./HomePdfViewer";
import Image from "next/image";

interface Activity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

interface ActivityCardProps {
  activity: Activity[];
}

export default function ActivityCard({
  activity,
}: ActivityCardProps) {
  const [selectedPdf, setSelectedPdf] = useState<{ pdfUrl: string; title: string } | null>(null);

  const handleOpenPdf = (pdfUrl: string, title: string) => {
    setSelectedPdf({ pdfUrl, title });
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };


  return (
    <section className='activity-card-wrapper'>
        <InfiniteLoopSlider onHoverStop={true}>
          {activity.map((item) => (
            <div key={item.id} className="InfiniteLoop__item" onClick={() => handleOpenPdf(item.pdfPath, item.title)}>
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                className="InfiniteLoop__item-img"
              />
              <h5 className="description-overlay">
                {item.description} <br />
                {item.title}
              </h5>
            </div>
          ))}
        </InfiniteLoopSlider>
      {selectedPdf && (
        <HomePdfViewer
          pdfUrl={selectedPdf.pdfUrl}
          title={selectedPdf.title}
          onClose={handleClosePdf}  // PDF 모달 닫기 핸들러
        />
      )}
    </section>
  );
}
