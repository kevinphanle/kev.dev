import React from "react";
import { skills } from "@/data/skills.json";
import SkillItem from "./SkillItem";

type SkillCategory = keyof typeof skills;

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-start justify-start my-16 w-full"
    >
      <h2 className="text-primary mb-4 font-semibold">Skills</h2>
      {(Object.keys(skills) as SkillCategory[]).map((key, index) => (
        <SkillItem key={index} title={key} skill={skills[key]} />
      ))}
    </div>
  );
};

export default Skills;
