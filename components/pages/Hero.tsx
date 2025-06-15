import React from "react";
import Link from "next/link";

import SplitText from "../reactbits/SplitText/SplitText";
import GradientText from "../reactbits/GradientText/GradientText";
import DecryptedText from "../reactbits/DecryptedText/DecryptedText";

import { Button } from "../ui/button";

import profile from "../../app/mock/profile.json";
import ProfileCard from "../reactbits/ProfileCard/ProfileCard";

function Hero() {
	return (
		<>
			<section className="min-h-screen container mx-auto px-4 py-20 w-screen flex flex-col items-start justify-center">
				<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
					<div className="flex flex-col items-start justify-center">
						<h2 className="text-xl font-bold mb-4">
							<SplitText
								text="Hello!!!"
								className=""
								delay={50}
								duration={1.2}
								ease="power3.out"
								splitType="chars"
								from={{ opacity: 0, y: 50 }}
								to={{ opacity: 1, y: 0 }}
								threshold={0.1}
								rootMargin="-100px"
								textAlign="center"
							/>
						</h2>
						<h1 className="text-7xl font-bold mb-4">
							<GradientText
								colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
								animationSpeed={5}
								showBorder={false}
								className=""
							>
								I am {profile.name}.
							</GradientText>
						</h1>

						<h2>
							<DecryptedText
								text={profile.title}
								animateOn="view"
								revealDirection="start"
								speed={120}
								maxIterations={20}
								parentClassName="text-3xl font-semibold mb-6"
								encryptedClassName="encrypted"
							/>
						</h2>

						<Link href="#about-me">
							<Button
								size={"lg"}
								variant="secondary"
								className="mt-6 cursor-pointer animate-bounce rounded-full shadow-2xl shadow-teal-400 hover:shadow-teal-500 transition-all duration-300 ease-in-out"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down color-teal-500 hover:color-teal-600 transition-all duration-300 ease-in-out"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 5l0 14" />
									<path d="M18 13l-6 6" />
									<path d="M6 13l6 6" />
								</svg>
							</Button>
						</Link>
					</div>
					<div>
						<ProfileCard
							name={profile.name}
							title="Backend Developer"
							handle="zulfikar-ditya"
							status="Available"
							contactText="Contact Me"
							avatarUrl="/images/octocat.png"
							iconUrl="/images/octocat.png"
							showUserInfo={true}
							showBehindGradient={true}
							// grainUrl=""
							enableTilt={true}
							onContactClick={() =>
								document
									.getElementById("contact-us")
									?.scrollIntoView({ behavior: "smooth" })
							}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
