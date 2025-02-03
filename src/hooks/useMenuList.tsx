import { useEffect, useState } from "react";
import ActivityButton from "@/components/activityButton";

interface UseMenuListProps {
  menuList: string[];
}

export function useMenuList({ menuList }: UseMenuListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  const gridVariants: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };
    
  const mediaGridVariants: Record<number, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };
  
  const menuButtons = (
    <div
      className={`grid justify-center items-center gap-2 my-8 md:my-16 
        ${menuList.length >= 4 ? "grid-cols-2" : gridVariants[menuList.length]} 
        ${mediaGridVariants[menuList.length]}`}
    >
      {menuList.map((item, index) => (
        <ActivityButton
          key={index}
          activity={item}
          selected={selectedIndex === index}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
  

  return { selectedIndex, menuButtons };
}
