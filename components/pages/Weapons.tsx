import React from "react";
import ScrollFloat from "../reactbits/ScrollFloat/ScrollFloat";
import weaponData from "../../app/mock/skills.json";
import SpotlightCard from "../reactbits/SpotlightCard/SpotlightCard";

export default function Weapons() {
	const { languages, frameworks, databases, frontend, devOps, methodologies } =
		weaponData;
	return (
		<>
			<section
				className="container mx-auto px-4 py-12 min-h-[50vh] flex flex-col justify-center items-center"
				id="weapons"
			>
				<ScrollFloat
					animationDuration={2}
					ease="back.inOut(2)"
					scrollStart="center bottom+=50%"
					scrollEnd="bottom bottom-=40%"
					stagger={0.03}
					textClassName="text-center text-6xl font-bold mb-4"
				>
					Weapons
				</ScrollFloat>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					<SpotlightCard>
						<h3 className="text-2xl font-semibold mb-4">Languages</h3>
						<ul className="list-disc pl-5">
							{languages.map((lang, index) => (
								<li key={index} className="text-lg">
									{lang}
								</li>
							))}
						</ul>
					</SpotlightCard>
					<SpotlightCard>
						<h3 className="text-2xl font-semibold mb-4">Frameworks</h3>
						<ul className="list-disc pl-5">
							{frameworks.map((framework, index) => (
								<li key={index} className="text-lg">
									{framework}
								</li>
							))}
						</ul>
					</SpotlightCard>
					<SpotlightCard>
						<h3 className="text-2xl font-semibold mb-4">Databases</h3>
						<ul className="list-disc pl-5">
							{databases.map((db, index) => (
								<li key={index} className="text-lg">
									{db}
								</li>
							))}
						</ul>
					</SpotlightCard>
					<SpotlightCard>
						<h3 className="text-2xl font-semibold mb-4">Frontend</h3>
						<ul className="list-disc pl-5">
							{frontend.map((item, index) => (
								<li key={index} className="text-lg">
									{item}
								</li>
							))}
						</ul>
					</SpotlightCard>
					<SpotlightCard>
						<h3 className="text-2xl font-semibold mb-4">DevOps</h3>
						<ul className="list-disc pl-5">
							{devOps.map((tool, index) => (
								<li key={index} className="text-lg">
									{tool}
								</li>
							))}
						</ul>
					</SpotlightCard>
					<SpotlightCard>
						<h3 className="text-2xl font-semibold mb-4">Methodologies</h3>
						<ul className="list-disc pl-5">
							{methodologies.map((method, index) => (
								<li key={index} className="text-lg">
									{method}
								</li>
							))}
						</ul>
					</SpotlightCard>
				</div>
			</section>
		</>
	);
}
