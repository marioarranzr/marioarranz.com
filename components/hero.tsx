"use client";

import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/magicui/fade-in";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col items-start justify-between h-full overflow-hidden p-6 z-50">
        <div className="w-full">
          <WordPullUp words="Let's Build" className="text-4xl md:text-5xl lg:text-6xl leading-tight text-left" />

          <div className="text-base text-neutral-500 dark:text-neutral-400 lg:px-1 w-full ">
            <BlurIn className="w-full">
              I take products from idea to production. Senior architecture, AI-accelerated delivery, and full ownership of the build. We ship fast without cutting corners.
            </BlurIn>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <FadeIn direction="down" className="flex items-center gap-2">
            <a
              href={
                process.env.NEXT_PUBLIC_GITHUB_URL ||
                "https://github.com/marioarranzr"
              }
              target="_blank"
              aria-label="GitHub"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full group/Github"
              >
                <Github className="h-4 w-4 lg:group-hover/Github:translate-x-0.5 transition-all duration-300" />
              </Button>
            </a>
            <a
              href={
                process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                "https://www.linkedin.com/in/marioarranz/"
              }
              target="_blank"
              aria-label="LinkedIn"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full group/LinkedIn"
              >
                <Linkedin className="h-4 w-4 lg:group-hover/LinkedIn:translate-x-0.5 transition-all duration-300" />
              </Button>
            </a>
            <a href="/cv/Mario_Arranz.pdf" download aria-label="Download CV">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full group/CV"
              >
                <Download className="h-4 w-4 lg:group-hover/CV:translate-y-0.5 transition-all duration-300" />
              </Button>
            </a>
          </FadeIn>

          <FadeIn direction="down" className="w-full">
            <Button
              variant="default"
              size="lg"
              className="flex items-center justify-center gap-2 w-full group/Mail"
              onClick={() => {
                const element = document.getElementById('contact-form');
                element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            >
              <div>Email Me</div>
              <Mail className="h-5 w-5 lg:group-hover/Mail:translate-x-1 transition-all duration-300" />
            </Button>
          </FadeIn>
        </div>
      </div>
      <MeteorShower />
    </div>
  );
}
