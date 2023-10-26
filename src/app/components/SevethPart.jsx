import VaraText from "../components/UI/VaraText";

export default function SeventhPart() {
	return (
		<div className="h-screen mt-32 flex flex-col items-center">
			<h4 className="text-md font-light">We take privacy seriously</h4>
			<h2 className="text-3xl font-bold my-4">Before you get started</h2>
			<p className="text-xl text-center font-normal text-gray-600">
				`We won{"'"}t share your answers with anyone (and won{"'"}t tell
				<br />
				you which friends said what about you)`
			</p>

			<div className="text-md mt-2 flex items-center gap-5">
				<p className="ml-44">with love,</p>
				<div className="mt-2.5">
					<VaraText text="Team ahead" />
				</div>
			</div>

			<button className="my-5 py-3 px-8 bg-black text-white text-lg rounded-full">
				Start a test
			</button>

			<p className="text-gray-600 font-light text-sm">
				Takes only 5 minutes
			</p>
		</div>
	);
}
