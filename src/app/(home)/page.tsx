import WebPage from "./webPage";
import MobilePage from "./mobilePage";
import { headers } from "next/headers";

export default function Main() {
  const userAgent = headers().get("user-agent") || "";
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent);

  return <>{isMobile ? <MobilePage /> : <WebPage />} </>;
}
