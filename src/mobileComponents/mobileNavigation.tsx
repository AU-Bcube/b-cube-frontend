"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import BCUBE from "../../public/BCUBE.svg";
import Hamburger from "../../public/hamburger.svg";
import MobileCancel from "../../public/mobileCancel.svg";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // 사이드바 열기/닫기 토글 함수
  const closeSidebar = () => setIsSidebarOpen(false); // 사이드바 닫기 함수
  const pathname = usePathname();

  const linkStyle = (href: string) =>
    pathname === href
      ? "font-Pretendard-Bold text-[20px] text-[#14439F]"
      : "font-Pretendard-Bold text-[20px] text-white";

  return (
    <>
      <div className="relative flex flex-col w-full px-6 py-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <Link href="/">
              <Image src={BCUBE} alt="BCUBE" />
            </Link>
          </div>

          <nav className="hidden md:flex">
            <ul className="gap-24">
              <li>
                <Link href="/" className={linkStyle("/")}>
                  홈
                </Link>
              </li>
              <li>
                <Link href="/projects" className={linkStyle("/projects")}>
                  프로젝트
                </Link>
              </li>
              <li>
                <Link href="/reviews" className={linkStyle("/reviews")}>
                  후기
                </Link>
              </li>
              <li>
                <Link href="/recruit" className={linkStyle("/recruit")}>
                  리크루팅
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={toggleSidebar}
            className="focus:outline-none md:hidden"
            aria-label="Toggle Sidebar"
          >
            <Image
              src={Hamburger}
              alt="hamburger"
              width={28}
              height={29}
              className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
            />
          </button>
        </div>
      </div>

      {/* 사이드바 (isSidebarOpen에 따라 열림/닫힘) */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#06132D] z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between items-center px-6 py-4">
          <div className="flex flex-row items-center gap-4">
            <Image src={logo} alt="logo" />
            <Image src={BCUBE} alt="BCUBE" />
          </div>
          <button
            onClick={toggleSidebar}
            className="focus:outline-none"
            aria-label="Close Sidebar"
          >
            <Image
              src={MobileCancel}
              alt="mobileCancel"
              width={28}
              height={29}
              className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
            />
          </button>
        </div>

        <nav className="flex flex-col items-start space-y-6 px-7 py-8 font-bold">
          <Link href="/" className={linkStyle("/")} onClick={closeSidebar}>
            홈
          </Link>
          <Link
            href="/projects"
            className={linkStyle("/projects")}
            onClick={closeSidebar}
          >
            프로젝트
          </Link>
          <Link
            href="/reviews"
            className={linkStyle("/reviews")}
            onClick={closeSidebar}
          >
            후기
          </Link>
          <Link
            href="/recruit"
            className={linkStyle("/recruit")}
            onClick={closeSidebar}
          >
            리크루팅
          </Link>
        </nav>
      </div>
    </>
  );
}
