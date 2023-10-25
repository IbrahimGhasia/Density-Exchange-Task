export default function IndexPage() {
	return (
		<div className="mt-28">
			<div className="bg-_purple h-[650px] rounded-3xl grid grid-cols-2 items-center">
				<div className="px-10 mt-20">
					<h6 className="text-md text-black font-normal">
						Ahead app
					</h6>
					<h1 className="text-black text-7xl font-bold mt-5">
						Master your life by mastering emotions
					</h1>

					<div className="flex items-center gap-10">
						<div>
							<img
								src="/app-store-badge.svg"
								className="h-40 w-40"
							/>
						</div>

						<div className="flex flex-col items-center">
							<div className="flex gap-1">
								<img src="/star.png" className="h-6 w-6" />
								<img src="/star.png" className="h-6 w-6" />
								<img src="/star.png" className="h-6 w-6" />
								<img src="/star.png" className="h-6 w-6" />
								<img src="/star.png" className="h-6 w-6" />
							</div>
							<p className="text-xs mt-2 text-gray-500">
								100+ AppStore reviews
							</p>
						</div>
					</div>
				</div>
				<div>
					<img src="/mobile-image.png" className="w-[640px]" />
				</div>
			</div>
		</div>
	);
}
