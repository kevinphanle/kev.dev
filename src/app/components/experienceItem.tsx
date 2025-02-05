import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ExperienceItemProps {
  experience: {
    company: string;
    title?: string;
    startDate: string;
    endDate: string;
    icon: {
      url: string;
      alt: string;
      bgColor: string;
    };
    location?: string;
    focus?: string;
  };
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <li className="relative ml-10 flex items-center p-4">
      <Link
        href="#"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <Avatar className="size-12 border">
          <AvatarImage
            alt={experience.icon.alt}
            src={experience.icon.url}
            className="object-contain bg-background p-2"
          />
          <AvatarFallback>{experience.icon.alt}</AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex flex-col justify-start gap-1 flex-1">
        <h4 className="text-lg">{experience.company}</h4>
        <p className="text-muted-foreground">{experience.title}</p>
        <p className="text-muted-foreground">{experience.focus}</p>
        <p className="text-muted-foreground">{experience.location}</p>
        <p className="text-muted-foreground">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
    </li>
  );
};
