import Link from "next/link";
import logo from "../../public/logo.svg";
import BCUBE from "../../public/BCUBE.svg";
import insta_logo from "../../public/insta_logo.svg";
import github_logo from "../../public/github_logo.svg";
import kakaoTalk_logo from "../../public/kakaoTalk_logo.svg";
import Image from "next/image";

export default function WebFooter() {

  return (
    <div className="relative z-40 bg-[#06132D]">
      <div className="flex flex-row lg:mx-auto lg:max-w-screen-xl justify-between items-center px-4 py-6">
        <div className="flex flex-row items-center gap-4">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Link href="/">
            <Image src={BCUBE} alt="BCUBE" />
          </Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <Link href="https://www.instagram.com/sexyit_season2/" target="_blank" rel="noopener noreferrer">
                <div>
                  <Image src={insta_logo} alt="insta_logo" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="https://open.kakao.com/o/sCRuhWTg" target="_blank" rel="noopener noreferrer">
                <div>
                  <Image src={kakaoTalk_logo} alt="kakaoTalk_logo" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/AU-Bcube" target="_blank" rel="noopener noreferrer">
                <div>
                  <Image src={github_logo} alt="github_logo" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
