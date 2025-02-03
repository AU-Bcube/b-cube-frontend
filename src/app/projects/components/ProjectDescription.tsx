import React from "react";

interface ProjectDescriptionProps {
  title: string;
  children: React.ReactNode;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  children,
}) => {
  return (
    <section className="flex flex-col w-full gap-[8px] md:gap-8">
      <div className="flex w-full">
        <h2 className="text-[20px] sm:text-5xl font-semibold bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <div className="text-[14px] sm:text-xl text-left text-[#f6f6f7]">
        {children}
      </div>
    </section>
  );
};

export default ProjectDescription;
