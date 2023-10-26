"use client";
import { useState } from "react";

export default function VacancyCard({ title, role, location, salary }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`rounded-3xl md:w-[450px] p-3 bg-_lightYellow hover:bg-orange-300 overflow-hidden transform hover:cursor-pointer transition-all duration-300 ease-in-out ${
				isHovered ? "h-72 md:h-64" : "md:h-44"
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="p-5">
				<h2 className="text-lg md:text-xl font-semibold">{title}</h2>
				<li className="text-sm md:text-md text-gray-800 my-2">
					{role}
				</li>
				<li className="text-sm md:text-md text-gray-800 my-2">
					{location}
				</li>
				<li className="text-sm md:text-md text-gray-800 my-2">
					{salary}
				</li>
			</div>
			{isHovered && (
				<div className="px-5 mb-2">
					<button className="bg-black hover:bg-gray-700 duration-300 text-white text-lg py-3 px-8 rounded-full">
						See Details
					</button>
				</div>
			)}
		</div>
	);
}
