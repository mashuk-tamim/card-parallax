"use client";
import { projects } from "@/app/components/data";
import { MotionValue, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "./components/Card";

// Define types for title, description, src, and color
type Project = {
  title: string;
  description: string;
  src: string;
  color: string;
};
// // Assuming projects is an array of Project objects
// type ProjectsArray = Project[];
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
                const targetScale:number = 1 - (projectLength - idx) * 0.05;
                // console.log({ ...project });
                const { title, description, src, color }: Project = project;
                console.log(title, typeof title);
				return (
					<Card
						key={idx}
						idx={idx}
                        title={title}
                        description={description}
                        src={src}
                        color={color}
						range={[idx*0.25, 1]}
						targetScale={targetScale}
						progress={scrollYProgress}
					></Card>
				);
			})}
		</main>
	);
};

export default Home;
