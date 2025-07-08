import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, buttonVariants } from "@/components/ui/button";
import "@testing-library/jest-dom";

// Mock the utils
jest.mock("@/lib/utils", () => ({
	cn: (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" "),
}));

describe("Button Component", () => {
	describe("Basic Rendering", () => {
		it("renders button with default props", () => {
			render(<Button>Click me</Button>);

			const button = screen.getByRole("button", { name: /click me/i });
			expect(button).toBeInTheDocument();
			expect(button).toHaveAttribute("data-slot", "button");
		});

		it("renders button with custom text", () => {
			render(<Button>Submit Form</Button>);

			const button = screen.getByRole("button", { name: /submit form/i });
			expect(button).toBeInTheDocument();
		});

		it("renders button as child element when asChild is true", () => {
			render(
				<Button asChild>
					<a href="/test">Link Button</a>
				</Button>,
			);

			const link = screen.getByRole("link", { name: /link button/i });
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute("href", "/test");
			expect(link).toHaveAttribute("data-slot", "button");
		});
	});

	describe("Variants", () => {
		it("applies default variant classes", () => {
			render(<Button>Default Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("bg-primary", "text-primary-foreground");
		});

		it("applies destructive variant classes", () => {
			render(<Button variant="destructive">Delete</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("bg-destructive", "text-white");
		});

		it("applies outline variant classes", () => {
			render(<Button variant="outline">Outline Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("border", "bg-background");
		});

		it("applies secondary variant classes", () => {
			render(<Button variant="secondary">Secondary Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("bg-secondary", "text-secondary-foreground");
		});

		it("applies ghost variant classes", () => {
			render(<Button variant="ghost">Ghost Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass(
				"hover:bg-accent",
				"hover:text-accent-foreground",
			);
		});

		it("applies link variant classes", () => {
			render(<Button variant="link">Link Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("text-primary", "underline-offset-4");
		});
	});

	describe("Sizes", () => {
		it("applies default size classes", () => {
			render(<Button>Default Size</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("h-9", "px-4", "py-2");
		});

		it("applies small size classes", () => {
			render(<Button size="sm">Small Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("h-8", "px-3");
		});

		it("applies large size classes", () => {
			render(<Button size="lg">Large Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("h-10", "px-6");
		});

		it("applies icon size classes", () => {
			render(<Button size="icon">🚀</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("size-9");
		});
	});

	describe("Custom Classes", () => {
		it("applies custom className", () => {
			render(<Button className="custom-class">Custom Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toHaveClass("custom-class");
		});

		it("merges custom className with variant classes", () => {
			render(
				<Button variant="destructive" className="custom-class">
					Custom Destructive
				</Button>,
			);

			const button = screen.getByRole("button");
			expect(button).toHaveClass(
				"custom-class",
				"bg-destructive",
				"text-white",
			);
		});
	});

	describe("Event Handling", () => {
		it("handles click events", async () => {
			const user = userEvent.setup();
			const handleClick = jest.fn();

			render(<Button onClick={handleClick}>Click Me</Button>);

			const button = screen.getByRole("button");
			await user.click(button);

			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it("handles keyboard events", () => {
			const handleKeyDown = jest.fn();

			render(<Button onKeyDown={handleKeyDown}>Press Me</Button>);

			const button = screen.getByRole("button");
			fireEvent.keyDown(button, { key: "Enter" });

			expect(handleKeyDown).toHaveBeenCalledTimes(1);
		});
	});

	describe("Accessibility", () => {
		it("supports aria-label", () => {
			render(<Button aria-label="Close dialog">×</Button>);

			const button = screen.getByLabelText("Close dialog");
			expect(button).toBeInTheDocument();
		});

		it("supports disabled state", () => {
			render(<Button disabled>Disabled Button</Button>);

			const button = screen.getByRole("button");
			expect(button).toBeDisabled();
		});

		it("supports aria-describedby", () => {
			render(
				<div>
					<Button aria-describedby="help-text">Submit</Button>
					<div id="help-text">This will submit the form</div>
				</div>,
			);

			const button = screen.getByRole("button");
			expect(button).toHaveAttribute("aria-describedby", "help-text");
		});
	});

	describe("HTML Attributes", () => {
		it("forwards HTML attributes to button element", () => {
			render(
				<Button id="test-button" data-testid="my-button" type="submit">
					Submit
				</Button>,
			);

			const button = screen.getByRole("button");
			expect(button).toHaveAttribute("id", "test-button");
			expect(button).toHaveAttribute("data-testid", "my-button");
			expect(button).toHaveAttribute("type", "submit");
		});
	});

	describe("Button Variants Function", () => {
		it("returns correct classes for default variant and size", () => {
			const classes = buttonVariants();
			expect(classes).toContain("bg-primary");
			expect(classes).toContain("text-primary-foreground");
			expect(classes).toContain("h-9");
			expect(classes).toContain("px-4");
		});

		it("returns correct classes for destructive variant", () => {
			const classes = buttonVariants({ variant: "destructive" });
			expect(classes).toContain("bg-destructive");
			expect(classes).toContain("text-white");
		});

		it("returns correct classes for small size", () => {
			const classes = buttonVariants({ size: "sm" });
			expect(classes).toContain("h-8");
			expect(classes).toContain("px-3");
		});

		it("combines variant and size classes", () => {
			const classes = buttonVariants({ variant: "outline", size: "lg" });
			expect(classes).toContain("border");
			expect(classes).toContain("bg-background");
			expect(classes).toContain("h-10");
			expect(classes).toContain("px-6");
		});
	});

	describe("Edge Cases", () => {
		it("handles empty children", () => {
			render(<Button></Button>);

			const button = screen.getByRole("button");
			expect(button).toBeInTheDocument();
			expect(button).toBeEmptyDOMElement();
		});

		it("handles complex children", () => {
			render(
				<Button>
					<span>Icon</span>
					<span>Text</span>
				</Button>,
			);

			const button = screen.getByRole("button");
			expect(button).toBeInTheDocument();
			expect(screen.getByText("Icon")).toBeInTheDocument();
			expect(screen.getByText("Text")).toBeInTheDocument();
		});

		it("handles null/undefined variant and size", () => {
			render(
				<Button variant={undefined} size={undefined}>
					Default Button
				</Button>,
			);

			const button = screen.getByRole("button");
			expect(button).toBeInTheDocument();
			expect(button).toHaveClass("bg-primary", "h-9");
		});
	});
});
