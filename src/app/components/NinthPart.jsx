import VacancyCard from "./UI/VacancyCard";
import { VacancyData } from "../constants/VacancyData";

export default function NinthPart() {
	return (
		<div className="pb-10 md:px-10">
			<h1 className="text-3xl md:text-5xl font-bold my-5">
				Open vacancies
			</h1>
			<div className="flex flex-col md:flex-row gap-4">
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
