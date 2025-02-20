import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          {navLinks.map(({ name, href }) => (
            <li key={name} className="nav-link">
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
