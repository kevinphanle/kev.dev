export default function About({ about }) {
  return (
    <section className="my-9 text-sm">
      <h3 className="mb-1 text-md font-semibold">About</h3>
      <div className="text-muted-foreground">
        {about.split("\n").map((paragraph: string, index: number) => (
          <p key={index} className="mb-4 text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
