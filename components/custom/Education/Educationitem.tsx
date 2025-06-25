interface EducationItemProps {
	institution: string;
	degree: string;
	duration: string;
	description?: string;
}

export default function EducationItem({
	institution,
	degree,
	duration,
	description,
}: EducationItemProps) {
	return (
		<div className="relative flex items-start mb-8" data-aos="fade-up">
			<div className="absolute left-6 w-4 h-4 bg-rose-500 rounded-full border-4 border-gray-800 shadow-lg z-10"></div>
			<div className="ml-16 bg-gray-900 rounded-lg shadow-2xl p-6 border-l-4 border-rose-500 w-full">
				<h3 className="text-xl font-bold text-gray-300 mb-2">{institution}</h3>
				<h4 className="text-lg font-semibold text-rose-300 mb-2">{degree}</h4>
				<p className="text-gray-400 mb-2">{duration}</p>
				{description && <p className="text-gray-500 text-sm">{description}</p>}
			</div>
		</div>
	);
}
