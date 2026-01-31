"use client";

import Image from "next/image";
import { AnimatedBeamMultipleOutputs } from "@/components/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BlurIn from "@/components/magicui/blur-in";
import { EmailForm } from "@/components/email-form";
import { FadeIn } from "@/components/magicui/fade-in";
import GlobeAndStars from "@/components/globe-and-stars";
import Hero from "@/components/hero";
import Marquee from "@/components/magicui/marquee";
import Technologies from "@/components/technologies";
import { ThemeToggle } from "@/components/theme-toggle";
import Orbit from "@/components/orbit";
import RetroGrid from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";
import { defaultDomains } from "@/lib/data";
import { RippleCard } from "./ui/ripper-card";
import { motion } from "framer-motion";
import ProjectPosts from "@/components/project-posts";
import Particles from "@/components/magicui/particles";
import { WarpBackground } from "@/components/ui/warp-background";

const features = [
  {
    Icon: "",
    name: "",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <Particles
          className="absolute inset-0 z-0"
          quantity={50}
          ease={100}
          color="#ffffff"
          staticity={30}
        />
        <div
          id="hero"
          className="absolute right-0 top-0 h-full w-full border-none transition-all duration-300 ease-out z-10"
        >
          <Hero />
        </div>

        <div className="absolute right-0 top-0 z-50">
          <FadeIn direction="down">
            <ThemeToggle />
          </FadeIn>
        </div>
      </>
    ),
  },
  {
    Icon: "",
    name: "I'm Mario",
    description:
      "backend engineer focused on platform reliability, APIs, and pragmatic AI integrations.",
    className: "col-span-3 md:col-span-1",
    href: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://marioarranz.com",
    cta: "Visit portfolio",
    background: (
      <div>
        <div className="absolute right-0 top-0 h-3/4 w-full border-none [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)]">
          <BlurIn duration={0.5} className="group-hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              className="object-cover object-center h-full w-full"
              src={
                process.env.NEXT_PUBLIC_AVATAR_URL ||
                "https://github.com/marioarranzr.png"
              }
              alt="avatar image"
              width={200}
              height={200}
              priority // Load image immediately
              quality={75} // Adjust quality for optimization
              placeholder="blur" // Placeholder to improve perceived performance
              blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
            />
          </BlurIn>
        </div>

        <FadeIn
          direction="right"
          framerProps={{
            show: { transition: { delay: 1.5 } },
          }}
        >
          <button
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="absolute top-2 right-2 bg-background rounded-lg px-4 py-2 text-xs text-neutral-500 dark:text-neutral-300 max-w-3/4 w-fit hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full animate-pulse ${
                  process.env.NEXT_PUBLIC_AVAILABLE_FOR_FREELANCE == "true"
                    ? "bg-emerald-400"
                    : "bg-yellow-400"
                }`}
              ></div>
              <div className="">
                {process.env.NEXT_PUBLIC_AVAILABLE_FOR_FREELANCE == "true"
                  ? "available"
                  : "on engagement"}
              </div>
            </div>
          </button>
        </FadeIn>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Tech Domain",
    description: "Backend, platform, and AI workflows focused on reliable delivery.",
    href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/marioarranzr",
    cta: "View projects",
    className: "col-span-3 md:col-span-3",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Marquee
          className="absolute h-2/3 top-10 [--duration:40s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] w-full"
          pauseOnHover
        >
          {defaultDomains.map((f, idx) => (
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/marioarranzr"}
              key={idx}
              className={cn(
                "relative w-40 h-full cursor-pointer overflow-hidden rounded-xl border p-4 hover:-translate-y-1",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-lg font-bold dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </a>
          ))}
        </Marquee>
      </motion.div>
    ),
  },
  {
    Icon: "",
    name: "Technologies",
    description:
      "A combination of proven backend tools and modern cloud platforms to build reliable systems.",
    href: "/technologies",
    cta: "View all technologies",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute right-0 top-0 w-[80%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] md:[mask-image:linear-gradient(to_top,transparent_50%,#000_70%)] group-hover:-translate-y-5 group-hover:scale-105">
        <FadeIn direction="up">
          <Technologies />
        </FadeIn>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Seamless Deployments",
    description: "Shipping reliable releases with observability baked in.",
    className: "col-span-3 md:col-span-1",
    href: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://marioarranz.com",
    cta: "Learn more",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_25%,#000_70%)] group-hover:scale-105">
        <Orbit />
      </div>
    ),
  },
  {
    Icon: "",
    name: "AI Integrations",
    description:
      "LLM workflows, retrieval, automation, and safeguards for production systems.",
    href: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://marioarranz.com",
    cta: "Explore AI work",
    className: "col-span-3 md:col-span-2",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        <div className="absolute left-4 top-4 z-20 flex gap-2">
          <a
            href="https://openai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            OpenAI
          </a>
          <a
            href="https://www.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            Claude
          </a>
        </div>
        <Particles
          className="absolute inset-0 z-0"
          quantity={60}
          ease={70}
          color="#ffffff"
          staticity={35}
          size={0.4}
        />
        <AnimatedBeamMultipleOutputs className="absolute right-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] md:[mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 z-10 pointer-events-none" />
      </motion.div>
    ),
  },

  {
    Icon: "",
    name: "Worldwide Reach",
    description:
      "Deploying to any region on earth. From on-prem to the edge.",
    className: "col-span-3 md:col-span-1",
    href: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://marioarranz.com",
    cta: "See example",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 group-hover:-translate-y-4">
        <Particles
          className="absolute inset-0 z-0"
          quantity={80}
          ease={60}
          color="#ffffff"
          staticity={40}
          size={0.5}
        />
        <div className="relative z-10">
          <GlobeAndStars />
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Project Showcase",
    description:
      "A few recent backend, platform, and AI projects.",
    className: "col-span-3 md:col-span-3",
    href: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://marioarranz.com",
    cta: "View projects",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[102%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 transition-all duration-300">
              <div className="flex items-center gap-2">
                <ProjectPosts />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-3 md:row-span-2",
    href: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://marioarranz.com",
    cta: "",
    background: (
      <div
        id="contact-form"
        className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out"
      >
        <Particles
          className="absolute inset-0 z-0"
          quantity={30}
          ease={120}
          color="#ffffff"
          staticity={60}
          size={0.3}
        />
        <div className="absolute inset-0 z-50 flex justify-center items-center gap-5 p-5">
          <div className="max-w-sm w-full flex flex-col gap-2">
            <div className="text-5xl md:text-6xl font-semibold text-neutral-700 dark:text-neutral-300 w-full flex justify-start">
              <BlurIn duration={0.5} className="h-full">
                Let&apos;s connect.
              </BlurIn>
            </div>
            <div className="w-full flex justify-center text-neutral-500 dark:text-neutral-400">
              Leave your email to get the conversation started. I&apos;ll be in
              touch soon.
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              *Your email will never be shared with anyone.
            </div>
            <div className="">
              <EmailForm />
            </div>
          </div>
        </div>

        <RetroGrid />
      </div>
    ),
  },
];

export function Bento() {
  return (
    <>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
