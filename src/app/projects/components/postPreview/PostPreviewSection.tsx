import React, { useState } from "react";
import ProjectDescription from "../ProjectDescription";
import PostPreviewBoxWithPdf from "./PostPreviewBoxWithPdf";
import ActivityButton from "@/components/activityButton";

interface PostPreviewSectionProps {
  title: string;
  desc: string;
  postsData: any[];
}

const PostPreviewSection: React.FC<PostPreviewSectionProps> = ({
  title,
  desc,
  postsData,
}) => {
  const [visiblePosts, setVisiblePosts] = useState<number>(6); // 처음에는 6개의 포스트만 표시

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className="flex flex-col justify-start items-start w-full mx-auto max-w-screen-lg md:gap-20 gap-10">
      <ProjectDescription title={title}>
        {desc}
      </ProjectDescription>
      <section className="flex flex-col w-full">
        <div className="grid md:grid-cols-2 w-full gap-6 md:gap-12 auto-rows-fr">
          {postsData.slice(0, visiblePosts).map((item, index) => (
            <PostPreviewBoxWithPdf
              key={index}
              image={item.imagePath}
              year={item.year}
              title={item.title}
              participants={item.participant}
              pdfUrl={item.pdfPath}
            />
          ))}
        </div>
        {/* isMobile에 따라 MobileButton 또는 ActivityButton 렌더링 */}
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

export default PostPreviewSection;
