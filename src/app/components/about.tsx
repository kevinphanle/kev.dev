export default function About() {
  return (
    <section className="my-9 text-sm">
      <h3 className="mb-1 text-md font-semibold">About</h3>
      <div className="text-muted-foreground">
        {/* {about.split("\n").map((paragraph: string, index: number) => (
          <p
            key={index}
            className="mb-4 text-lg"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        ))} */}

        <p className="mb-4 text-lg">
          {" "}
          As a Frontend Developer with a unique background in hospitality, I
          bring a distinctive blend of resourcefulness and adaptability to
          building user-friendly interfaces and experiences.
        </p>

        <p className="mb-4 text-lg">
          Outside of coding, I enjoy volleyball 🏐, backpacking 🥾, playing
          video games 🎮, and spending time with my dogs 🐕 (
          <span className="cursor-bert">Bert</span>,{" "}
          <span className="cursor-hank">Hank</span>, and{" "}
          <span className="cursor-lucy">Lucy</span>). I&apos;m always looking
          for opportunities to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
}
