import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BioProps {
  bio: {
    name: string;
    description: string;
    avatar: string;
    jobTitle: string;
    location: string;
    contacts: {
      label: string;
      value: string;
    }[];
  };
}

export function Bio({ bio }: BioProps) {
  return (
    <section className="flex items-center">
      <Avatar className="w-[80px] h-[80px] ">
        <AvatarImage
          className="object-cover"
          src={bio.avatar}
          alt="Kevin Le headshot"
        />
        <AvatarFallback delayMs={600}>KL</AvatarFallback>
      </Avatar>

      <div className="ml-4 flex-1">
        <h1 className="inter-400 mb-0.5 text-2xl sm:text-4xl">
          Hey, I&apos;m {bio.name}
        </h1>
        <p className="block text-slate-500 dark:text-slate-300 text-lg sm:text-xl">
          {bio.jobTitle} based in {bio.location}
        </p>
      </div>
    </section>
  );
}
