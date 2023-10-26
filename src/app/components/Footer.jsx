export default function Footer() {
	return (
		<div className="mt-32 mb-10">
			<hr />
			<div className="flex flex-col justify-center items-center mt-10">
				<img src="logo.png" className="rounded-xl w-16 h-16" />
				<h3 className="text-3xl text-_darkPurple mt-2">ahead</h3>
				<div className="flex gap-20 mt-5">
					<div className="flex items-center gap-2">
						<img
							src="/location.png"
							className="w-8 bg-emerald-400 rounded-full p-1"
						/>
						<p className="text-sm">AugustBe 26, 10117 Berlin</p>
					</div>

					<div className="flex items-center gap-2">
						<img
							src="/mail.png"
							className="w-8 bg-emerald-400 rounded-full p-1"
						/>
						<p className="text-sm">AugustBe 26, 10117 Berlin</p>
					</div>
				</div>

				<img
					src="/app-store-badge.svg"
					className="h-32 w-32 cursor-pointer"
				/>

				<p className="text-gray-400 text-light text-xs">
					© 2022 Ahead app. All right reserved
				</p>
			</div>
		</div>
	);
}
