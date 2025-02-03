import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ActivityButton from "@/components/activityButton";

interface InterviewItem {
  id: number;
  name: string;
  studentId: string;
  introduction: string;
  imagePath: string;
}

interface SectionOBinterviewProps {
  postData: InterviewItem[];
}

const SectionOBinterview: React.FC<SectionOBinterviewProps> = ({ postData }) => {
  const [visibleCount, setVisibleCount] = useState<number>(6); // 초기값 6

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[64px] max-w-7xl mx-auto md:px-12 px-8 gap-10 md:gap-20">
      {/* 그리드 컨테이너 */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {postData.slice(0, visibleCount).map((post, index, arr) => {
          // 마지막 요소가 1개 남았을 때 그 앞에 빈 div 추가
          const isLastSingleItem = arr.length % 3 === 1 && index === arr.length - 1;
          return (
            <React.Fragment key={index}>
              {isLastSingleItem && <div className="md:col-span-1"></div>}
              <ProfileCard
                id={post.id}
                name={post.name}
                studentId={post.studentId}
                introduction={post.introduction}
                imagePath={post.imagePath}
              />
            </React.Fragment>
          );
        })}
      </div>
      {/* "더보기" 버튼을 프로필 카드 아래에 배치 */}
      {visibleCount < postData.length && (
        <section className="flex justify-center items-center w-full md:mb-20 mb-10">
          <ActivityButton
            activity="더보기"
            selected={true}
            onClick={handleLoadMore}
          />
        </section>
      )}
    </div>
  );
};

export default SectionOBinterview;
