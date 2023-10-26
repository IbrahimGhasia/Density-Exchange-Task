"use client";

import { useState, useEffect } from "react";
import Vara from "vara";

export default function VaraText({ text }) {
	const [hasRunEffect, setHasRunEffect] = useState(false);

	useEffect(() => {
		var vara = new Vara(
			"#vara-container",
			"https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
			[
				{
					text: text,
					fontSize: 24,
					strokeWidth: 0.7,
				},
			]
		);
		console.log("i fire once");
	}, []);

	return <span id="vara-container" className="z-[20]"></span>;
}
