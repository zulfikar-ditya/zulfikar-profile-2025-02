"use client";

import { useState } from "react";
import {
	Mail,
	Github,
	Linkedin,
	Instagram,
	Newspaper,
	MessageCircle,
	X,
	Download,
} from "lucide-react";
import MockProfile from "@app/mock/profile.json";

export default function FloatContact() {
	const [isOpen, setIsOpen] = useState(false);
	const profile = MockProfile;

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			href: `mailto:${profile.email}`,
			color: "bg-teal-500 hover:bg-teal-600",
		},
		{
			icon: Github,
			label: "GitHub",
			href: profile.githubUrl,
			color: "bg-gray-600 hover:bg-gray-700",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: profile.linkedinUrl,
			color: "bg-blue-600 hover:bg-blue-700",
		},
		{
			icon: Instagram,
			label: "Instagram",
			href: profile.instagramUrl,
			color: "bg-pink-500 hover:bg-pink-600",
		},
		{
			icon: Newspaper,
			label: "Medium",
			href: profile.mediumUrl,
			color: "bg-yellow-600 hover:bg-yellow-700",
		},
		{
			icon: Download,
			label: "Resume",
			href: profile.resumeUrl,
			color: "bg-purple-600 hover:bg-purple-700",
		},
	];

	return (
		<>
			{/* Desktop Version - Fixed Left Center */}
			<div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-3">
				{contactInfo.map((contact, index) => {
					const IconComponent = contact.icon;
					return (
						<a
							key={index}
							href={contact.href}
							target="_blank"
							rel="noopener noreferrer"
							className={`${contact.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative`}
							title={contact.label}
						>
							<IconComponent className="w-5 h-5" />
							{/* Tooltip */}
							<div className="absolute right-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
								{contact.label}
							</div>
						</a>
					);
				})}
			</div>

			{/* Mobile Version - Bottom Left with Expandable Menu */}
			<div className="md:hidden fixed bottom-6 right-6 z-50">
				{/* Contact Items */}
				<div
					className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
						isOpen
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4 pointer-events-none"
					}`}
				>
					{contactInfo.map((contact, index) => {
						const IconComponent = contact.icon;
						return (
							<a
								key={index}
								href={contact.href}
								target="_blank"
								rel="noopener noreferrer"
								className={`${contact.color} text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110`}
								style={{
									transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
								}}
							>
								<IconComponent className="w-5 h-5" />
							</a>
						);
					})}
				</div>

				{/* Toggle Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={`bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
						isOpen ? "rotate-45" : "rotate-0"
					}`}
				>
					{isOpen ? (
						<X className="w-6 h-6" />
					) : (
						<MessageCircle className="w-6 h-6" />
					)}
				</button>
			</div>
		</>
	);
}
