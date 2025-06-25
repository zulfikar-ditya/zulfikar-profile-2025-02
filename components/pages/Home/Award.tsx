import { Award } from "lucide-react";

import MockAwards from "@app/mock/awards.json";
import AwardItem from "@components/custom/Award/AwardItem";

interface AwardData {
	title: string;
	year: string;
	description: string;
}

export default function Awards() {
	const awards: AwardData[] = MockAwards;

	return (
		<section className=" py-16" id="awards">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12" data-aos="fade-up">
					<Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
					<h2 className="text-4xl font-bold text-gray-300 mb-4">
						Awards & Recognition
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Achievements and recognition received throughout my professional
						journey
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					{awards.map((award, index) => (
						<AwardItem
							key={index}
							title={award.title}
							year={award.year}
							description={award.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
