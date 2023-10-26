export default function SixthPart() {
	return (
		<div className="h-screen pt-32">
			<div className="bg-_lightBlue rounded-3xl h-[600px] px-10 py-20 relative">
				<h3 className="text-xl text-center">
					Let your friends, family, and co-workers (anonymously) rate
					your social skills.
				</h3>
				<h1 className="text-5xl text-center font-bold mt-5">
					Ever wondered what others think of you?
				</h1>

				<div className="flex justify-between mx-40 mt-10">
					<div className="flex flex-col items-center">
						<img src="/One.png" className="w-12 h-12" />
						<p className="text-sm text-gray-500 text-center">
							Answer questions on your social skills
						</p>
					</div>
					<div className="flex flex-col items-center">
						<img src="/Two.png" />
						<p className="text-sm text-gray-500 text-center">
							Let others anonymously answer the same <br />{" "}
							questions about you
						</p>
					</div>
					<div className="flex flex-col items-center">
						<img src="/Three.png" />
						<p className="text-sm text-gray-500 text-center">
							Find out where you and others see things <br /> the
							same way - and where not!
						</p>
					</div>
				</div>

				<div className="flex justify-center items-center mt-10">
					<div className="bg-white w-[750px] h-56 rounded-3xl">
						<div className="relative mt-28 mx-10">
							<div className="bg-gray-300 h-0.5 w-full absolute top-1/2 transform -translate-y-1/2"></div>
							<div className="flex justify-between items-center px-4">
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-violet-500"></div>
									<div className="absolute bottom-8 bg-violet-500 p-2 rounded-xl">
										<p className="text-white text-md">
											You
										</p>
									</div>
								</div>
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-sky-500"></div>
									<div className="absolute top-8 bg-sky-500 w-36 p-2 rounded-xl">
										<p className="text-white text-md text-center">
											Anonymonos 1
										</p>
									</div>
								</div>
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-yellow-500"></div>
									<div className="absolute bottom-8 bg-yellow-500 w-36 p-2 rounded-xl">
										<p className="text-white text-md text-center">
											Anonymonos 2
										</p>
									</div>
								</div>
								<div className="relative">
									<div className="w-4 h-4 rounded-full bg-green-500">
										<div className="absolute top-8 bg-green-500 w-36 p-2 rounded-xl">
											<p className="text-white text-md text-center">
												Anonymonos 3
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
