interface AwardItemProps {
	title: string;
	year: string;
	description: string;
}

export default function AwardItem({
	title,
	year,
	description,
}: AwardItemProps) {
	return (
		<div
			className="bg-gray-900 rounded-lg shadow-2xl p-6 border-l-4 border-yellow-500 mb-4"
			data-aos="fade-up"
		>
			<div className="flex justify-between items-start mb-2">
				<h3 className="text-xl font-bold text-gray-300">{title}</h3>
				<span className="inline-block px-3 py-1 text-sm bg-yellow-500 text-gray-900 rounded-full font-semibold">
					{year}
				</span>
			</div>
			<p className="text-gray-400 leading-relaxed">{description}</p>
		</div>
	);
}
