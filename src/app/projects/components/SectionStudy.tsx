import { studyProps } from "../../../../new-types";
import PostPreviewSection from "./postPreview/PostPreviewSection";


interface SectionProps {
  data: studyProps[];
}

const SectionStudy: React.FC<SectionProps> = ({ data }) => {


  return (
    <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto overflow-hidden md:px-12 px-8">
      <PostPreviewSection
        title="스터디"
        desc="파이썬, JAVA 등 실제 업무에 사용되는 프로그래밍 언어를 배우고 활용해보는 정기 활동"
        postsData={data}
      />
    </div>
  );
};

export default SectionStudy;