"use client";

import mobileStore from "@/stores/mobileStore";
import WebFooter from "./webFooter";
import MobileFooter from "@/mobileComponents/mobileFooter";

export default function Footer() {

  const isMobile = mobileStore((state) => state.isMobile);

  return (
    isMobile ? <MobileFooter /> : <WebFooter />
  )
}
