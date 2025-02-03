"use client";

import mobileStore from "@/stores/mobileStore";
import { useEffect } from "react";
import MobileNavigation from "@/mobileComponents/mobileNavigation";
import WebNavigation from "@/components/webNavigation";



export default function Header() {

  const isMobile = mobileStore((state) => state.isMobile);
  const checkMobile = mobileStore((state) => state.checkMobile);
    
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [checkMobile]);

  return (
    isMobile ? <MobileNavigation /> : <WebNavigation />
  )
}
