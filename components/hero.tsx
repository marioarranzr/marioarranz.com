import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight dark:text-white">
          Mario Arranz
        </h1>
        <p className="mt-3 text-base text-neutral-500 dark:text-neutral-400">
          Backend and platform engineer. Payments, AI in production, Zurich. 12+ years shipping systems end to end.
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <a
          href={
            process.env.NEXT_PUBLIC_GITHUB_URL ||
            "https://github.com/marioarranzr"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-4 w-4" />
          </Button>
        </a>
        <a
          href={
            process.env.NEXT_PUBLIC_LINKEDIN_URL ||
            "https://www.linkedin.com/in/marioarranz/"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-4 w-4" />
          </Button>
        </a>
        <a href="/cv/Mario_Arranz.pdf" download aria-label="Download CV">
          <Button variant="outline" size="icon" className="rounded-full">
            <Download className="h-4 w-4" />
          </Button>
        </a>
        <a href="mailto:marioarranzr@gmail.com">
          <Button variant="outline" size="sm" className="gap-2">
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
