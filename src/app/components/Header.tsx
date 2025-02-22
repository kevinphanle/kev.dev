"use client";

import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "home", href: "top" },
  { name: "experience", href: "experience" },
  { name: "skills", href: "skills" },
  { name: "projects", href: "projects" },
];

export default function Header() {
  const handleScroll = (elementId: string) => {
    if (elementId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(elementId);

    if (element) {
      const offsetY = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-0 sm:gap-2">
          {navLinks.map(({ name, href }) => (
            <li key={name} className="nav-link">
              <Button
                variant="link"
                onClick={() => handleScroll(href)}
                className="cursor-pointer"
              >
                {name}
              </Button>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
