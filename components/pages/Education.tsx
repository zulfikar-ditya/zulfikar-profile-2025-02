import { GraduationCap } from "lucide-react";
import EducationItem from "../custom/Educationitem";

import MockEducation from "../../app/mock/educations.json";

interface EducationData {
	institution: string;
	degree: string;
	duration: string;
	description?: string;
}

export default function Education() {
	const education: EducationData[] = MockEducation;

	return (
		<section className=" py-16" id="education">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12" data-aos="fade-up">
					<GraduationCap className="w-16 h-16 text-rose-500 mx-auto mb-4" />
					<h2 className="text-4xl font-bold text-gray-300 mb-4">Education</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						My educational background and continuous learning journey
					</p>
				</div>

				<div className="max-w-4xl mx-auto relative">
					{/* Timeline line */}
					<div className="absolute left-6 top-0 bottom-0 w-0.5 bg-rose-500"></div>

					{education.map((edu, index) => (
						<EducationItem
							key={index}
							institution={edu.institution}
							degree={edu.degree}
							duration={edu.duration}
							description={edu.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
