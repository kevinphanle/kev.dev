import Image from "next/image";
import { Bio } from "./components/bio";
import { bioData } from "@/data/bio";
import About from "./components/about";
import { Projects } from "./components/projects";
import { ActionBar } from "./components/actionBar";
import { Experience } from "./components/experience";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-xl px-6 py-20 font-light">
      <Header />
      <Bio bio={bioData} />
      <About />
      <ActionBar />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
