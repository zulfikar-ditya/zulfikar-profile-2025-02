import React from "react";
import SpotlightCard from "../../reactbits/SpotlightCard/SpotlightCard";

interface WeaponItemProps {
	title: string;
	data: string[];
}

export default function WeaponItem({ data, title }: WeaponItemProps) {
	return (
		<>
			<SpotlightCard data-aos="fade-up">
				<h3 className="text-2xl font-semibold mb-4">{title}</h3>
				<ul className="list-disc pl-5">
					{data.map((item, index) => (
						<li key={index} className="text-lg">
							{item}
						</li>
					))}
				</ul>
			</SpotlightCard>
		</>
	);
}
