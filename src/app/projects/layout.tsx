import MainBanner from "@/components/MainBanner";
import file_image from "@/../public/file-bulb.svg";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <MainBanner 
        title={<>B-CUBE의 다양한 활동들을<br />지금 확인해 보세요</>}
        bannerImage={file_image}
        altText="file-bulb"
      />
      {children}
    </main>
  );
}