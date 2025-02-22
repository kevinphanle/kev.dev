import Image from "next/image";
import React from "react";

interface BioProps {
  bio: {
    name: string;
    description: string;
    avatar: string;
    jobTitle: string;
    location: string;
    about: string;
    contacts: {
      label: string;
      value: string;
    }[];
  };
}

export function Bio({ bio }: BioProps) {
  return (
    <section className="flex items-center">
      <Image
        alt="author"
        src={bio.avatar}
        width={80}
        height={80}
        className="rounded-full object-cover size-[80px]"
      />

      <div className="ml-4 flex-1">
        <h1 className="inter-400 mb-0.5 text-5xl">Hey, I&apos;m {bio.name}</h1>
        <p className="text-muted-foreground">
          {bio.jobTitle} based in {bio.location}
        </p>
      </div>
    </section>
  );
}
