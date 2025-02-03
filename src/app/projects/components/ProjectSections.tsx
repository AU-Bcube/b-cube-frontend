"use client";

import SectionDesignton from "./SectionDesignton";
import SectionSexyIt from "./SectionSexyIt";
import SectionStudy from "./SectionStudy";
import SectionEtc from "./SectionEtc";
import { useMenuList } from "@/hooks/useMenuList";
import { ProjectSectionsProps } from "../../../../new-types";

const ProjectSections: React.FC<ProjectSectionsProps> = ({ designthon, sexyIt, study, etc }) => {
  const menuList = ["디자인톤", "섹시한 IT", "스터디", "기타"];
  const { selectedIndex, menuButtons } = useMenuList({ menuList });

  const projects = [
    { title: "디자인톤", component: <SectionDesignton data={designthon}/> },
    { title: "섹시한 IT", component: <SectionSexyIt postsData={sexyIt}/> },
    { title: "스터디", component: <SectionStudy data={study}/> },
    { title: "기타", component: <SectionEtc data={etc}/> },
  ]
 
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        {menuButtons}
      </section>
      {projects.map((item, index) => (
        <div key={index} className={selectedIndex === index ? "block" : "hidden"}>
          {item.component}
        </div>
      ))}
    </div>
  );
}

export default ProjectSections;