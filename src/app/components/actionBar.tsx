import React from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Socials from "./Socials";

export const ActionBar = () => {
  return (
    <section className="flex items-center">
      <Button variant="outline" className="mr-4">
        <a href="#" className="flex items-center space-x-1 ">
          <span>Resume</span>
          <FileDown size={16} />
        </a>
      </Button>
      <Socials />
    </section>
  );
};
