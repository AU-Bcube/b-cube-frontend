import { ProjectProps } from "../../../../new-types";
import PostPreviewSection from "./postPreview/PostPreviewSection";


interface SectionProps {
  data: ProjectProps[];
}

const SectionDesignton: React.FC<SectionProps> = ({ data }) => {


  return (
    <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto overflow-hidden md:px-12 px-8">
      <PostPreviewSection
        title="디자인톤"
        desc="팀 별로 아이디어를 기획하고 구체화하여 앱 서비스를 기획하는 활동"
        postsData={data}
      />
    </div>
  );
};

export default SectionDesignton;
