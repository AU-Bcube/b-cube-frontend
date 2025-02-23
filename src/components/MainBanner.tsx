import Image from "next/image";
import RecruitButton from "./recruitButton";

interface MobileBannerProps {
  title: string | JSX.Element;
  bannerImage: string;
  altText: string;
  description?: string | JSX.Element;
  button?: boolean
  onClick?: () => void;
}

export default function MainBanner ({
  title,
  bannerImage,
  altText,
  description,
  button = false
}: MobileBannerProps) {
  return (
    <div className="flex w-full relative overflow-hidden h-52 max-w-7xl mx-auto md:min-h-[500px] md:h-[55vh]">
      <div className="absolute inset-0 flex justify-end z-10 md:mt-[4vh]">
        <div 
          className="md:hidden flex w-full h-full"
          style={{
            filter: "blur(6px)", 
          }}  
        >
          <div className="flex flex-[1]"/>
          <Image
            src={bannerImage}
            alt={altText}
            className="object-contain h-full object-right-bottom pr-6"
          />
        </div>
        <div 
          className="w-full h-full hidden md:flex"
          style={{
            filter: "blur(12px)", 
          }}  
        >
          <div className="flex flex-[1]"/>
          <Image
            src={bannerImage}
            alt={altText}
            className="object-contain h-full object-right-bottom pr-6"
          />
        </div>
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
        {button &&
        <RecruitButton/>
        } 
      </div>
        
      {/* 그라데이션 적용 위치 */}
      <div className="flex flex-col w-full justify-between">
      <div className="w-full h-[47px] md:h-[160px] z-30 bg-gradient-to-b from-[#06142d] to-[#06142d]/0"/>
      <div className="md:hidden w-full h-[47px] md:h-[150px] z-30 bg-gradient-to-b from-[#06142d]/0 to-[#06142d]" />
      </div>
    </div>
  );
};
