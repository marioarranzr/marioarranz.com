import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Image
          src={process.env.NEXT_PUBLIC_AVATAR_URL || "https://github.com/marioarranzr.png"}
          alt="Mario Arranz"
          width={64}
          height={64}
          className="rounded-full border border-border shrink-0"
          priority
        />
        <div>
          <h1 className="text-2xl font-semibold dark:text-white">Mario Arranz</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
            Backend & platform engineer - Zurich
          </p>
        </div>
      </div>

      <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
        12+ years building production systems in payments, digital identity, and AI.
        I focus on backend architecture, platform reliability, and shipping things end to end.
        Currently building AI tooling and exploring applied ML.
      </p>

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
