import React, { useState } from "react";
import Image from "next/image";

interface PostPreviewBoxWithPdfProps {
  image: string;
  year: string;
  title: string;
  participants: string;
  pdfUrl?: string;
}

const PostPreviewBoxWithPdf: React.FC<PostPreviewBoxWithPdfProps> = ({
  image,
  year,
  title,
  participants,
  pdfUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (pdfUrl) {
      setIsOpen(true);
    }
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex">
      <div
        onClick={openModal}
        className="flex w-full text-white rounded-[12px] bg-gradient-to-r from-[#7380B0] to-[#518CFF] p-px cursor-pointer"
      >
        <div className="flex flex-col w-full justify-start items-start bg-[#101C35] p-5 rounded-[12px]">
          <div className="relative aspect-video w-full overflow-hidden rounded-[12px]">
            <Image
              src={image}
              alt={title}
              fill
              objectFit="cover"
            />
          </div>
          <p className="mt-4">{year}</p>
          <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate my-1">
            {title}
          </h5>
          {participants && <p className="my-1 text-gray-400">{participants}</p>}
        </div>
      </div>

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

export default PostPreviewBoxWithPdf;
