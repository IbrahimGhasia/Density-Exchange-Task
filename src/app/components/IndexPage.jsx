export default function IndexPage() {
	return (
		<div className="mt-28">
			<div className="bg-_purple h-[650px] rounded-3xl grid grid-cols-2 items-center relative overflow-hidden">
				<div className="px-14 mt-20">
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
								className="h-40 w-40 cursor-pointer"
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

				<div class="h-8 w-16 rounded-tl-full rounded-tr-full overflow-hidden absolute bottom-0 left-96 bg-_orange animate-pulse"></div>
				<div class="h-8 w-16 rotate-90 rounded-tl-full rounded-tr-full overflow-hidden absolute top-96 left-0 -ml-4 bg-_lightOrange"></div>
				<div class="h-8 w-32 -rotate-45 rounded-tl-full rounded-tr-full absolute -mt-5 top-0 left-56 bg-_green"></div>
				<div class="h-4 w-4 rounded-full overflow-hidden absolute top-36 left-[466px] bg-_orange z-10 animate-pulse"></div>
				<div class="h-12 w-12 rounded-full overflow-hidden absolute top-32 left-[450px] bg-_lightOrange animate-pulse"></div>
				<div class="h-4 w-12 rounded-t-full absolute top-24 left-[500px] bg-_green animate-spin"></div>
				<div class="h-8 w-8 rounded-full overflow-hidden absolute top-16 left-[600px] bg-_lightOrange animate-pulse"></div>
			</div>
		</div>
	);
}
