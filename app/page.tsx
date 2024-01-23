"use client";
import Image from "next/image";
import { projects } from "@/app/components/data";
import Card from "@/app/components/Card/page";
import { motion, useScroll, motionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	const projectLength = projects.length;
	// console.log(projectLength);
	// console.log(projects);
	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<main ref={container} className="mt-[50vh] mb-[100vh]">
			{projects.map((project, idx) => {
				const targetScale = 1 - (projectLength - idx) * 0.05;
				return (
					<Card
						key={idx}
						idx={idx}
						{...project}
						range={[0, 1]}
						targetScale={targetScale}
						progress={scrollYProgress}
					></Card>
				);
			})}
		</main>
	);
}
