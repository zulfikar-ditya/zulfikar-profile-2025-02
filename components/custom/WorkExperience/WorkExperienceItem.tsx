import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WorkExperienceItemProps {
	title: string;
	type: string;
	date_start: string;
	date_end: string;
	company: string;
	description?: string[];
	skills?: string[];
}

export default function WorkExperienceItem({
	title,
	type,
	date_start,
	date_end,
	company,
	description = [],
	skills = [],
}: WorkExperienceItemProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<>
			<div className="relative flex items-start" data-aos="fade-up">
				{/* Timeline dot */}
				<div className="absolute left-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>

				{/* Content */}
				<div className="ml-16 bg-gray-900 rounded-lg shadow-2xl border-l-4 border-[#00bba7] overflow-hidden">
					{/* Header - Always Visible */}
					<div
						className="p-6 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
						onClick={toggleExpanded}
					>
						<div className="flex items-center justify-between">
							<div className="flex-1">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
									<h3 className="text-xl font-bold text-gray-300">{title}</h3>
									<span className="">
										<div className="inline-block px-3 py-1 text-sm border border-teal-400 text-teal-500 rounded-full">
											{type}
										</div>
									</span>
								</div>

								<h4 className="text-lg font-semibold text-teal-300 mb-2">
									{company}
								</h4>

								<p className="text-gray-200">
									{date_start} - {date_end}
								</p>
							</div>

							{/* Expand/Collapse Icon */}
							<div className="ml-4 text-teal-400">
								{isExpanded ? (
									<ChevronUp className="w-6 h-6" />
								) : (
									<ChevronDown className="w-6 h-6" />
								)}
							</div>
						</div>
					</div>

					{/* Collapsible Content */}
					<div
						className={`transition-all duration-300 ease-in-out ${
							isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
						} overflow-hidden`}
					>
						<div className="p-6">
							{/* Descriptions */}
							{description.length > 0 && (
								<div>
									<h5 className="text-sm font-semibold text-teal-300 mb-3 uppercase tracking-wide">
										Key Achievements
									</h5>
									<ul className="space-y-2 text-gray-100">
										{description.map((item, index) => (
											<li key={index} className="flex items-start">
												<span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
												{item}
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Skills Section */}
							{skills.length > 0 && (
								<div className="mt-6">
									<h5 className="text-sm font-semibold text-teal-300 mb-3 uppercase tracking-wide">
										Technologies Used
									</h5>
									<div className="flex flex-wrap gap-2">
										{skills.map((skill, index) => (
											<span
												key={index}
												className="px-3 py-1 text-xs bg-gray-800 text-teal-300 border border-teal-600 rounded-full"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
