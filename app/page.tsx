import Hero from "@/components/hero";
import { experience, now, stack } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-2xl mx-auto flex h-14 items-center justify-between px-6">
          <span className="font-semibold text-sm tracking-tight dark:text-white">marioarranz.com</span>
          <nav className="flex items-center gap-5 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="#now" className="hover:text-foreground transition-colors">Now</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#writing" className="hover:text-foreground transition-colors">Writing</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-20">

        {/* Intro */}
        <section>
          <Hero />
        </section>

        {/* Now */}
        <section id="now">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Now <span className="font-normal normal-case tracking-normal text-neutral-400 dark:text-neutral-500">- {now.date}</span>
          </h2>
          <ul className="flex flex-col gap-2">
            {now.items.map((item, i) => (
              <li key={i} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pl-4 border-l border-border">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Projects
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Projects shipping soon. Each one will have a problem, stack, measured result, and link to the repo.
          </p>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {experience.map((item) => (
              <div key={item.company}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <span className="font-semibold text-sm dark:text-white">{item.company}</span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0">{item.period}</span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{item.role}</div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section id="writing">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Writing
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Posts will appear here as each project ships.
          </p>
        </section>

        {/* Stack */}
        <section id="stack">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Stack
          </h2>
          <ul className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="text-xs text-neutral-600 dark:text-neutral-300 border border-border rounded px-2 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

      </main>

      <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-border/40 text-xs text-neutral-400 dark:text-neutral-500">
        Mario Arranz - Zurich
      </footer>
    </div>
  );
}
