import React from "react";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { ExperienceItem } from "@/app/components/experienceItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Experience = () => {
  return (
    <div>
      <section className="my-9 text-sm">
        <Tabs defaultValue="experience" className="w-full">
          <TabsList>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <div className="border rounded-xl bg-card text-card-foreground shadow">
              <ul className="ml-10 border-l">
                {experienceData.map((experience, index) => (
                  <ExperienceItem key={index} experience={experience} />
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="border rounded-xl bg-card text-card-foreground shadow">
              <ul className="ml-10 border-l">
                {educationData.map((education, index) => (
                  <ExperienceItem key={index} experience={education} />
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};
