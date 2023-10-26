import VacancyCard from "./UI/VacancyCard";
import { VacancyData } from "../constants/VacancyData";

export default function NinthPart() {
	return (
		<div className="pb-10 px-10">
			<h1 className="text-5xl font-bold my-5">Open vacancies</h1>
			<div className="flex gap-4">
				{VacancyData.map((data, index) => (
					<VacancyCard
						key={index}
						title={data.title}
						role={data.role}
						location={data.location}
						salary={data.salary}
					/>
				))}
			</div>
		</div>
	);
}
