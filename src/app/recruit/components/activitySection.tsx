"use client";

import Article from "@/components/Article";
import BigCard from "./bigCard";
import { useMenuList } from "@/hooks/useMenuList";
import FadeUpContainer from "@/app/(home)/components/FadeUpContainer";

export default function ActivitySection() {
  const menuList = ["기획", "마케팅", "개발", "기타"];
  const { selectedIndex, menuButtons } = useMenuList({ menuList });

  const designthonContent = [
    <>1. 서비스 기획: 주어진 주제에 따라 팀별로 웹/앱 서비스 기획. 피그마로 UI 및 프로토타입까지 완성</>,
    <>2. 발표 및 평가: 종강 전후에 팀별 발표 예정. 현업에 계신 졸업생 선배님들이 평가 및 피드백 제공</>,
    <>3. 서비스 개발 및 배포: 선정된 서비스는 여름방학부터 개발을 시작해서 최종적으로 배포까지 고려</>,
    <>4. 학술제 참가: 구현된 서비스로 경영대학 학술제 참가 예정</>
  ];

  const ideathon = [
    <>1. 서비스 기획: 신입생을 대상으로 서비스 분석, 기획, 디자인 역량을 발휘</>,
    <>2. 체계적 기획: 유저 & 시장 분석, 경쟁사 분석, As-is To-be 등을 활용하여 기획력 증진</>,
    <>3. 멘토링: 팀별 담당 멘토의 피드백을 통한 기획 완성도 증진</>,
    <>4. 발표 및 평가: 중간고사 기간에 중간 검토. 종강 전후에 팀별 발표 예정</>
  ];

  const website = [
    <>1. 웹사이트 기획 및 구조 설계: 비큐브 웹사이트의 사용자 경험을 고려하여 콘텐츠 및 기능을 기획 및 설계</>,
    <>2. 부서별 협업: 디자인, 개발팀과 협력하여 실현 가능한 웹사이트 개선 방안 도출</>
  ]
  const sexyITContent = [
    <>1. 4명이 한 팀을 이루어 최신 IT 정보에 대한 카드뉴스 작성 후 섹시한 IT 인스타에 업로드</>,
    <>2. 2주 or 3주에 하나씩 작성</>,
    <>3. 부회장과 OT, 2주 or 3주마다 회의 진행</>
  ];

  const sexyITMarketing = [
    <>1. 섹시한 IT 계정의 팔로워 증진을 목표로 하여 마케팅 팀을 구성하여 전략안 도출</>,
    <>2. 인스타그램 비즈니스 전략 (광고, 데이터 기반 분석, 인터렉티브 콘텐츠 제작 등) 활용</>,
    <>3. 회장단과 회의 진행</>
  ]

  const development = [
    <>1. 웹사이트 기능 구현 및 설계: 최신 웹 기술을 활용하여 웹사이트 핵심 기능을 개발하고, 성능을 최적화</>,
    <>2. 부서별 협업: 기획, 디자인팀과 협력하여 실현 가능한 웹사이트 구현</>,
    <>3. 멘토링: 멘토와 함께 개발에 대해 기본적인 학습 가능</>
  ]
  const iTalk = [
    <>1. IT 관련 지식을 소학회원들끼리 자유롭게 공유하는 활동</>,
    <>2. 개인별 관심 분야 자유 선택</>,
    <>3. 주 1회 이상 콘텐츠 공유, 상호 피드백 가능</>,
    <>4. IT 관련 지식 데이터베이스화 하여 관리 및 진행</>
  ]
  const itStudy = [
    <>1. 프로그래밍 언어 스터디는 신입생 모집 후, 수요 조사 파악 후 진행</>,
    <>2. 자율 스터디는 &lsquo;인과추론&rsquo; 으로 진행 예정</>,
    <>3. 학습 공동체 신청해서 지원</>
  ];


  return (
    <div className="flex flex-col w-full justify-center items-center">
      <FadeUpContainer>
        <section className="flex flex-col justify-center items-center">
          <Article subject="Activity" title="활동 분야" />
          {menuButtons}
        </section>
      </FadeUpContainer>
      {selectedIndex == 0 &&
      <section className="flex flex-col w-full md:gap-16 gap-8"> 
        <FadeUpContainer delay={1}>
          <BigCard
            title="🎨 디자인톤"
            content={designthonContent}
          />
        </FadeUpContainer>
        <FadeUpContainer delay={2}>
          <BigCard
            title="💡 신입생 아이디어톤"
            content={ideathon}
          />
        </FadeUpContainer>
        <FadeUpContainer delay={2}>
          <BigCard
            title="🖥️ 웹사이트 기획"
            content={website}
          />
        </FadeUpContainer>
      </section>}
      {selectedIndex == 1 &&
      <section className="flex flex-col w-full md:gap-16 gap-8"> 
        <FadeUpContainer delay={1}>
          <BigCard
            title="📱 섹시한 IT"
            content={sexyITContent}
          />
        </FadeUpContainer>
        <FadeUpContainer delay={2}>
          <BigCard
            title="📈 섹시한 IT 마케팅"
            content={sexyITMarketing}
          />
        </FadeUpContainer>
      </section>}
      {selectedIndex == 2 &&
      <section className="flex flex-col w-full md:gap-16 gap-8"> 
        <FadeUpContainer delay={1}>
          <BigCard
            title="🧑‍💻 웹사이트 개발"
            content={development}
          />
        </FadeUpContainer>
      </section>}
      {selectedIndex == 3 &&
      <section className="flex flex-col w-full md:gap-16 gap-8"> 
      <FadeUpContainer delay={1}>
          <BigCard
            title="🗣️ I TALK"
            content={iTalk}
          />
        </FadeUpContainer>
        <FadeUpContainer delay={2}>
          <BigCard
            title="📚 IT 스터디"
            content={itStudy}
          />
        </FadeUpContainer>
      </section>}
    </div>
  );
}