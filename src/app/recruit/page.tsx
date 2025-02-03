import megaphone from "../../../public/megaphone.svg";
import Card from "./components/card";
import ContactItem from "./components/contactItem";
import email_logo2 from "../../../public/email_logo2.svg";
import kakaoTalk_logo2 from "../../../public/kakaoTalk_logo2.svg";
import insta_logo2 from "../../../public/insta_logo2.svg";
import Link from "next/link";
import Article from "@/components/Article";
import MainBanner from "@/components/MainBanner";
import ActivitySection from "./components/activitySection";
import { getContact } from "@/api/contact";

export default async function Recruit() {

  const contacts = await getContact();
  
  return (
    <main>
      <MainBanner
        title={<>지금은 모집기간이 아닙니다</>}
        bannerImage={megaphone}
        altText="megaphone"
        description={<>2024년 2학기 모집이 완료되었습니다!<br />다음 기수는 2025년 3월에 예정되어 있습니다</>}
      />
      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto relative px-8 md:px-12">
        <section className="md:mb-[228px] mb-[64px]">
          <Article subject="Introduction" title="모집 개요" />
          <div
            className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:mt-[80px] mt-8 auto-rows-fr"
          >
            <Card
              title="인재상"
              content="최신 IT 기술과 비즈니스 이해를 바탕으로 창의적 문제 해결과 협업 능력을 갖춘 자기주도적 학습자"
            />
            <Card
              title="지원자격"
              content="IT 기술과 비즈니스에 대한 관심과 열정을 가진 경영인텔리전스학과 학생이라면 누구나"
            />
            <Card
              title="지원방법"
              content={<>1차 서류<br/>2차 면접</>}
            />
          </div>
        </section>
        <ActivitySection/>
        <section className="flex flex-col justify-center items-center w-full relative pb-[237px] md:mt-[228px] mt-[64px]">
          <h3 className="text-xl md:text-[40px] font-bold text-center bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
            Contact Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:mt-[64px] mt-8 auto-rows-fr md:px-12">
            <ContactItem
              title="Mail"
              value={contacts.email}
              svg={email_logo2}
            />
            <Link
              href={contacts.kakaotalkLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactItem
                title="KakaoTalk"
                value="오픈채팅방"
                svg={kakaoTalk_logo2}
              />
            </Link>
            <Link
              href={contacts.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactItem
                title="Instagram"
                value="섹시한 IT"
                svg={insta_logo2}
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
