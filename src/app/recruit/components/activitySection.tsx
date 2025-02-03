"use client";

import Article from "@/components/Article";
import BigCard from "./bigCard";
import { useMenuList } from "@/hooks/useMenuList";

export default function ActivitySection() {
  const menuList = ["디자인톤", "섹시한 IT", "기타"];
  const { selectedIndex, menuButtons } = useMenuList({ menuList });

  const designthonContent = [
    <>1. 서비스 기획: 주어진 주제에 따라 팀별로 웹/앱 서비스 기획. 피그마로 UI 및 프로토타입까지 완성</>,
    <>2. 발표 및 평가: 종강 전후에 팀별 발표 예정. 현업에 계신 졸업생 선배님들이 평가 및 피드백 제공</>,
    <>3. 서비스 개발 및 배포: 선정된 서비스는 여름방학부터 개발을 시작해서 최종적으로 배포까지 고려</>,
    <>4. 학술제 참가: 구현된 서비스로 경영대학 학술제 참가 예정</>
  ];

  const sexyITContent = [
    <>1. 4명이 한 팀을 이루어 최신 IT 정보에 대한 카드뉴스 작성 후 섹시한 IT 인스타에 업로드</>,
    <>2. 2주 or 3주에 하나씩 작성</>,
    <>3. 부회장과 OT, 2주 or 3주마다 회의 진행</>
  ];

  const othersContent = [
    <>1. 파이썬 스터디는 신입생 모집 후 진행</>,
    <>2. 자율 스터디는 자바로 진행 예정</>,
    <>3. 학습 공동체 신청해서 지원</>
  ];

  const designthonMember = [
    <>1. 새로운 서비스에 대한 아이디어 혹은 기존 문제를 색다르게 접근할 수 있으신 분</>,
    <>2. 서비스 아이디어를 시각적으로 구현할 수 있으신 분</>,
    <>3. 피그마 툴을 사용한 UI/UX 디자인을 할 수 있으신 분</>,
    <>4. 나만의 서비스를 만들어 배포까지 해보고 싶으신 분</>
  ];

  const sexyITMember = [
    <>1. 최신 IT 기술과 트렌드에 대한 깊은 이해와 지속적인 관심을 가지신 분</>,
    <>2. 복잡한 IT 정보를 분석하고, 이해하기 쉽게 카드뉴스로 만들어 낼 수 있으신 분</>
  ];

  const othersMember = [
    <>이비즈 학우들과 파이썬, 자바 혹은 이외 스터디를 통해 다양한 IT분야를 함께 학습해 나가고 싶으신 분</>
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <section className="flex flex-col justify-center items-center">
        <Article subject="Activity" title="활동 분야" />
        {menuButtons}
      </section>
      <section className="flex flex-col w-full md:gap-16 gap-8">
        <BigCard
          title="다음과 같은 활동을 합니다"
          content={selectedIndex === 0 ? 
            designthonContent 
            : 
            selectedIndex === 1 ? 
            sexyITContent 
            : 
            othersContent
          }
        />
        <BigCard
          title="이런 멤버를 찾습니다"
          content={selectedIndex === 0?
            designthonMember
            :
            selectedIndex === 1 ?
            sexyITMember
            :
            othersMember
          }
        />
      </section>
    </div>
  );
}