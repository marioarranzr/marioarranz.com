"use client";

import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/magicui/fade-in";
import { Mail, Github, Linkedin } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col items-start justify-center h-full overflow-hidden p-6 z-50">
        <WordPullUp words="Let's Build" className="text-4xl md:text-5xl lg:text-6xl leading-tight text-left" />

        <div className="text-base text-neutral-500 dark:text-neutral-400 lg:px-1 w-full ">
          <BlurIn className="w-full">
            I take products from idea to production. Senior architecture, AI-accelerated delivery, and full ownership of the build. We ship fast without cutting corners.
          </BlurIn>

          <FadeIn direction="down" className="my-class flex items-center gap-2 w-full mt-8">
            <a
              href={
                process.env.NEXT_PUBLIC_GITHUB_URL ||
                "https://github.com/marioarranzr"
              }
              target="_blank"
              className="flex-1"
            >
              <Button
                variant="default"
                size="lg"
                className="flex items-center gap-2 w-full group/Github"
              >
                <div>GitHub</div>
                <Github className="h-5 w-5 lg:group-hover/Github:translate-x-1 transition-all duration-300" />
              </Button>
            </a>
            <a
              href={
                process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                "https://www.linkedin.com/in/marioarranz/"
              }
              target="_blank"
              className="flex-1"
            >
              <Button
                variant="default"
                size="lg"
                className="flex items-center gap-2 w-full group/LinkedIn"
              >
                <div>LinkedIn</div>
                <Linkedin className="h-5 w-5 lg:group-hover/LinkedIn:translate-x-1 transition-all duration-300" />
              </Button>
            </a>
              <Button
                variant="default"
                size="lg"
                className="flex items-center gap-2 w-full group/Mail"
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
