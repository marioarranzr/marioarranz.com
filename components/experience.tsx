import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { experience } from "@/lib/data";

const ExperienceCard = ({ item }: { item: (typeof experience)[number] }) => {
  return (
    <figure
      className={cn(
        "relative h-28 w-64 cursor-default overflow-hidden rounded-xl border p-4 shadow",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-baseline justify-between gap-2">
        <figcaption className="text-base font-semibold dark:text-white">
          {item.role}
        </figcaption>
      </div>
      <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {item.company} &middot; {item.period}
      </div>
      <blockquote className="mt-2 text-xs line-clamp-3 dark:text-white/80 font-thin">
        {item.body}
      </blockquote>
    </figure>
  );
};

export default function Experience() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:35s] h-full">
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
