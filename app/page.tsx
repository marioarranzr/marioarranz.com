import Hero from "@/components/hero";
import { experience, now, projects, stack } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
      <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-2xl mx-auto flex h-14 items-center justify-between px-6">
          <span className="font-semibold text-sm tracking-tight dark:text-white">marioarranz.com</span>
          <nav className="flex items-center gap-5 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="#now" className="hover:text-foreground transition-colors hidden sm:block">Now</a>
            <a href="#projects" className="hover:text-foreground transition-colors hidden sm:block">Projects</a>
            <a href="#experience" className="hover:text-foreground transition-colors hidden sm:block">Experience</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-14 flex flex-col gap-16">

        <section>
          <Hero />
        </section>

        <hr className="border-border/60" />

        {/* Now */}
        <section id="now">
          <SectionLabel>Now - {now.date}</SectionLabel>
          <ul className="flex flex-col gap-3">
            {now.items.map((item, i) => (
              <li
                key={i}
                className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pl-4 border-l-2 border-emerald-500/40"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects">
          <SectionLabel>Projects</SectionLabel>
          <div className="flex flex-col gap-6">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border rounded-lg p-4 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {p.name}
                  </span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
                    ↗
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {p.problem}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/80 border border-border rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-emerald-600 dark:text-emerald-400">
                  {p.result}
                </p>
              </a>
            ))}
          </div>
        </section>

        <hr className="border-border/60" />

        {/* Experience */}
        <section id="experience">
          <SectionLabel>Experience</SectionLabel>
          <div className="flex flex-col">
            {experience.map((item, i) => (
              <div key={item.company} className="grid grid-cols-[20px_1fr] gap-x-4">
                <div className="flex flex-col items-center">
                  <div className={`w-px flex-none h-3 ${i === 0 ? "bg-emerald-500/60" : "bg-border"}`} />
                  <div className={`w-2 h-2 rounded-full shrink-0 ${i === 0 ? "bg-emerald-500" : "bg-neutral-300 dark:bg-neutral-600"}`} />
                  <div className={`w-px flex-1 min-h-4 ${i === experience.length - 1 ? "bg-transparent" : "bg-border"}`} />
                </div>
                <div className="pb-8">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <span className="font-semibold text-sm dark:text-white">{item.company}</span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0 tabular-nums">{item.period}</span>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 italic">{item.role}</div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border/60" />

        {/* Stack */}
        <section id="stack">
          <SectionLabel>Stack</SectionLabel>
          <ul className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="text-xs text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/80 border border-border rounded-md px-2.5 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

      </main>

      <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-border/40">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          Mario Arranz - Zurich -{" "}
          <a href="mailto:marioarranzr@gmail.com" className="hover:text-foreground transition-colors">
            marioarranzr@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
