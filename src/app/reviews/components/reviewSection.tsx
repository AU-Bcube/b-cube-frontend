"use client";

import { useMenuList } from "@/hooks/useMenuList";
import SectionActivityPhoto from "./SectionActivityPhoto";
import SectionOBinterview from "./SectionOBinterview";

interface ProfileCardProps {
  id: number;
  name: string;
  studentId: string;
  introduction: string;
  imagePath: string;
}

interface ImageItem {
  date: string;
  description: string;
  id: number;
  imagePath: string;
}

interface ReviewSectionProps {
  interviews: ProfileCardProps[]; // Replace 'any' with the appropriate type
  photos: ImageItem[]; // Replace 'any' with the appropriate type
}

export default function ReviewSection({ interviews, photos }: ReviewSectionProps) {
  const menuList = ["OB한마디", "활동사진"];
  const { selectedIndex, menuButtons } = useMenuList({ menuList });

  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        {menuButtons}
      </section>
      {selectedIndex === 0 && <SectionOBinterview postData={interviews}/>}
      {selectedIndex === 1 && <SectionActivityPhoto images={photos}/>}
    </div>
  );
}