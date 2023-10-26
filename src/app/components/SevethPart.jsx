"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import VaraText from "../components/UI/VaraText";

export default function SeventhPart() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<div className="h-screen mt-32 flex flex-col items-center" ref={ref}>
			<h4 className="text-md font-light">We take privacy seriously</h4>
			<h2 className="text-3xl font-bold my-4">Before you get started</h2>
			<p className="text-xl text-center font-normal text-gray-600">
				`We won{"'"}t share your answers with anyone (and won{"'"}t tell
				<br />
				you which friends said what about you)`
			</p>

			<div className="text-md mt-2 flex items-center gap-5">
				<p className="ml-44">with love,</p>
				<motion.div
					className="mt-2.5"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 100 } : {}}
					transition={{ type: "tween", duration: 0.2 }}
				>
					<VaraText text="Team ahead" />
				</motion.div>
			</div>

			<motion.button
				className="my-5 py-3 px-8 bg-black text-white text-lg rounded-full"
				initial={{ y: 10, opacity: 0 }}
				animate={inView ? { y: 0, opacity: 100 } : {}}
				transition={{ type: "tween", duration: 0.5, delay: 1 }}
			>
				Start a test
			</motion.button>

			<motion.p
				className="text-gray-600 font-light text-sm"
				initial={{ y: 10, opacity: 0 }}
				animate={inView ? { y: 0, opacity: 100 } : {}}
				transition={{ type: "tween", duration: 0.5, delay: 1.2 }}
			>
				Takes only 5 minutes
			</motion.p>
		</div>
	);
}
