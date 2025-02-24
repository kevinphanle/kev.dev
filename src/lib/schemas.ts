import { z } from "zod";

export const bio = z.object({
  avatar: z.string(),
  name: z.string(),
  description: z.string(),
  jobTitle: z.string(),
  location: z.string(),
  contacts: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    })
  ),
});

export const bioSchema = z.object({ bio: bio });
export type Bio = z.infer<typeof bio>;

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
    link: z.string().optional(),
  }),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  info: z.array(z.string()),
  type: z.string(),
});
export type Experience = z.infer<typeof experience>;

export const education = z.object({
  icon: z.object({
    url: z.string(),
    alt: z.string(),
    bgColor: z.string(),
    link: z.string().optional(),
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

export const skill = z.object({
  name: z.string(),
  icon: z.object({
    url: z.string(),
    alt: z.string(),
    bgColor: z.string(),
  }),
});

export const skillsSchema = z.object({
  skills: z.object({
    languages: z.array(skill),
    tools: z.array(skill),
    frontend: z.array(skill),
    backend: z.array(skill),
  }),
});
export type Skill = z.infer<typeof skill>;
