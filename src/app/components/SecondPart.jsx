"use client";

import Card from "../components/UI/Card";
import { cardData } from "../constants/CardData";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Mousewheel, Keyboard, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SecondPart() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	const path =
		"M500 500 C 250 700, 300 300, 500 300 C 700 300, 750 700, 500 500";

	return (
		<div className="h-screen pt-32" ref={ref}>
			<div className="grid grid-cols-3 mx-20">
				<motion.h3
					className="text-3xl font-semibold"
					initial={{ x: -1000, opacity: 0 }}
					animate={inView ? { x: 0, opacity: 100 } : {}}
					transition={{ type: "tween", duration: 1 }}
				>
					EQ beats IQ
				</motion.h3>
				<motion.p
					className="px-10 text-lg font-normal text-gray-600"
					initial={{ x: -1000, opacity: 0 }}
					animate={inView ? { x: 0, opacity: 100 } : {}}
					transition={{ type: "tween", duration: 1, delay: 0.5 }}
				>
					People with high emotional intelligence (EQ) live more
					fulfilled lives. They tend to be happier and have healthier
					relationships
				</motion.p>
				<motion.p
					className="px-10 text-lg font-normal text-gray-600"
					initial={{ x: -1000, opacity: 0 }}
					animate={inView ? { x: 0, opacity: 100 } : {}}
					transition={{ type: "tween", duration: 1, delay: 0.7 }}
				>
					They are more successful in thier pursuits and make for
					inspiring leaders. According to science, they earn $29k a
					year.
				</motion.p>
			</div>

			<div className="mx-20 my-20">
				<div className="flex gap-5 items-center">
					<motion.h1
						className="text-5xl font-semibold"
						initial={{ x: -1000, opacity: 0 }}
						animate={inView ? { x: 0, opacity: 100 } : {}}
						transition={{ type: "tween", duration: 1 }}
					>
						Does this sound familiar...
					</motion.h1>

					<img src="/purple_ghost.png" className="w-20" />
				</div>

				<div>
					<Swiper
						slidesPerView={3}
						cssMode={true}
						spaceBetween={0}
						centeredSlides={false}
						mousewheel={true}
						keyboard={true}
						autoplay={{
							delay: 1500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay, Mousewheel, Keyboard]}
					>
						{cardData.map((data, index) => (
							<SwiperSlide key={index}>
								<Card
									title={data.title}
									emoji={data.emoji}
									desc={data.desc}
									bgColor={data.bgColor}
									textColor={data.textColor}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}
