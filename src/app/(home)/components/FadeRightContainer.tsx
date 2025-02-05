'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type Props = {
	delay?: number;
	once?: boolean; // false일 경우 다시 실행 가능
};

export default function FadeInRightContainer({
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
						if (once) observer.disconnect(); // `once=true`면 한 번만 실행
					} else if (!once) {
						setIsVisible(false); // `once=false`일 때 다시 사라졌다가 재등장
					}
				});
			},
			{ threshold: 0.2 }
		);

		observer.observe(containerRef.current);

		return () => observer.disconnect();
	}, [once]);

	return (
		<div
			ref={containerRef}
			className={`flex transition-all duration-700 ${
				!isVisible ? 'translate-x-20 opacity-0' : 'translate-x-0 opacity-100'
			}`}
			style={{
				transitionDelay: `${delay * 100}ms`, // `ms` 단위 변환
			}}
		>
			{children}
		</div>
	);
}
