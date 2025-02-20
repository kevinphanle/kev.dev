import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
}

export function ProjectItem({ project }: Props) {
  const { title, description, stack, source, image } = project;
  return (
    <li>
      <Card>
        <CardHeader>
          {image && (
            <Link href={source || image}>
              <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="h-40 w-full object-cover object-top"
              />
            </Link>
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <p>{source}</p>
        </CardFooter>
      </Card>
    </li>
  );
}
