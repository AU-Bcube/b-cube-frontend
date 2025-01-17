"use client";

import ExecutivesProfile from "./ExecutiveProfile";
import { useState, useEffect } from "react";
import { useFetchExecutives } from "@/hooks/queries";

// interface Executive {
//   id: number;
//   department: string;
//   role: string;
//   studentId: string;
//   name: string;
//   imagePath: string;
// }

export default function Executives() {

  const {data: executives, isLoading, isError} = useFetchExecutives()
  console.log(executives)

  // 로딩 중 처리
  if (isLoading) {
    return <div>로딩 중입니다...</div>;
  }

  // 에러 처리
  if (isError) {
    return <div>데이터 불러오기 실패: {isError}</div>;
  }

  if (executives.length === 0) {
    return <div>회장단 데이터가 없습니다.</div>;
  }

  // 데이터가 있을 때 렌더링
  return (
    <ExecutivesProfile
      profile={executives}
      isLoading={isLoading}
      loadingText="로딩 중입니다..."
    />
  );
}