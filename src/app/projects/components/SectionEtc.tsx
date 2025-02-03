import { ProjectProps } from "../../../../new-types";
import PostPreviewSection from "./postPreview/PostPreviewSection";


interface SectionProps {
  data: ProjectProps[];
}

const SectionEtc: React.FC<SectionProps> = ({ data }) => {


  return (
    <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto overflow-hidden md:px-12 px-8">
      <PostPreviewSection
        title="기타활동"
        desc="아이디어톤 등과 같이 매년 진행되는 프로젝트 외의 활동"
        postsData={data}
      />
    </div>
  );
};

export default SectionEtc;
