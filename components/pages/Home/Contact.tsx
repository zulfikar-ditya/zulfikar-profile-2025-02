import {
	Mail,
	MapPin,
	Instagram,
	Linkedin,
	Github,
	Newspaper,
} from "lucide-react";

import MockProfile from "@app/mock/profile.json";

export default function Contact() {
	const profile = MockProfile;

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: profile.email,
			href: `mailto:${profile.email}`,
			color: "text-teal-500",
		},
		{
			icon: MapPin,
			label: "Location",
			value: profile.location,
			href: null,
			color: "text-blue-500",
		},
		{
			icon: Github,
			label: "GitHub",
			value: profile.name,
			href: profile.githubUrl,
			color: "text-gray-400",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			value: profile.name,
			href: profile.linkedinUrl,
			color: "text-blue-400",
		},
		{
			icon: Instagram,
			label: "Instagram",
			value: profile.name,
			href: profile.instagramUrl,
			color: "text-pink-500",
		},
		{
			icon: Newspaper,
			label: "Medium",
			value: profile.name,
			href: profile.mediumUrl,
			color: "text-yellow-500",
		},
	];

	return (
		<footer className="bg-gray-800 py-16" id="contact">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12" data-aos="fade-up">
					<Mail className="w-16 h-16 text-teal-500 mx-auto mb-4" />
					<h2 className="text-4xl font-bold text-gray-300 mb-4">
						Get In Touch
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Feel free to reach out for collaborations, opportunities, or just to
						say hello!
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{contactInfo.map((contact, index) => {
						const IconComponent = contact.icon;
						return (
							<div
								key={index}
								className="bg-gray-900 p-6 rounded-lg text-center border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105"
								data-aos="fade-up"
								data-aos-delay={index * 100}
							>
								<IconComponent
									className={`w-8 h-8 ${contact.color} mx-auto mb-4`}
								/>
								<h3 className="text-lg font-semibold text-gray-300 mb-2">
									{contact.label}
								</h3>
								{contact.href ? (
									<a
										href={contact.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-teal-400 hover:text-teal-300 transition-colors duration-200 break-all"
									>
										{contact.value}
									</a>
								) : (
									<p className="text-gray-400">{contact.value}</p>
								)}
							</div>
						);
					})}
				</div>

				<div className="mt-16 max-w-2xl mx-auto" data-aos="fade-up">
					<p className="">
						Thank you for visiting my portfolio! If you have any questions or
						just want to connect, feel free to reach out through any of the
						above channels. I look forward to hearing from you!
					</p>
				</div>
			</div>
		</footer>
	);
}
