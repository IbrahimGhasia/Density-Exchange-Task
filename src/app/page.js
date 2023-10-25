import Image from "next/image";
import Header from "./components/Header";
import IndexPage from "./components/IndexPage";
import SecondPart from "./components/SecondPart";

export default function Home() {
	return (
		<div className="px-10">
			<Header />
			<IndexPage />
			<SecondPart />
		</div>
	);
}
