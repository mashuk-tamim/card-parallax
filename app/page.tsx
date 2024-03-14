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
                // console.log({ ...project });
                const { title, description, src, color } = project;
				return (
					<Card
						key={idx}
						idx={idx}
                        title={title}
                        description={description}
                        src={src}
                        color={color}
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
