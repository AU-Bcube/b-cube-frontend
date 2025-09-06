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
import { getContact } from "@/api";
import FadeUpContainer from "../(home)/components/FadeUpContainer";

export default async function Recruit() {
  const contacts = await getContact();

  return (
    <main>
      <MainBanner
        title={<>모집아 종료되었습니다!</>}
        bannerImage={megaphone}
        altText="megaphone"
        description={
          <>
            지금은 모집 기간이 아닙니다.
            <br />
            다음 모집은 2026년 2월에 예정되어 있습니다.
          </>
        }
        button={false}
      />
      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto relative px-8 md:px-12">
        <section className="flex flex-col md:mb-80 mb-40 justify-center items-center">
          <FadeUpContainer>
            <Article subject="Introduction" title="모집 개요" />
          </FadeUpContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:mt-[80px] mt-8 auto-rows-fr">
            <FadeUpContainer delay={1}>
              <Card
                title="인재상"
                content={
                  <>
                    최신 IT 기술과 비즈니스 이해를 바탕으로
                    <br />
                    창의적 문제 해결과 협업 능력을 갖춘
                    <br />
                    자기주도적 학습자
                  </>
                }
              />
            </FadeUpContainer>
            <FadeUpContainer delay={2}>
              <Card
                title="지원자격"
                content={
                  <>
                    IT 기술과 비즈니스에 대한 관심과 열정을 가진
                    <br />
                    아주대학교 학생이라면 누구나
                  </>
                }
              />
            </FadeUpContainer>
            <FadeUpContainer delay={3}>
              <Card
                title="지원방법"
                content={
                  <>
                    1차 서류
                    <br />
                    2차 면접
                  </>
                }
              />
            </FadeUpContainer>
          </div>
        </section>
        <ActivitySection />
        <section className="flex flex-col justify-center items-center w-full relative md:mt-80 mt-40 md:mb-80 mb-40">
          <FadeUpContainer>
            <h3 className="text-[22px] md:text-[40px] font-bold text-center bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
              Contact Us
            </h3>
          </FadeUpContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:mt-[64px] mt-8 auto-rows-fr md:px-12">
            <FadeUpContainer delay={1}>
              <ContactItem
                title="Mail"
                value={contacts.email}
                svg={email_logo2}
              />
            </FadeUpContainer>
            <FadeUpContainer delay={2}>
              <Link
                href={contacts.kakaotalkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full"
              >
                <ContactItem
                  title="KakaoTalk"
                  value="오픈채팅방"
                  svg={kakaoTalk_logo2}
                />
              </Link>
            </FadeUpContainer>
            <FadeUpContainer delay={3}>
              <Link
                href={contacts.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full"
              >
                <ContactItem
                  title="Instagram"
                  value="섹시한 IT"
                  svg={insta_logo2}
                />
              </Link>
            </FadeUpContainer>
          </div>
        </section>
      </div>
    </main>
  );
}

