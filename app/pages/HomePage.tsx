"use client";

import AboutMe from "@components/pages/Home/AboutMe";
import Awards from "@components/pages/Home/Award";
import Contact from "@components/pages/Home/Contact";
import Education from "@components/pages/Home/Education";
import Hero from "@components/pages/Home/Hero";
import Weapons from "@components/pages/Home/Weapons";
import WorkExperience from "@components/pages/Home/WorkExperience";

import Particles from "@components/reactbits/Particles/Particles";
import Ribbons from "@components/reactbits/Ribbons/Ribbons";

export function HomePage() {
	return (
		<>
			<div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[-1]">
				<Particles
					particleColors={[
						"#ef4444",
						"#f97316",
						"#f59e0b",
						"#eab308",
						"#84cc16",
						"#22c55e",
						"#10b981",
						"#14b8a6",
						"#06b6d4",
						"#0ea5e9",
						"#3b82f6",
						"#6366f1",
						"#8b5cf6",
						"#a855f7",
						"#d946ef",
						"#ec4899",
						"#f43f5e",
					]}
					particleCount={500}
					particleSpread={10}
					speed={0.4}
					particleBaseSize={150}
					moveParticlesOnHover={true}
					alphaParticles={true}
					disableRotation={false}
				/>
			</div>
			<div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0">
				<Ribbons
					baseThickness={9}
					colors={["#00bba7"]}
					speedMultiplier={0.39}
					maxAge={400}
					enableFade={true}
					enableShaderEffect={true}
				/>
			</div>

			<Hero />
			<AboutMe />
			<WorkExperience />
			<Weapons />
			<Awards />
			<Education />
			<Contact />
		</>
	);
}
