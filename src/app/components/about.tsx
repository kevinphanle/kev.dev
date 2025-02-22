export default function About() {
  return (
    <section className="my-9 text-sm">
      <h3 className="mb-1 text-2xl italic font-semibold ">about</h3>
      <div className="text-slate-700">
        <p className="mb-6 text-lg dark:text-slate-300">
          {" "}
          As a Frontend Developer with a unique background in hospitality, I
          bring a distinctive blend of resourcefulness and adaptability to
          building user-friendly interfaces and experiences.
        </p>

        <p className="text-lg dark:text-slate-300">
          Outside of coding, I enjoy volleyball{" "}
          <span className="inline-block hover:animate-bounce">🏐</span>,
          backpacking{" "}
          <span className="">
            <span className="inline-block hover:animate-walk">🥾</span>
            <span className="inline-block ml-[-5px] hover:animate-walk [animation-delay:0.5s]">
              🥾
            </span>
          </span>
          , playing video games{" "}
          <span className="inline-block hover:animate-controller">🎮</span>, and
          spending time with my dogs{" "}
          <span className="inline-block hover:animate-wag">🐕</span> (
          <span className="cursor-bert">Bert</span>,{" "}
          <span className="cursor-hank">Hank</span>, and{" "}
          <span className="cursor-lucy">Lucy</span>). I&apos;m always looking
          for opportunities to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
}
