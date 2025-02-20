import { z } from "zod";

export const project = z.object({
  title: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  links: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
      icon: z.string(),
    })
  ),
  image: z.string().optional(),
});

export const projectSchema = z.object({ projects: z.array(project) });
export type Project = z.infer<typeof project>;

export const experience = z.object({
  title: z.string(),
  icon: z.object({
    url: z.string(),
    alt: z.string(),
    bgColor: z.string(),
  }),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
});
export type Experience = z.infer<typeof experience>;

export const education = z.object({
  icon: z.object({
    url: z.string(),
    alt: z.string(),
    bgColor: z.string(),
  }),
  company: z.string(),
  focus: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string(),
});

export const careerSchema = z.object({ career: z.array(experience) });
export const educationSchema = z.object({ education: z.array(education) });

export const socialLink = z.object({
  name: z.string(),
  url: z.string(),
  icon: z.string(),
});
export const socialSchema = z.object({ socials: z.array(socialLink) });
