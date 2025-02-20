import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-4 sm:flex-row-reverse sm:justify-between">
      <Socials />
      <section>
        <p>
          <span>&copy; {new Date().getFullYear()} </span>
          <Link href="/">kevinphanle.dev</Link>
        </p>
      </section>
    </footer>
  );
}
