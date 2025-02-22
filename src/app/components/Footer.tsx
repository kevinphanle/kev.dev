"use client";

import Socials from "./Socials";
import { scrollToTop } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-10 sm:flex-row-reverse sm:justify-between">
      <Socials />
      <section>
        <p>
          <span>&copy; {new Date().getFullYear()} </span>
          <button onClick={scrollToTop}>kevinphanle.dev</button>
        </p>
      </section>
    </footer>
  );
}
