import Link from "next/link";
import { navLinks } from "../constants/NavLinks";

export default function Header() {
	return (
		<div className="fixed top-0 left-0 right-0 z-10 bg-white">
			<div className="flex justify-between items-center px-20 py-6">
				<div>
					<img
						src="/logo.png"
						className="rounded-xl h-14 w-14 cursor-pointer"
					/>
				</div>

				<div className="flex gap-10 text-sm">
					{navLinks.map((link, index) => (
						<Link href={link.link} key={index}>
							{link.label}
						</Link>
					))}
				</div>

				<div>
					<button className="bg-black rounded-full px-8 py-4 text-white">
						Download app
					</button>
				</div>
			</div>
		</div>
	);
}
