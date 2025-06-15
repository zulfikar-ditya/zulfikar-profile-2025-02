import React from "react";
import aboutme from "../../app/mock/about-me.json";
import BlurText from "../reactbits/BlurText/BlurText";

export default function AboutMe() {
	const aboutME = aboutme.AboutMe;
	return (
		<>
			<div className="bg-gray-900">
				<section
					className="container mx-auto px-4 py-12 min-h-[50vh] flex flex-col justify-center"
					id="about-me"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
						<div className="my-auto">
							<BlurText
								text="About Me."
								delay={150}
								animateBy="words"
								direction="top"
								// onAnimationComplete={}
								className="text-6xl font-bold"
							/>
						</div>
						<div className="">
							<BlurText
								text={aboutME}
								delay={150}
								animateBy="words"
								direction="top"
								// onAnimationComplete={}
								className="text-base font-normal"
							/>
							{/* <p>{aboutME}</p> */}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
