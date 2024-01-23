"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface pageProps {
	title: string;
	description: string;
	src: string;
	link: string;
	color: string;
	idx: number;
	targetScale: number;
	progress: import("framer-motion").MotionValue<number>;
	range: number[];
}

const page: React.FC<pageProps> = ({
	title,
	description,
	src,
	link,
	color,
	idx,
	range,
    targetScale,
    progress
}) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});
	const scale = useTransform(progress, range, [1, targetScale]);
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	// console.log(title, description, src, link, color);
	return (
		<div
			className="h-[100vh] flex justify-center items-center sticky top-0"
			ref={container}
		>
			<motion.div
                style={{
                    scale: scale,
					backgroundColor: color,
					top: `calc(-10% + ${idx * 25}px)`,
				}}
				className="w-[900px] h-[500px] relative rounded-3xl p-5"
			>
				<h1 className="text-black text-xl font-bold text-center">
					{title}
				</h1>
				<div className="flex items-center justify-between px-10 py-10">
					<p className=" text-black text-sm w-[40%] pl-10">
						{description}
					</p>
					<div className=" w-[60%] flex justify-end overflow-hidden  rounded-2xl">
						<motion.div
							style={{
								scale: imageScale,
							}}
							className="w-full h-full rounded-2xl"
						>
							<Image
								src={`/images/${src}`}
								alt={title}
								width={"400"}
								height={"250"}
								className="object-cover w-full h-[350px]"
								priority
							></Image>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default page;
