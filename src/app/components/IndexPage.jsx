"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function IndexPage() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});
	return (
		<div className="mt-28" ref={ref}>
			<div className="bg-_purple h-[650px] rounded-3xl grid grid-cols-2 items-center relative overflow-hidden">
				<div className="px-14 mt-20">
					<h6 className="text-md text-black font-normal">
						Ahead app
					</h6>
					<motion.h1
						initial={{ x: -1000 }}
						animate={inView ? { x: 0 } : {}}
						transition={{ type: "tween", duration: 1 }}
						className="text-black text-7xl font-bold mt-5"
					>
						Master your life by mastering emotions
					</motion.h1>

					<div className="flex items-center gap-10">
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							animate={inView ? { y: 0, opacity: 100 } : {}}
							transition={{
								type: "tween",
								duration: 1,
								delay: 0.5,
							}}
						>
							<img
								src="/app-store-badge.svg"
								className="h-40 w-40 cursor-pointer"
							/>
						</motion.div>

						<div className="flex flex-col items-center">
							<div className="flex gap-1">
								<motion.img
									src="/star.png"
									className="h-6 w-6"
									initial={{ y: 100, opacity: 0 }}
									animate={
										inView ? { y: 0, opacity: 100 } : {}
									}
									transition={{
										type: "tween",
										duration: 1,
										delay: 0.6,
									}}
								/>
								<motion.img
									src="/star.png"
									className="h-6 w-6"
									initial={{ y: 100, opacity: 0 }}
									animate={
										inView ? { y: 0, opacity: 100 } : {}
									}
									transition={{
										type: "tween",
										duration: 1,
										delay: 0.65,
									}}
								/>
								<motion.img
									src="/star.png"
									className="h-6 w-6"
									initial={{ y: 100, opacity: 0 }}
									animate={
										inView ? { y: 0, opacity: 100 } : {}
									}
									transition={{
										type: "tween",
										duration: 1,
										delay: 0.7,
									}}
								/>
								<motion.img
									src="/star.png"
									className="h-6 w-6"
									initial={{ y: 100, opacity: 0 }}
									animate={
										inView ? { y: 0, opacity: 100 } : {}
									}
									transition={{
										type: "tween",
										duration: 1,
										delay: 0.75,
									}}
								/>
								<motion.img
									src="/star.png"
									className="h-6 w-6"
									initial={{ y: 100, opacity: 0 }}
									animate={
										inView ? { y: 0, opacity: 100 } : {}
									}
									transition={{
										type: "tween",
										duration: 1,
										delay: 0.8,
									}}
								/>
							</div>
							<motion.p
								className="text-xs mt-2 text-gray-500"
								initial={{ y: 100, opacity: 0 }}
								animate={inView ? { y: 0, opacity: 100 } : {}}
								transition={{
									type: "tween",
									duration: 1,
									delay: 1,
								}}
							>
								100+ AppStore reviews
							</motion.p>
						</div>
					</div>
				</div>
				<div>
					<img src="/mobile-image.png" className="w-[640px]" />
				</div>

				<div class="h-8 w-16 rounded-tl-full rounded-tr-full overflow-hidden absolute bottom-0 left-96 bg-_orange animate-pulse"></div>
				<div class="h-8 w-16 rotate-90 rounded-tl-full rounded-tr-full overflow-hidden absolute top-96 left-0 -ml-4 bg-_lightOrange"></div>
				<div class="h-8 w-32 -rotate-45 rounded-tl-full rounded-tr-full absolute -mt-5 top-0 left-56 bg-_green"></div>
				<div class="h-4 w-4 rounded-full overflow-hidden absolute top-36 left-[466px] bg-_orange z-10 animate-pulse"></div>
				<div class="h-12 w-12 rounded-full overflow-hidden absolute top-32 left-[450px] bg-_lightOrange animate-pulse"></div>
				<div class="h-4 w-12 rounded-t-full absolute top-24 left-[500px] bg-_green animate-spin"></div>
				<div class="h-8 w-8 rounded-full overflow-hidden absolute top-16 left-[600px] bg-_lightOrange animate-pulse"></div>
			</div>
		</div>
	);
}
