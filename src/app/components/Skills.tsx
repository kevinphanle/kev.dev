import React from "react";
import { skills } from "@/data/skills.json";
import SkillItem from "./SkillItem";

type SkillCategory = keyof typeof skills;

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-start justify-start py-10 w-full border-b"
    >
      <h2 className="mb-1 text-2xl italic font-semibold">skills</h2>
      {(Object.keys(skills) as SkillCategory[]).map((key, index) => (
        <SkillItem key={index} title={key} skill={skills[key]} />
      ))}
    </div>
  );
};

export default Skills;
