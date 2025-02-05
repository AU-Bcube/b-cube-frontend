'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type Props = {
	delay?: number;
	once?: boolean; // ✅ false일 경우 스크롤 시 다시 실행되도록 수정
};

export default function FadeUpContainer({
	children,
	delay = 0,
	once = true,
}: PropsWithChildren<Props>) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						if (once) observer.disconnect(); // ✅ `once=true`면 한 번 실행 후 관찰 해제
					} else if (!once) {
						setIsVisible(false); // ✅ `once=false`일 때 화면에서 벗어나면 다시 실행 가능하도록 설정
					}
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(containerRef.current);

		return () => observer.disconnect();
	}, [once]); // ✅ `once` 값 변경 시만 다시 실행

	return (
		<div
			ref={containerRef}
			className={`flex transition-all duration-700 ${
				!isVisible ? 'translate-y-20 opacity-0' : '-translate-y-0 opacity-100'
			}`}
			style={{
				transitionDelay: `${delay * 100}ms`, // ✅ `ms` 단위 변환
			}}
		>
			{children}
		</div>
	);
}
