import { socialData } from "@/data/socials";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Socials() {
  function getIcon(name: string) {
    switch (name) {
      case "GitHub":
        return <Github />;
      case "LinkedIn":
        return <Linkedin />;
      case "Email":
        return <Mail />;
      default:
        return null;
    }
  }
  return (
    <div className="flex gap-4">
      {socialData.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          <span className="sr-only">{social.name}</span>
          {getIcon(social.name)}
        </a>
      ))}
    </div>
  );
}
