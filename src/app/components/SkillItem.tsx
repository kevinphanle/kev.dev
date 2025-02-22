import React from "react";
import { Skill } from "@/lib/schemas";
import Image from "next/image";

interface Props {
  skill: Skill[];
  title: string;
}
// className="px-2 flex items-center justify-center gap-[6px] py-1 text-[12px] font-medium rounded-md"
const SkillItem: React.FC<Props> = ({ title, skill }) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  function getDynamicIcon(iconUrl: string) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconUrl}`;
  }

  return (
    <section className="my-2">
      <h5 className="text-md font-semibold mb-2">{capitalizedTitle}</h5>
      <div className="flex flex-wrap gap-2">
        {skill.map((item: Skill, index: number) => (
          <li
            key={index}
            className="flex items-center justify-center text-sm rounded-md border shadow py-4 px-4 gap-1 transition-all hover:shadow-md  hover:animate-skill-hover "
          >
            {item.icon && (
              <Image
                src={getDynamicIcon(item.icon.url)}
                alt={item.name}
                width={20}
                height={20}
              ></Image>
            )}

            {item.name}
          </li>
        ))}
      </div>
    </section>
  );
};

export default SkillItem;
