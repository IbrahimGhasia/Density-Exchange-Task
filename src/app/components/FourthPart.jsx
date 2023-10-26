"use client";

import Card from "../components/UI/Card";
import { cardData } from "../constants/CardData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function FourthPart() {
	return (
		<div className="h-screen pt-32">
			<p className="text-md font-light">
				Wront with self-improvement & how we{"'"}re fixing it.
			</p>
			<h1 className="text-5xl font-bold">Self-improvement. Ugh.</h1>
		</div>
	);
}
