import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col items-start justify-between h-full overflow-hidden p-6 z-50">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-left dark:text-white">
            Mario Arranz
          </h1>

          <p className="mt-3 text-base text-neutral-500 dark:text-neutral-400 lg:px-1 w-full">
            Backend and platform engineer. Payments, AI in production, Zurich. 12+ years shipping systems end to end.
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-2">
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
          </div>

          <a href="mailto:marioarranzr@gmail.com" className="w-full">
            <Button
              variant="default"
              size="lg"
              className="flex items-center justify-center gap-2 w-full"
            >
              <span>Email Me</span>
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
