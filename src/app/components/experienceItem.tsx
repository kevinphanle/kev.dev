import React from "react";
import Image from "next/image";

interface ExperienceItemProps {
  experience: {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    icon: {
      url: string;
      alt: string;
      bgColor: string;
    };
  };
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <li className="relative ml-10 flex items-center space-x-4 p-4">
      <a
        href="#"
        className="absolute -left-16 flex items-center justify-center"
      >
        <Image
          alt={experience.icon.alt}
          width={50}
          height={50}
          src={experience.icon.url}
          className="rounded-full p-2 object-contain overflow-hidden"
          style={{ backgroundColor: experience.icon.bgColor }}
        />
      </a>

      <div className="flex-1 ml-10">
        <h4 className="text-lg">{experience.company}</h4>
        <p className="text-muted-foreground">{experience.title}</p>
        <p className="text-muted-foreground">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
    </li>
  );
};
