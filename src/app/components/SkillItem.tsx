import React from "react";
// import { Skill } from "@/lib/schemas";
import Image from "next/image";

interface Skill {
  name: string;
  icon: {
    url: string;
    alt: string;
    bgColor: string;
  };
}

interface Props {
  skill: Skill[];
  title: string;
}

const SkillItem: React.FC<Props> = ({ title, skill }) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const sortedSkills = [...skill].sort((a, b) => a.name.localeCompare(b.name));

  function getDynamicIcon(iconUrl: string) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconUrl}`;
  }

  return (
    <section className="my-4">
      <h5 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
        {capitalizedTitle}
      </h5>
      <div className="flex flex-wrap gap-2">
        {sortedSkills.map((item: Skill, index: number) => (
          <li
            key={index}
            className="group flex items-center justify-center text-sm rounded-lg 
                       border border-slate-200 dark:border-slate-700
                       bg-white dark:bg-slate-800
                       shadow-skill dark:shadow-none
                       py-2 px-4 gap-2
                       transition-all duration-300 ease-in-out
                       hover:scale-110 hover:shadow-skill-hover
                       hover:border-slate-300 dark:hover:border-slate-600
                       cursor-pointer"
          >
            {item.icon && (
              <Image
                src={getDynamicIcon(item.icon.url)}
                alt={item.name}
                width={20}
                height={20}
                className="transition-transform duration-300"
              ></Image>
            )}

            <span className="font-medium text-slate-700 dark:text-slate-300">
              {item.name}
            </span>
          </li>
        ))}
      </div>
    </section>
  );
};

export default SkillItem;
