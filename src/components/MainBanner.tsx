import Image from "next/image";

interface MobileBannerProps {
  title: string | JSX.Element;
  bannerImage: string;
  altText: string;
  description?: string | JSX.Element;
}

export default function MainBanner ({
  title,
  bannerImage,
  altText,
  description,
}: MobileBannerProps) {
  return (
    <div className="flex w-full relative overflow-hidden h-60 max-w-7xl mx-auto md:min-h-[500px] md:h-[55vh]">
      <div className="absolute inset-0 flex justify-end items-center z-10 md:mt-[4vh]">
        <div className="absolute backdrop-blur-sm md:backdrop-blur w-full h-full"/>
        <Image
          src={bannerImage}
          alt={altText}
          className="object-contain h-full object-right-bottom pr-6"
        />
      </div>
      <div className="flex flex-col justify-start items-start absolute z-20 gap-3 md:gap-6 p-7 md:px-12 md:mt-[90px]">
        <p className="font-bold text-2xl md:text-5xl text-white md:leading-normal">
          {title}
        </p>
        {description && (
        <p className="z-20 text-[14px] md:text-2xl font-medium text-left text-[#f6f6f7]">
          {description}
        </p>
        )}
      </div>
        
      {/* 그라데이션 적용 위치 */}
      <div className="flex flex-col w-full justify-between">
      <div className="w-full h-[47px] md:h-[140px] md:top-[-4vh] mt-1 z-30 bg-gradient-to-b from-[#06142d] to-[#06142d]/0"/>
      <div className="md:hidden w-full h-[47px] mb-1 z-30 bg-gradient-to-b from-[#06142d]/0 to-[#06142d]" />
      </div>
    </div>
  );
};
