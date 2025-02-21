"use client";

const navLinks = [
  { name: "Home", href: "top" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
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
        <ul className="flex gap-4 sm:gap-8">
          {navLinks.map(({ name, href }) => (
            <li key={name} className="nav-link">
              <button
                onClick={() => handleScroll(href)}
                className="cursor-pointer"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
