import React from "react";

import weaponData from "@app/mock/skills.json";
import ScrollFloat from "@components/reactbits/ScrollFloat/ScrollFloat";
import WeaponItem from "@components/custom/Weapon/WeaponItem";

export default function Weapons() {
	const { languages, frameworks, databases, frontend, devOps, methodologies } =
		weaponData;
	return (
		<>
			<section
				className="container mx-auto px-4 py-8 lg:py-12 flex flex-col items-center justify-center"
				id="weapons"
			>
				<ScrollFloat
					animationDuration={2}
					ease="back.inOut(2)"
					scrollStart="center bottom+=50%"
					scrollEnd="bottom bottom-=40%"
					stagger={0.03}
					textClassName="text-center text-7xl font-bold mb-4"
				>
					Weapons
				</ScrollFloat>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8">
					<WeaponItem data={languages} title="Languages" />
					<WeaponItem data={frameworks} title="Frameworks" />
					<WeaponItem data={databases} title="Databases" />
					<WeaponItem data={frontend} title="Frontend" />
					<WeaponItem data={devOps} title="DevOps" />
					<WeaponItem data={methodologies} title="Methodologies" />
				</div>
			</section>
		</>
	);
}
