"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Haksamo from "../../../../public/haksamo.svg";
import Email_logo3 from "../../../../public/email_logo3.svg";
import useStore from "@/stores/mobileStore";

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
  return (
    <div
      className={
        "flex w-full rounded-[20px] bg-gradient-to-r from-[#7380B0] to-[#518CFF] p-px max-w-[360px]"
      }
    >
      <div className="flex flex-col w-full items-center bg-[#101C35] md:p-8 p-8 gap-1 rounded-[20px] h-full">
        <div
          className={
            "relative aspect-square rounded-full overflow-hidden md:w-[180px] w-[150px]"
          }
        >
          <Image src={imagePath} alt={name} fill objectFit="cover" />
        </div>

        <p className="text-2xl font-semibold text-center text-[#f6f6f7] mt-6">
          {name}
        </p>

        <div className="flex items-center gap-1 pr-[2px]">
          <Image
            src={Haksamo}
            alt="학번 아이콘"
            width={25}
            height={24}
            className="w-6 h-6"
          />
          <p className="text-sm font-medium text-left text-[#c5c5c6]">
            {studentId}학번
          </p>
        </div>

        {/* 메시지 */}
        <div className={`px-6 py-4 mt-4 rounded-full bg-[#ebeef6]/20`}>
          <p className="text-sm font-medium text-center text-[#f6f6f7]">
            {introduction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
