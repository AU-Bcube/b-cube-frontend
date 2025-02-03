import Article from "@/components/Article";
import Executives from "./components/Executives";
import Activities from "./components/Activities";

export default function Main() {

  return (    
    <main className="overflow-x-hidden">
      <div className="flex flex-col justify-center items-center md:p-5 w-full max-w-7xl relative px-8 md:px-12 md:mx-auto h-[92vh] md:min-h-[900px] min-h-[600px] max-h-[800px] md:max-h-[1200px]">
        <div className="flex flex-[5]"/>
        <section className="flex justify-center items-center w-full h-auto">
          <h1
            className="flex items-center justify-center w-full font-bold text-center text-[50px] leading-[65px] md:text-[100px] md:leading-[130px] bg-clip-text text-transparent"
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
        </section>
        <div className="flex flex-[5]"/>
        <h2
          className="flex items-center justify-center w-full font-semibold text-xl md:text-[36px] md:leading-[40px] text-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #A8B3D8 37.39%, #518CFF 61.51%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          아주대학교 경영인텔리전스학과 소학회
        </h2>
        <div className="flex flex-[1]"/>
        <p className="w-full flex flex-col items-center text-center text-sm md:text-[22px] leading-[20px] md:leading-[40px] text-[#DEE5FF] font-medium">
          <span>
            B-CUBE는 최신 IT 기술을 배우는 것 뿐 아니라 이를 통한 Business
            Application을 구축해
          </span>
          <span>
            e-business에 대한 깊이 있는 이해 뿐만 아니라 실질적 결과물을
            만드는 것을 목적으로 하는 소학회입니다
          </span>
        </p>
        <div className="flex flex-[4]"/>
      </div>

      <div className="flex flex-col h-[92vh] md:min-h-[1080px] min-h-[600px] max-h-[800px] md:max-h-[1200px]">
        <div className="flex flex-[1]"/>
        <section className="flex flex-col justify-center items-center md:p-5 w-full max-w-7xl mx-auto relative px-8 md:px-12">
          <Article subject="Introduction" title="소개" />
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start mt-8 md:mt-20 gap-4 md:gap-16">
            <p className="text-center md:text-left text-[16px] md:text-2xl font-bold text-[#f6f6f7] md:w-1/5">
              B-CUBE의 비전
            </p>
            <p className="md:text-left text-center text-[14px] leading-5 md:text-[20px] md:leading-10 text-[#DEE5FF] md:w-4/5 font-medium">
              B-Cube는 최신 IT기술에 대한 이해를 바탕으로 자신이 가지고 있는
              아이디어를 실질적인 결과물로 만드는 것을 목적으로 하는
              소학회입니다. IT트렌드를 배우고 익히며 아이디어를 기획하고
              구현하는 과정에서 관련 역량을 향상시킬 수 있습니다.
            </p>
          </div>
        </section>
        <div className="flex flex-[2]"/>
        <section className="flex flex-col justify-center items-center mt-6">
          <Article subject="Activities" title="주요 활동" />
          <Activities />
        </section>
      </div>
      
      <section className="md:h-[70vh] h-[100vh] flex flex-col min-h-[800px] max-h-[1080px]">
        <div className="flex flex-[2]"/>
        <Article subject="Executives" title="현재 회장단" />
        <Executives />
        <div className="flex md:flex-[3] flex-[2]"/>
      </section>
    </main>
    );
}
