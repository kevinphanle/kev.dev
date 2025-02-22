import { Bio } from "./components/bio";
import bioData from "../data/bio.json";
import { bioSchema } from "../lib/schemas";
import About from "./components/about";
import { Projects } from "./components/projects";
import { ActionBar } from "./components/actionBar";
import { Experience } from "./components/experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function Home() {
  const bio = bioSchema.parse(bioData).bio;

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-5 font-light">
      <Header />
      <Bio bio={bio} />
      <About about={bio.about} />
      <ActionBar />
      <Experience />
      <Skills />

      <Projects />
      <Footer />
    </main>
  );
}
