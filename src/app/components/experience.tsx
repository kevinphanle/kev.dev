"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import { ExperienceItem } from "@/app/components/experienceItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Experience = () => {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;

  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div id="experience" className="py-10 border-y">
      <section className="text-sm">
        <Tabs
          defaultValue="experience"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="mb-2 grid w-full grid-cols-2">
            <TabsTrigger value="experience" className="tracking-[0.5px] italic">
              experience
            </TabsTrigger>
            <TabsTrigger value="education" className="tracking-[0.5px] italic">
              education
            </TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <TabsContent value="experience" forceMount>
                <motion.div
                  key="experience"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border rounded-xl bg-card text-card-foreground shadow overflow-hidden"
                >
                  <ul className="ml-10 border-l">
                    {career.map((careerItem, index) => (
                      <ExperienceItem
                        key={`career-${careerItem.company}-${index}`}
                        experience={careerItem}
                      />
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
            )}

            {activeTab === "education" && (
              <TabsContent value="education" forceMount>
                <motion.div
                  key="education"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border rounded-xl bg-card text-card-foreground shadow overflow-hidden"
                >
                  <ul className="ml-10 border-l">
                    {education.map((educationItem, index) => (
                      <ExperienceItem
                        key={`education-${educationItem.company}-${index}`}
                        experience={educationItem}
                      />
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>
      </section>
    </div>
  );
};
