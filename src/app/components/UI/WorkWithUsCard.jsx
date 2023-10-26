export default function WorkWithUsCard({ title, desc }) {
	return (
		<div className={`my-20 rounded-3xl h-56 w-96 bg-white p-10`}>
			<h4 className={`text-xl font-bold text-black`}>{title}</h4>
			<p className={`text-md font-normal mt-3 text-gray-600`}>{desc}</p>
		</div>
	);
}
