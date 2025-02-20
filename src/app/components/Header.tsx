export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          <li>
            <a href="#about" className="header-link">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="header-link">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="header-link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
