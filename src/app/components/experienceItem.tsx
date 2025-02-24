import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ExperienceItemProps {
  experience: {
    company: string;
    title?: string;
    startDate: string;
    endDate?: string;
    icon: {
      url: string;
      alt: string;
      bgColor: string;
      link?: string;
    };
    location?: string;
    focus?: string;
    info?: string[];
    type?: string;
  };
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }
    let duration = "";

    if (years > 0) {
      duration += `${years} ${years === 1 ? "year" : "years"}`;
    }

    if (months > 0 || (months === 0 && years === 0)) {
      if (duration) duration += " ";
      duration += `${months} ${months === 1 ? "month" : "months"}`;
    }

    return `${duration}`;
  };

  return (
    <li className="relative ml-10 flex items-center p-4">
      <Link
        href={experience.icon.link || "#"}
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
      >
        <Avatar className="size-12 border">
          <AvatarImage
            alt={experience.icon.alt}
            src={experience.icon.url}
            loading="lazy"
            className="object-contain bg-white p-2"
          />
          <AvatarFallback>{experience.icon.alt}</AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex flex-col justify-start gap-1 flex-1">
        <h3 className="text-xl font-semibold leading-none">
          {experience.title}
        </h3>
        <p className="my-0 text-sm">
          {experience.company} {experience.type && ` ⋅ ${experience.type}`}
        </p>
        {experience.startDate && (
          <time className="text-xs text-muted-foreground">
            <span>{experience.startDate}</span>
            <span>{" - "}</span>
            <span>{experience.endDate ? experience.endDate : "Present"} </span>

            {!experience.focus && (
              <span className="inline-block text-muted-foreground">
                <span>{" ⋅ "}</span>
                {calculateDuration(experience.startDate, experience.endDate)}
              </span>
            )}
          </time>
        )}

        {experience.focus && (
          <p className="text-muted-foreground">{experience.focus}</p>
        )}

        <ul className="mt-4">
          {experience.info &&
            experience.info?.map((item, index) => (
              <li
                key={index}
                className="prose pr-8 mb-3 text-base dark:prose-invert"
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};
