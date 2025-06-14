import React from "react";

interface WorkExperienceItemProps {
	title: string;
	type: string;
	date_start: string;
	date_end: string;
	company: string;
	description?: string[];
}

export default function WorkExperienceItem({
	title,
	type,
	date_start,
	date_end,
	company,
	description = [],
}: WorkExperienceItemProps) {
	return (
		<>
			<div className="relative flex items-start" data-aos="fade-up">
				{/* Timeline dot */}
				<div className="absolute left-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>

				{/* Content */}
				<div className="ml-16 bg-gray-900 rounded-lg shadow-2xl p-6 border-l-4 border-[#00bba7]">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
						<h3 className="text-xl font-bold text-gray-300">{title}</h3>
						<span className="inline-block px-3 py-1 text-sm border border-teal-400 text-teal-500 rounded-full">
							{type}
						</span>
					</div>

					<h4 className="text-lg font-semibold text-teal-300 mb-2">
						{company}
					</h4>

					<p className="text-gray-200 mb-4">
						{date_start} - {date_end}
					</p>

					<ul className="space-y-2 text-gray-100">
						{description.map((item, index) => (
							<li key={index} className="flex items-start">
								<span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
