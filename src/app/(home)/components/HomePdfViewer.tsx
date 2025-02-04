import React, { useState } from "react";

interface HomePdfViewerProps {
  pdfUrl?: string;
  title?: string;
  onClose: () => void;
}

const HomePdfViewer: React.FC<HomePdfViewerProps> = ({
  pdfUrl,
  title,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center z-50 ">
          {/* 배경을 클릭하면 모달 닫힘 */}
          <div className="absolute inset-0 bg-black opacity-20" onClick={closeModal}></div>
          {/* 모달 내용 */}
          <div className="relative w-full max-w-7xl md:px-8 px-6 md:py-6 py-4 bg-white rounded-lg my-4 mx-4 sm:my-8 sm:mx-8">
            <div className="flex justify-between items-center md:mb-4 mb-2">
              <h3 className="md:text-lg text-sm font-semibold text-black">{title}</h3>
              <button
                onClick={closeModal}
                className="text-black text-lg font-bold"
              >
                &times;
              </button>
            </div>
            <div className="flex-grow h-[calc(100%-3rem)]">
            {pdfUrl ? (
              <iframe
                src={`/pdf-viewer.html?pdfUrl=${pdfUrl}`}
                className="flex w-full h-full"
                title="PDF Preview"
              ></iframe>
            ) : (
              <p>PDF 파일이 없습니다.</p>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePdfViewer;
