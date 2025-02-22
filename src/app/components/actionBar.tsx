import React from "react";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Socials from "./Socials";

export const ActionBar = () => {
  return (
    <section className="flex items-center mb-10">
      <Button variant="outline" className="mr-4">
        <Link
          href="/Resume 2024.pdf"
          className="flex items-center gap-1 tracking-[0.5px]"
          target="_blank"
        >
          <span>Resume</span> <FileDown size={16} />
        </Link>
      </Button>
      <Socials />
    </section>
  );
};
