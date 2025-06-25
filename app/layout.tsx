import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexendFont = Lexend({
	subsets: ["latin"],
	variable: "--font-lexend",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Zulfikar Ditya - Backend Developer",
	description:
		"Experienced Backend Developer with a demonstrated history of working in the information technology and services industry.",
	keywords:
		"backend developer, backend engineer, software engineer, software developer, web developer, web engineer, fullstack developer, fullstack engineer, backend, backend development, backend programming, backend software engineer, backend software developer, backend web developer, backend web engineer, backend fullstack developer, backend fullstack engineer, backend software development, backend web development, backend fullstack development, backend software programming, backend web programming, backend fullstack programming, backend software development engineer, backend web development engineer, backend fullstack development engineer, backend software development developer, backend web development developer, backend fullstack development developer, backend software development programming, backend web development programming, backend fullstack development programming, Zulfikar Ditya, Zulfikar, Ditya",
	authors: {
		name: "Zulfikar Ditya",
		url: "https://github.com/zulfikar-ditya",
	},
	applicationName: "Zulfikar Ditya",
	category: "Software Development",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<meta
				content="SjlrZnBfF0NOO11lm4GExHQRf9UM87k4de9teOQxKKc"
				name="google-site-verification"
			></meta>

			<link rel="icon" href="favicon/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="favicon/safari-pinned-tab.svg"
				color="#14b8a6"
			/>
			<body
				className={`${lexendFont.variable} antialiased bg-gray-950 text-gray-50 selection:bg-teal-500 selection:text-gray-900 overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
