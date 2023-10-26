import VaraText from "../components/UI/VaraText";

export default function SeventhPart() {
	return (
		<div className="h-screen -mt-32 flex flex-col justify-center items-center">
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
		</div>
	);
}
