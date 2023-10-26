"use client";

import Card from "../components/UI/Card";
import { cardData } from "../constants/CardData";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Mousewheel, Keyboard, Autoplay } from "swiper/modules";

export default function SecondPart() {
	return (
		<div className="h-screen pt-32">
			<div className="grid grid-cols-3 mx-20">
				<h3 className="text-3xl font-semibold">EQ beats IQ</h3>
				<p className="px-10 text-lg font-normal text-gray-600">
					People with high emotional intelligence (EQ) live more
					fulfilled lives. They tend to be happier and have healthier
					relationships
				</p>
				<p className="px-10 text-lg font-normal text-gray-600">
					They are more successful in thier pursuits and make for
					inspiring leaders. According to science, they earn $29k a
					year.
				</p>
			</div>

			<div className="mx-20 mt-20">
				<h1 className="text-5xl font-semibold">
					Does this sound familiar...
				</h1>

				<div className="">
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
