"use client";

import WorkWithUsCard from "../components/UI/WorkWithUsCard";
import { workWithUs } from "../constants/WorkWithUs";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Mousewheel, Keyboard, Autoplay } from "swiper/modules";

export default function EightPart() {
	return (
		<div className="h-screen">
			<div className="h-[640px] md:px-20 px-5 py-10 md:py-20 bg-_purple rounded-3xl">
				<div className="flex justify-between items-center">
					<h1 className="text-2xl md:text-5xl font-bold">
						Work with us
					</h1>
					<h1 className="text-2xl md:text-5xl font-normal text-_darkPurple">
						ahead
					</h1>
				</div>

				<div className="grid md:grid-cols-2 mt-5 items-center">
					<div className="h-fit md:h-[450px] md:w-[500px] bg-white rounded-3xl">
						<div className="px-5 md:px-10 py-5 md:py-10">
							<img
								src="/purple_ghost.png"
								className="w-12 h-12"
							/>

							<h1 className="text-black font-semibold text-xl mt-5">
								About
							</h1>

							<p className="text-gray-600 text-sm md:text-lg mt-3">
								At ahead our goal is to make self-improvement
								fun and lasting. We know there{"'"}s a way how
								to make it work. ANd that{"'"}s what ahead is
								all about!
							</p>
						</div>

						<div className="h-48 bg-_lightBrown rounded-3xl px-5 md:px-10 py-2">
							<h1 className="text-black font-semibold text-xl mt-5">
								Product
							</h1>

							<p className="text-gray-600 text-sm md:text-lg mt-3">
								Sure, you could spend ages reading books or
								sitting in seminars on how to become a better
								spouse, parent, or manager - like we did...
							</p>
						</div>
					</div>
					<div className="hidden md:flex ml-20">
						<Swiper
							direction="vertical"
							slidesPerView={2.5}
							cssMode={true}
							spaceBetween={180}
							centeredSlides={false}
							mousewheel={true}
							keyboard={true}
							autoplay={{
								delay: 1500,
								disableOnInteraction: false,
							}}
							modules={[Autoplay, Mousewheel, Keyboard]}
							className="h-[460px]"
						>
							{workWithUs.map((data, index) => (
								<SwiperSlide key={index}>
									<WorkWithUsCard
										title={data.title}
										desc={data.desc}
										bgColor={"bg-white"}
										textColor={"text-black"}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}
