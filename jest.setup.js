// import "@testing-library/jest-dom";

// Mock Next.js modules
jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: jest.fn(),
		replace: jest.fn(),
		prefetch: jest.fn(),
		back: jest.fn(),
		forward: jest.fn(),
	}),
	usePathname: () => "/",
	useSearchParams: () => new URLSearchParams(),
}));

// Mock GSAP for tests
jest.mock("gsap", () => ({
	gsap: {
		timeline: jest.fn(() => ({
			set: jest.fn(),
			to: jest.fn(),
			kill: jest.fn(),
		})),
		fromTo: jest.fn(),
		registerPlugin: jest.fn(),
		killTweensOf: jest.fn(),
	},
	ScrollTrigger: {
		getAll: jest.fn(() => []),
	},
	SplitText: jest.fn(() => ({
		chars: [],
		words: [],
		lines: [],
		revert: jest.fn(),
	})),
}));

// Mock framer-motion for tests
jest.mock("framer-motion", () => ({
	motion: {
		div: ({ children, ...props }) => <div {...props}>{children}</div>,
		button: ({ children, ...props }) => <button {...props}>{children}</button>,
		span: ({ children, ...props }) => <span {...props}>{children}</span>,
		p: ({ children, ...props }) => <p {...props}>{children}</p>,
		h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
		h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
		h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
		section: ({ children, ...props }) => (
			<section {...props}>{children}</section>
		),
		article: ({ children, ...props }) => (
			<article {...props}>{children}</article>
		),
		nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
		header: ({ children, ...props }) => <header {...props}>{children}</header>,
		footer: ({ children, ...props }) => <footer {...props}>{children}</footer>,
		main: ({ children, ...props }) => <main {...props}>{children}</main>,
		aside: ({ children, ...props }) => <aside {...props}>{children}</aside>,
		ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
		li: ({ children, ...props }) => <li {...props}>{children}</li>,
		a: ({ children, ...props }) => <a {...props}>{children}</a>,
		img: ({ children, ...props }) => <img {...props}>{children}</img>,
		form: ({ children, ...props }) => <form {...props}>{children}</form>,
		input: ({ children, ...props }) => <input {...props}>{children}</input>,
		textarea: ({ children, ...props }) => (
			<textarea {...props}>{children}</textarea>
		),
		select: ({ children, ...props }) => <select {...props}>{children}</select>,
		option: ({ children, ...props }) => <option {...props}>{children}</option>,
		label: ({ children, ...props }) => <label {...props}>{children}</label>,
		fieldset: ({ children, ...props }) => (
			<fieldset {...props}>{children}</fieldset>
		),
		legend: ({ children, ...props }) => <legend {...props}>{children}</legend>,
		table: ({ children, ...props }) => <table {...props}>{children}</table>,
		thead: ({ children, ...props }) => <thead {...props}>{children}</thead>,
		tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
		tfoot: ({ children, ...props }) => <tfoot {...props}>{children}</tfoot>,
		tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
		th: ({ children, ...props }) => <th {...props}>{children}</th>,
		td: ({ children, ...props }) => <td {...props}>{children}</td>,
	},
	AnimatePresence: ({ children }) => children,
}));

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
	constructor() {}
	disconnect() {}
	observe() {}
	unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
	constructor() {}
	disconnect() {}
	observe() {}
	unobserve() {}
};
