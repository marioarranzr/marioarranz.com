import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import BlurIn from "@/components/magicui/blur-in";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] md:auto-rows-[22rem] grid-cols-3 md:grid-cols-6 grid-flow-row-dense gap-2 lg:gap-4 transition-all duration-300 ease-out",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  hideOverlayOnHover = false,
  compactText = false,
  staticOverlay = false,
}: {
  name?: string;
  className?: string;
  background?: ReactNode;
  Icon?: any;
  description?: ReactNode;
  href?: string;
  cta?: string;
  hideOverlayOnHover?: boolean;
  compactText?: boolean;
  staticOverlay?: boolean;
}) => (
  <BlurIn
    duration={0.1}
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
  >
    <div>{background}</div>
    <div
      className={cn(
        "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300",
        !staticOverlay && "group-hover:-translate-y-10",
        compactText ? "p-3" : "p-6",
        hideOverlayOnHover && "group-hover:opacity-0"
      )}
    >
      <div className={cn("flex flex-col", compactText ? "gap-1" : "gap-2")}>
        <div>
          {Icon !== "" ? (
            <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
          ) : (
            ""
          )}
        </div>

        <div className={cn("font-semibold text-neutral-700 dark:text-neutral-300", compactText ? "text-2xl" : "text-3xl")}>
          {name}
        </div>
      </div>
      <div className={cn("w-full text-neutral-500 dark:text-neutral-400 dark:drop-shadow", compactText && "text-sm")}>
        {description}
      </div>
    </div>

    {/*
      CTA links disabled for now. To re-enable, restore the block below.

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {href !== "" ? (
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto group/Arrow"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4 lg:group-hover/Arrow:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        ) : (
          ""
        )}
      </div>
    */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </BlurIn>
);

export { BentoCard, BentoGrid };
