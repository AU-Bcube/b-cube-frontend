"use client";

import Link from "next/link";
import logo from "../../public/logo.svg";
import BCUBE from "../../public/BCUBE.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function WebNavigation() {
  const pathname = usePathname();

  const linkStyle = (href: string) =>
    pathname === href
      ? "font-Pretendard-Bold text-white"
      : "font-Pretendard-Bold text-[#4f5d8d]";

  return (
    <div className="relative z-50 lg:mx-auto lg:max-w-screen-xl bg-[#06132D] px-6 py-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Link href="/">
            <Image src={BCUBE} alt="BCUBE" />
          </Link>
        </div>

        <nav>
          <ul className="flex flex-row gap-10 items-center">
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
            <li>
              <Link
                className={`text-[15px] flex justify-center items-center px-5 py-[10px] rounded-[100px] text-[#14439f] bg-white border border-white hover:bg-gray-300`}
                href="https://walla.my/v/qUdsP3AlNnApNXXTr2km"
                target="_blank"
              >
                <p className="font-semibold text-center whitespace-nowrap">
                  지원하기
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="absolute top-full left-0 w-full"
        style={{
          background:
            "linear-gradient(180deg, #06142D 0%, rgba(6,20,45,0) 100%)",
        }}
      />
    </div>
  );
}
