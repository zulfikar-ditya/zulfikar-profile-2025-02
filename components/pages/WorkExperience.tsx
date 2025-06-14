import React, { useEffect } from "react";
import TrueFocus from "../reactbits/TrueFocus/TrueFocus";
import workExperience from "../../app/mock/experiences.json";
import WorkExperienceItem from "../custom/WorkExperienceItem";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WorkExperience() {
	const experiences = workExperience;
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration
			once: true, // whether animation should happen only once
		});
	}, []);
	return (
		<>
			<section
				className="container mx-auto px-4 py-8 mt-20"
				id="work-experience"
			>
				<TrueFocus
					sentence="Work Experience"
					manualMode={false}
					blurAmount={5}
					borderColor="#00bba7"
					animationDuration={1.5}
					pauseBetweenAnimations={0.5}
				/>

				<div className="mt-12 max-w-4xl mx-auto">
					<div className="relative">
						<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
						<div className="space-y-12">
							{experiences.map((experience, index) => (
								<WorkExperienceItem
									key={index}
									title={experience.title}
									type={experience.type}
									date_start={experience.date_start}
									date_end={experience.date_end}
									company={experience.company}
									description={
										Array.isArray(experience.descriptions)
											? experience.descriptions.flat()
											: undefined
									}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
