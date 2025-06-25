"use client";

import Hero from "@/components/pages/Hero";
import AboutMe from "../../components/pages/AboutMe";
import Particles from "@/components/reactbits/Particles/Particles";
import Ribbons from "@/components/reactbits/Ribbons/Ribbons";
import WorkExperience from "@/components/pages/WorkExperience";
import Weapons from "@/components/pages/Weapons";
import Education from "@/components/pages/Education";
import Awards from "@/components/pages/Award";
import Contact from "@/components/pages/Contact";

export default function HomePage() {
	return (
		<>
			<div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[-1]">
				<Particles
					particleColors={["#00bba7", "#e60076", "#0084d1"]}
					particleCount={400}
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
