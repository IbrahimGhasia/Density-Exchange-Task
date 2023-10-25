export default function Card({ bgColor, textColor, emoji, title, desc }) {
	return (
		<div
			className={`my-20 rounded-3xl h-52 w-96 ${bgColor} py-5 px-8 hover:-rotate-12 duration-300`}
		>
			<h1 className="text-5xl my-3">{emoji}</h1>
			<h4 className={`text-xl font-bold ${textColor}`}>{title}</h4>
			<p className={`text-sm font-normal mt-2 ${textColor}`}>{desc}</p>
		</div>
	);
}
