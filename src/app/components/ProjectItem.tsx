import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  const { title, description, stack, links, image } = project;
  const getIcon = (link: { icon: string }) => {
    switch (link.icon) {
      case "github":
        return (
          <Github
            name="github"
            className="size-4"
            aria-label="Link to Github repo"
          />
        );
      default:
        return (
          <ExternalLink
            name="external-link"
            className="size-4"
            aria-label="Link to project"
          />
        );
    }
  };
  return (
    <motion.li
      key={title}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <Card className="flex flex-col h-full">
        <CardHeader>
          {image && (
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
          )}
        </CardHeader>

        <CardContent className="flex flex-col gap-2 grow">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>

        <CardFooter className="flex flex-col items-start justify-between gap-4">
          {stack && stack.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {stack.toSorted().map((tag) => (
                <Badge
                  key={tag}
                  className="px-2 py-1 text-xs "
                  variant="secondary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-end gap-1">
              {links.toSorted().map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {getIcon(link)}{" "}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.li>
  );
}
