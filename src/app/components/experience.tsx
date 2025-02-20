import React from "react";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import { ExperienceItem } from "@/app/components/experienceItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Experience = () => {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;

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
                {career.map((careerItem, index) => (
                  <ExperienceItem key={index} experience={careerItem} />
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="border rounded-xl bg-card text-card-foreground shadow">
              <ul className="ml-10 border-l">
                {education.map((educationItem, index) => (
                  <ExperienceItem key={index} experience={educationItem} />
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};
