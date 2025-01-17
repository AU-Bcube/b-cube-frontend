import React, { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import Image from "next/image";
import PhotoWithTitleBox from "./postPreview/PhotoWithTitleBox";
import ActivityButton from "@/components/activityButton";
import fetchPosts from "@/features/fetchPosts";
import MobileButton from "@/mobileComponents/mobileButton";
import useStore from "@/stores/useStore";

const SectionSexyIt = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("더보기");
  const [postsData, setPostsData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // 처음에는 6개만 표시
  const { isMobile } = useStore();

  useEffect(() => {
    fetchPosts("/sexyit", setPostsData, setError, true);
  }, []);

  // "더보기" 버튼 클릭 시 6개의 포스트 추가로 표시
  const loadMorePosts = () => {
    const remainingPosts = postsData.length - visiblePosts;
    const postsToShow = Math.min(6, remainingPosts);
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsToShow);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full sm:max-w-[1280px] sm:mx-auto mx-auto px-6 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full max-w-full sm:max-w-[1040px] sm:mt-[160px] mt-[64px] overflow-hidden">
        <ProjectDescription title="섹시한 IT">
          <div className="flex items-center align-middle">
            <div>
              <p className="mb-4">
                💡아는 것이 섹시하다, 섹시하게 IT하자💡
                <br />
                매달 다양한 IT관련 주제를 가지고 <br />
                카드뉴스를 만들어 정보를 공유하는 활동
              </p>
              <div className="text-[#7380B0]">
                INSTAGRAM
                <div>
                  <a
                    href="https://www.instagram.com/sexyit_season2/"
                    className="mr-[4px]"
                  >
                    @sexyit_season2
                  </a>{" "}
                  <a href="https://www.instagram.com/sexyit2018/">
                    @sexyit2018
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ProjectDescription>
        <Image
          src="/sexyit.jpg"
          alt="섹시한 IT"
          width={isMobile ? 90 : 250}
          height={isMobile ? 90 : 250}
          layout="fixed"
          className="rounded-full object-cover"
          style={{
            width: isMobile ? "90px" : "250px",
            height: isMobile ? "90px" : "250px",
            maxWidth: "100%",
          }}
        />
      </div>
      <section className="flex flex-col justify-center items-center w-full gap-16 relative pb-[120px] sm:mt-[160px] mt-[64px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-[32px] sm:gap-y-[64px] gap-[32px] p-4 w-full">
          {postsData
            .slice(0, Math.floor(visiblePosts / 3) * 3)
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
              key={postsData[visiblePosts - 1] + 1}
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
        {visiblePosts < postsData.length && (
          <div className="flex justify-center w-full max-w-full mt-8 overflow-hidden">
            {isMobile ? (
              <MobileButton
                activity="더보기"
                selected={selectedActivity === "더보기"}
                onClick={loadMorePosts}
              />
            ) : (
              <ActivityButton
                activity="더보기"
                selected={selectedActivity === "더보기"}
                onClick={loadMorePosts}
              />
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default SectionSexyIt;
