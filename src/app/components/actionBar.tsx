import React from "react";
import Link from "next/link";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Socials from "./Socials";

export const ActionBar = () => {
  return (
    <section className="flex items-center mb-10">
      <Button className="mr-6">
        <Link
          href="/Resume 2024.pdf"
          className="flex items-center gap-1 tracking-[0.5px] text-[16px]"
          target="_blank"
        >
          <FileDown size={16} />
          <span>Resume</span>
        </Link>
      </Button>
      <Socials />
    </section>
  );
};
