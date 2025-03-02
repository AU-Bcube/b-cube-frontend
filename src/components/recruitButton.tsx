import Link from "next/link";

export default function RecruitButton () {
	return (
		<Link
			className={`flex justify-center items-center md:mt-6 mt-2 md:px-8 md:py-4 px-5 py-3 rounded-[100px] text-[#14439f] bg-white border border-white hover:bg-gray-300`}
			href="https://walla.my/v/qUdsP3AlNnApNXXTr2km"
			target="_blank"
		>
			<p className="text-sm md:text-lg font-semibold text-center whitespace-nowrap">
				지원하기
			</p>
		</Link>
	);
}
