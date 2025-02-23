import Article from "@/components/Article";
import Executives from "./components/Executives";
import Activities from "./components/Activities";
import FadeUpContainer from "./components/FadeUpContainer";
import Card from "../recruit/components/card";

export default function Main() {

  return (    
    <main>
      <div className="flex flex-col justify-center items-center md:p-5 w-full max-w-7xl relative md:px-12 md:mx-auto h-screen min-h-[650px] md:min-h-[1080px]">
        <div className="flex flex-[3]"/>
        <h1
          className="flex items-center justify-center w-full font-bold text-center text-[50px] leading-[65px]  md:text-[100px] md:leading-[130px] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "radial-gradient(87.73% 87.73% at 50% 58.48%, #F6F6F7 41.5%, #14439F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BROAD
          <br />
          BUSINESS
          <br />
          BUILDER
        </h1>
        <div className="flex flex-[3]"/>
        
          <div className="flex flex-col gap-6">
          <h2
            className="flex items-center justify-center w-full font-semibold text-xl md:text-[36px] md:leading-[40px] text-center px-2"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #A8B3D8 37.39%, #518CFF 61.51%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            아주대학교 경영인텔리전스학과 소학회
          </h2>
          <p className="w-full flex flex-col items-center text-center text-sm md:text-[22px] leading-[20px] md:leading-[40px] text-[#DEE5FF] font-medium px-8">
            비큐브는 최신 IT 기술에 대한 이해를 바탕으로 웹 및 앱 서비스를 직접 기획하고 개발하는 소학회입니다.
            <br />
            아이디어를 구현하는 과정에서 기획 능력과 개발 능력을 함께 성장시킬 수 있습니다.
          </p>
          </div>
        
        <div className="flex flex-[4]"/>
      </div>
      
      <section className="flex flex-col md:mt-20 mt-2">
          <div className="flex flex-col justify-center items-center md:p-5 w-full max-w-7xl mx-auto relative px-8 md:px-12">
            <FadeUpContainer>
              <Article subject="Introduction" title="주요 활동" />
            </FadeUpContainer>
            <div className="grid md:grid-cols-3 gap-6 md:mt-[80px] mt-8 auto-rows-fr">
              {/* 디자인톤 */}
              <FadeUpContainer delay={1}>
                <Card title="🎨 디자인톤" content={<>서비스 기획부터 UI 디자인, 개발 및 배포까지<br/>팀별로 웹/앱 서비스를 직접 구현하는 프로젝트</>}/>
              </FadeUpContainer>

              {/* 섹시한 IT */}
              <FadeUpContainer delay={2}>
                <Card title="📱 섹시한 IT" content={<>최신 IT 트렌드를 카드뉴스로 제작하고<br/>B-CUBE 공식 인스타그램을 통해 공유하는 활동</>}/>
              </FadeUpContainer>

              {/* 기타 IT 스터디 */}
              <FadeUpContainer delay={3}>
                <Card title="📚 IT 스터디" content={<>java, javascript, python 등<br/>다양한 프로그래밍 스터디 진행</>}/>
              </FadeUpContainer>
              {/* 디자인톤 */}
              <FadeUpContainer delay={4}>
                <Card title="🗣️ B-CUBE I TALK" content={<>IT 관련 지식과 트렌드를 공유하고<br/>데이터베이스화하여 체계적으로 축적하는<br/>온라인 지식 공유 활동</>}/>
              </FadeUpContainer>

              {/* 섹시한 IT */}
              <FadeUpContainer delay={5}>
                <Card title="🖥️ 웹사이트 기획 및 개발" content={<>기획팀, 디자인팀, 개발팀으로 나누어<br/>B-CUBE 웹사이트를 체계적으로 기획하고<br/>개발하며 지속적으로 발전시키는 활동</>}/>
              </FadeUpContainer>

              {/* 기타 IT 스터디 */}
              <FadeUpContainer delay={6}>
                <Card title="💡 신입생 아이디어톤" content={<>신입생끼리 서비스를 직접 기획해보고,<br/>문제 해결을 위한 창의적인 아이디어를 도출하며<br/>실전 기획 경험을 쌓는 프로젝트</>}/>
              </FadeUpContainer>
            </div>
          </div>
        
      </section>
      <FadeUpContainer>
        <section className="flex flex-col md:mt-96 mt-40">
          <Article subject="Project" title="프로젝트" />
          <Activities/>
        </section>
      </FadeUpContainer>

      <section className="flex flex-col justify-center items-center md:mt-96 md:mb-80 mt-40 mb-40">
        <FadeUpContainer>
          <div className="flex flex-col md:gap-8 gap-4">
            <Article subject="Executives" title="운영진 소개" />
            <Executives />
          </div>
        </FadeUpContainer>
      </section>
    </main>
    );
}
