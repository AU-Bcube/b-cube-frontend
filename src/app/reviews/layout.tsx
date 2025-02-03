import MainBanner from "@/components/MainBanner";
import ballon from "../../../public/ballon.svg";

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <MainBanner
        title={<>B-CUBE의 생생한 후기들을<br/>지금 확인해 보세요</>}
        bannerImage={ballon}
        altText="ballon"
      />
      {children}
    </main>
  );
}