import React from "react";
import skillsData from "@/data/skills.json";
import { skillsSchema } from "@/lib/schemas";
import SkillItem from "./SkillItem";

type SkillCategory = keyof typeof skillsData.skills;

const Skills: React.FC = () => {
  const skills = skillsSchema.parse(skillsData).skills;

  return (
    <div
      id="skills"
      className="flex flex-col items-start justify-start py-10 w-full border-b"
    >
      <h2 className="mb-1 text-2xl text-slate-800 dark:text-slate-200 italic font-semibold">
        skills
      </h2>
      {(Object.keys(skills) as SkillCategory[]).map((key, index) => (
        <SkillItem key={index} title={key} skill={skills[key]} />
      ))}
    </div>
  );
};

export default Skills;
