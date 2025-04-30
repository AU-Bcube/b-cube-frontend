import { getExecutives } from "@/api";
import Image from "next/image";
import FadeUpContainer from "./FadeUpContainer";

interface Executive {
  id: number;
  department: string;
  role: string;
  studentId: string;
  name: string;
  imagePath: string;
  year: number;
}

export default async function Executives() {
  const executives = await getExecutives();
  if (executives.length === 0) {
    return <p>회장단 정보가 없습니다.</p>;
  }

  const thisYear = new Date().getFullYear();
  const currentExecutive = executives.sort((a: Executive, b: Executive) =>
    a.role === "회장 " ? -1 : b.role === "회장 " ? 1 : 0
  ); //회장이 먼저오게 정렬

  if (currentExecutive.length === 0) {
    return <p>해당 조건에 맞는 회장단 정보가 없습니다.</p>;
  }

  return (
    <ul className="mt-[32px] md:mt-[48px] flex justify-center items-center flex-col md:flex-row flex-wrap w-full gap-[64px] md:gap-[128px]">
      {currentExecutive.map((executive: Executive, index: number) => (
        <li key={index}>
          <FadeUpContainer delay={index}>
            <div className="flex flex-col justify-start items-center relative gap-6">
              <div className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full relative overflow-hidden">
                <Image
                  src={executive.imagePath}
                  alt={`${executive.name}'s profile`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center flex flex-col items-center gap-2 text-[#F6F6F7] font-semibold">
                <h5 className="text-[18px] md:text-[20px] leading-[24px]">
                  {executive.role}
                </h5>
                <h6 className="text-[16px] md:text-[18px] leading-[20px] md:leading-[30px]">
                  {executive.studentId}학번&nbsp;{executive.name}
                </h6>
              </div>
            </div>
          </FadeUpContainer>
        </li>
      ))}
    </ul>
  );
}
