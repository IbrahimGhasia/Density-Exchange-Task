"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper/modules";
import { SelfImprovement } from "../constants/SelfImprovement";
import ImprovementCard from "./UI/ImprovementCard";

export default function FourthPart() {
	return (
		<div className="hidden md:block h-screen">
			<p className="text-md font-light">
				Wrong with self-improvement & how we{"'"}re fixing it.
			</p>
			<h1 className="mt-5 md:mt-0 text-3xl md:text-5xl font-bold">
				Self-improvement. Ugh.
			</h1>

			<div className="px-60 pt-10">
				<Swiper
					scrollbar={{
						hide: false,
					}}
					modules={[Scrollbar, Autoplay]}
					direction="vertical"
					slidesPerView={3}
					cssMode={true}
					spaceBetween={20}
					centeredSlides={false}
					className="h-[460px]"
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
					style={{
						"--swiper-scrollbar-bg-color": "rgb(237,235,252)",
						"--swiper-scrollbar-drag-bg-color": "rgb(96,66,230)",
						"--swiper-scrollbar-left": "20px",
					}}
				>
					{SelfImprovement.map((data, index) => (
						<SwiperSlide key={index}>
							<ImprovementCard
								title={data.title}
								desc={data.desc}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
