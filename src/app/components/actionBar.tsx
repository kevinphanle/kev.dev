import React from "react";
import { socialData } from "@/data/socials";

export const ActionBar = () => {
  return (
    <div>
      <ul className="flex space-x-4">
        {socialData.map((social, index) => (
          <li key={index} className="text-muted-foreground">
            <a href={social.url}>{social.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
