import { bioData } from "@/data/bio";

export default function About() {
  return (
    <section className="my-9 text-sm">
      <h3 className="mb-1">About</h3>
      <div className="text-muted-foreground">
        <p>{bioData.about}</p>
      </div>
    </section>
  );
}
