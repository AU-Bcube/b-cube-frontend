import React, { useState } from "react";
import ProjectDescription from "./ProjectDescription";
import PhotoWithTitleBox from "./postPreview/PhotoWithTitleBox";
import ActivityButton from "@/components/activityButton";
import { sexyItProps } from "../../../../new-types";



interface SectionProps {
  postsData: sexyItProps[];
}


const SectionSexyIt: React.FC<SectionProps> = ({ postsData }) => {
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // 처음에는 6개만 표시

  // "더보기" 버튼 클릭 시 6개의 포스트 추가로 표시
  const loadMorePosts = () => {
    const remainingPosts = postsData.length - visiblePosts;
    const postsToShow = Math.min(6, remainingPosts);
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsToShow);
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto overflow-hidden md:px-12 px-8 md:gap-20 gap-10">
      <div className="flex flex-row justify-between items-center mx-auto max-w-screen-lg w-full overflow-hidden">
        <ProjectDescription title="섹시한 IT">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p>
                💡아는 것이 섹시하다, 섹시하게 IT하자💡
              </p>
              <p>
                매달 다양한 IT관련 주제를 가지고 카드뉴스를 만들어 정보를 공유하는 활동
              </p>
            </div>
            <div className="text-[#7380B0]">
              <h5>
                INSTAGRAM
              </h5>
              <div className="flex flex-row gap-3">
                <a href="https://www.instagram.com/sexyit_season2/">
                  @sexyit_season2
                </a>
                <a href="https://www.instagram.com/sexyit2018/">
                  @sexyit2018
                </a>
              </div>
            </div>
          </div>
        </ProjectDescription>
      </div>
      <section className="flex flex-col w-full mx-auto max-w-screen-lg">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 w-full">
          {postsData
            .slice(0, visiblePosts)
            .map((card, index) => (
              <PhotoWithTitleBox
                key={index}
                title={card.title}
                date={card.date}
                imageSrc={card.imagePath}
                link={card.url}
              />
            ))}
          {visiblePosts % 3 === 1 && (
            <div className="hidden lg:block">
              <PhotoWithTitleBox key={"dummy"} />
            </div>
          )}
          {visiblePosts % 3 === 1 ? (
            <PhotoWithTitleBox
              key={postsData[visiblePosts - 1].id + 1}
              title={postsData[visiblePosts - 1].title}
              date={postsData[visiblePosts - 1].date}
              imageSrc={postsData[visiblePosts - 1].imagePath}
              link={postsData[visiblePosts - 1].url}
            />
          ) : (
            postsData
              .slice(
                Math.floor(visiblePosts / 3) * 3,
                Math.floor(visiblePosts / 3) * 3 + (visiblePosts % 3)
              )
              .map((card, index) => (
                <PhotoWithTitleBox
                  key={index}
                  title={card.title}
                  date={card.date}
                  imageSrc={card.imagePath}
                  link={card.url}
                />
              ))
          )}
        </div>
      </section>
      <div className="flex justify-center items-center w-full md:mb-20 mb-10">
        {visiblePosts < postsData.length && (
          <ActivityButton
            activity="더보기"
            selected={true}
            onClick={loadMorePosts}
          />
        )}
      </div>
    </div>
  );
};

export default SectionSexyIt;
