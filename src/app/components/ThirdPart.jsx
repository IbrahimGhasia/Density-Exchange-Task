export default function ThirdPart() {
	return (
		<div className="h-screen pt-32">
			<div className="bg-_lightBrown rounded-3xl h-[600px] px-10 py-20 relative grid grid-cols-2">
				<div className="px-20">
					<p className="font-normal text-md my-5">
						Built out of frustration
					</p>
					<h1 className="text-5xl font-bold my-5">
						Meet the ahead app
					</h1>

					<div className="bg-white w-60 ml-10 rounded-full p-4 border-[16px] border-gray-100">
						<img src="/purple_ghost.png" className="w-60" />
					</div>

					<div class="h-32 w-64 rotate-90 rounded-tl-full rounded-tr-full overflow-hidden absolute top-80 left-0 -ml-16 bg-_lightOrange"></div>
					<div class="h-4 w-4 rounded-full overflow-hidden absolute bottom-36 left-[466px] bg-_orange z-10"></div>
					<div class="h-12 w-12 rounded-full overflow-hidden absolute bottom-32 left-[450px] bg-_lightOrange"></div>
					<div class="h-4 w-16 rounded-t-full absolute bottom-48 left-[500px] bg-_green animate-spin"></div>
					<div class="h-10 w-10 rounded-full overflow-hidden absolute bottom-60 left-[550px] bg-pink-200 z-10"></div>
				</div>

				<div className="px-16 mt-40">
					<p className="text-gray-500 text-2xl font-light">
						A personalized pocket coach that provides bite-sized,
						science-driven tools to boost emotional intelligence.
					</p>

					<p className="text-gray-500 text-2xl mt-5 font-light">
						Think of it as a pocket cheerleader towards a better,
						more fulfilling.
					</p>

					<img
						src="/flower.png"
						className="absolute top-4 right-20 animate-spin"
					/>
					<div class="h-4 w-16 rounded-t-full absolute top-32 right-32 bg-_green animate-spin"></div>
				</div>
			</div>
		</div>
	);
}
