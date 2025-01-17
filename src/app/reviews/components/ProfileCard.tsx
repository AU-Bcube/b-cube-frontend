"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Haksamo from "../../../../public/haksamo.svg";
import Email_logo3 from "../../../../public/email_logo3.svg";
import useStore from "@/stores/useStore";

interface ProfileCardProps {
  id: number;
  name: string;
  studentId: string;
  introduction: string;
  imagePath: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  studentId,
  introduction,
  imagePath,
}) => {
  const [isLongText, setIsLongText] = useState(false);
  const { isMobile } = useStore(); // 모바일 여부 확인

  useEffect(() => {
    const introductionLengthWithoutSpaces = introduction.replace(/\s/g, "").length;
    setIsLongText(introductionLengthWithoutSpaces > 10);
  }, [introduction]);


  return (
    <div
      className={"relative rounded-[10px] bg-[#f6f6f7]/[0.04] flex flex-col items-center justify-between p-10 border border-[#518CFF]" + (isMobile ? " w-full" : " w-[360px] h-[420px]")}
    >
      <div className={"relative aspect-square rounded-full overflow-hidden" + (isMobile ? " w-[150px]" : " w-[150px]")}>
        <Image src={imagePath} alt={name} fill objectFit="cover"/>
      </div>

      <p className="text-2xl font-semibold text-center text-[#f6f6f7] mt-4">
        {name}
      </p>

      <div className="flex items-center gap-2 mt-2">
        <Image
          src={Haksamo}
          alt="학번 아이콘"
          width={25}
          height={24}
          className="w-6 h-6"
        />
        <p className="text-sm font-medium text-left text-[#c5c5c6]">
          {studentId}
        </p>
      </div>

      {/* 메시지 */}
      <div
        className={`px-6 py-4 rounded-full bg-[#ebeef6]/20 mt-4 ${
          isLongText ? "max-w-[280px] w-full" : "w-fit"
        }`}
      >
        <p className="text-sm font-medium text-center text-[#f6f6f7]">
          {introduction}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
