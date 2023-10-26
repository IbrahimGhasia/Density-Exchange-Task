export default function ImprovementCard({ title, desc }) {
	return (
		<div className="mx-20">
			<h3 className="text-2xl font-bold my-2">{title}</h3>
			<p className="text-lg font-normal my-2">{desc}</p>
		</div>
	);
}
