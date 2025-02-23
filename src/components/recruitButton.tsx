"use client";

export default function RecruitButton () {
	return (
		<button
			className={`flex justify-center items-center md:mt-6 mt-2 md:px-8 md:py-4 px-5 py-3 rounded-[100px] text-[#14439f] bg-white border border-white hover:bg-gray-300`}
			onClick={() => window.alert("B-CUBE 2025년 1학기 모집은 3월 3일(월)부터 시작됩니다.\n모집 기간: 3월 3일(월) ~ 3월 7일(금) 23:59\n많은 관심과 참여 부탁드립니다!")}
		>
			<p className="text-sm md:text-lg font-semibold text-center whitespace-nowrap">
				모집 예정
			</p>
		</button>
	);
}
