"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ThirdPart() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<div className="h-screen" ref={ref}>
			<div className="bg-_lightBrown rounded-3xl h-[600px] px-10 py-20 relative grid md:grid-cols-2">
				<div className="md:px-20">
					<p className="font-normal text-md my-5">
						Built out of frustration
					</p>
					<motion.h1
						className="text-3xl md:text-5xl font-bold my-5"
						initial={{ x: -1000, opacity: 0 }}
						animate={inView ? { x: 0, opacity: 100 } : {}}
						transition={{ type: "tween", duration: 1 }}
					>
						Meet the ahead app
					</motion.h1>

					<div className="hidden md:block bg-white w-20 md:w-60 md:ml-10 rounded-full md:p-4 p-2 border-8 md:border-[16px] border-gray-100">
						<img
							src="/purple_ghost.png"
							className="w-20 md:w-60 "
						/>
					</div>

					<div class="hidden md:block h-32 w-64 rotate-90 rounded-tl-full rounded-tr-full overflow-hidden absolute top-80 left-0 -ml-16 bg-_lightOrange"></div>
					<div class="hidden md:block h-4 w-4 rounded-full overflow-hidden absolute bottom-36 left-[466px] bg-_orange z-10"></div>
					<div class="hidden md:block h-12 w-12 rounded-full overflow-hidden absolute bottom-32 left-[450px] bg-_lightOrange"></div>
					<div class="hidden md:block h-4 w-16 rounded-t-full absolute bottom-48 left-[500px] bg-_green animate-spin"></div>
					<div class="hidden md:block h-10 w-10 rounded-full overflow-hidden absolute bottom-60 left-[550px] bg-pink-200 z-10"></div>
				</div>

				<motion.div
					className="md:px-16 mt-5 md:mt-40"
					initial={{ x: -1000, opacity: 0 }}
					animate={inView ? { x: 0, opacity: 100 } : {}}
					transition={{ type: "tween", duration: 1 }}
				>
					<p className="text-gray-500 text-lg md:text-2xl font-light">
						A personalized pocket coach that provides bite-sized,
						science-driven tools to boost emotional intelligence.
					</p>

					<p className="text-gray-500 text-lg md:text-2xl mt-5 font-light">
						Think of it as a pocket cheerleader towards a better,
						more fulfilling.
					</p>
				</motion.div>
				<img
					src="/flower.png"
					className="hidden md:block absolute top-4 right-20 animate-spin"
				/>
				<div class="hidden md:block h-4 w-16 rounded-t-full absolute top-32 right-32 bg-_green animate-spin"></div>
			</div>
		</div>
	);
}
