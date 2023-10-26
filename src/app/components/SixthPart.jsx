"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SixthPart() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<div className="h-screen" ref={ref}>
			<div className="bg-_lightBlue rounded-3xl h-[600px] px-5 md:px-10 py-10 md:py-20 relative">
				<h3 className="text-sm md:text-xl text-center">
					Let your friends, family, and co-workers (anonymously) rate
					your social skills.
				</h3>
				<h1 className="text-3xl md:text-5xl text-center font-bold mt-5">
					Ever wondered what others think of you?
				</h1>

				<div className="flex flex-col md:flex-row gap-y-5 justify-between md:mx-40 mt-5 md:mt-10">
					<motion.div
						className="flex flex-col items-center"
						initial={{ y: 100, opacity: 0 }}
						animate={inView ? { y: 0, opacity: 100 } : {}}
						transition={{ type: "tween", duration: 0.5 }}
					>
						<img src="/One.png" className="w-12 h-12" />
						<p className="text-sm text-gray-500 text-center">
							Answer questions on your social skills
						</p>
					</motion.div>
					<motion.div
						className="flex flex-col items-center"
						initial={{ y: 100, opacity: 0 }}
						animate={inView ? { y: 0, opacity: 100 } : {}}
						transition={{
							type: "tween",
							duration: 0.5,
							delay: 0.2,
						}}
					>
						<img src="/Two.png" />
						<p className="text-sm text-gray-500 text-center">
							Let others anonymously answer the same{" "}
							<br className="hidden md:block" /> questions about
							you
						</p>
					</motion.div>
					<motion.div
						className="flex flex-col items-center"
						initial={{ y: 100, opacity: 0 }}
						animate={inView ? { y: 0, opacity: 100 } : {}}
						transition={{
							type: "tween",
							duration: 0.5,
							delay: 0.4,
						}}
					>
						<img src="/Three.png" />
						<p className="text-sm text-gray-500 text-center">
							Find out where you and others see things{" "}
							<br className="hidden md:block" /> the same way -
							and where not!
						</p>
					</motion.div>
				</div>

				<div className="hidden md:flex justify-center items-center mt-10">
					<div className="bg-white w-[750px] h-56 rounded-3xl">
						<div className="relative mt-28 mx-10">
							<div className="bg-gray-300 h-0.5 w-full absolute top-1/2 transform -translate-y-1/2"></div>
							<div className="flex justify-between items-center px-4">
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-violet-500"></div>
									<motion.div
										className="absolute bottom-8 bg-violet-500 p-2 rounded-xl"
										initial={{ y: 10, opacity: 0 }}
										animate={
											inView ? { y: 0, opacity: 100 } : {}
										}
										transition={{
											type: "tween",
											duration: 0.5,
											delay: 1,
										}}
									>
										<p className="text-white text-md">
											You
										</p>
									</motion.div>
								</div>
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-sky-500"></div>
									<motion.div
										className="absolute top-8 bg-sky-500 w-36 p-2 rounded-xl"
										initial={{ y: 10, opacity: 0 }}
										animate={
											inView ? { y: 0, opacity: 100 } : {}
										}
										transition={{
											type: "tween",
											duration: 0.5,
											delay: 1.2,
										}}
									>
										<p className="text-white text-md text-center">
											Anonymonos 1
										</p>
									</motion.div>
								</div>
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-yellow-500"></div>
									<motion.div
										className="absolute bottom-8 bg-yellow-500 w-36 p-2 rounded-xl"
										initial={{ y: 10, opacity: 0 }}
										animate={
											inView ? { y: 0, opacity: 100 } : {}
										}
										transition={{
											type: "tween",
											duration: 0.5,
											delay: 1.4,
										}}
									>
										<p className="text-white text-md text-center">
											Anonymonos 2
										</p>
									</motion.div>
								</div>
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-green-500">
										<motion.div
											className="absolute top-8 bg-green-500 w-36 p-2 rounded-xl"
											initial={{ y: 10, opacity: 0 }}
											animate={
												inView
													? { y: 0, opacity: 100 }
													: {}
											}
											transition={{
												type: "tween",
												duration: 0.5,
												delay: 1.6,
											}}
										>
											<p className="text-white text-md text-center">
												Anonymonos 3
											</p>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
