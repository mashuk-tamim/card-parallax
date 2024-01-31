"use client";
import { projects } from "@/app/components/data";
import Card from "@/app/components/Card/page";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Home = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	const projectLength = projects.length;

	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", (e: any) => {
			console.log(e);
		});

		function raf(time: any) {
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
};

export default Home;
