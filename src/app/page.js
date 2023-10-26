import Image from "next/image";
import Header from "./components/Header";
import IndexPage from "./components/IndexPage";
import SecondPart from "./components/SecondPart";
import ThirdPart from "./components/ThirdPart";
import FourthPart from "./components/FourthPart";
import FifthPart from "./components/FifthPart";
import SixthPart from "./components/SixthPart";

export default function Home() {
	return (
		<div className="px-10">
			<Header />
			<IndexPage />
			<SecondPart />
			<ThirdPart />
			<FourthPart />
			<FifthPart />
			<SixthPart />
		</div>
	);
}
