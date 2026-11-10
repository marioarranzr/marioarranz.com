import type { Metadata } from "next";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Crypto trading bot - Mario Arranz",
  description:
    "A low-latency trading bot in Go that traded recurring, liquidity-driven price spikes on Kraken and Hyperliquid between 2020 and 2023.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

const stack = ["Go", "Goroutines", "WebSockets", "Kraken API", "Hyperliquid"];

export default function TradingBot() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-2xl mx-auto flex h-14 items-center justify-between px-6">
          <a href="/" className="font-semibold text-sm tracking-tight dark:text-white">
            marioarranz.com
          </a>
          <nav className="flex items-center gap-5 text-sm text-neutral-500 dark:text-neutral-400">
            <a href="/#projects" className="hover:text-foreground transition-colors">
              ← Projects
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-14 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 tabular-nums">2020 - 2023 · personal project, own capital</p>
          <h1 className="text-2xl font-semibold tracking-tight dark:text-white">Crypto trading bot</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            A low-latency bot that caught short-lived, repeating price spikes in low-liquidity tokens and traded every
            repetition. It ran first on Kraken and later on decentralized venues such as Hyperliquid, and it was
            profitable until 2023.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((t) => (
              <span
                key={t}
                className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/80 border border-border rounded px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <Section title="What it did">
          <p>
            In thin markets, a sudden injection of liquidity often pushed the price up sharply, and the same spike then
            repeated almost identically several times within seconds. These moves happened at millisecond scale, far
            too fast for a human to react to.
          </p>
          <p>
            The bot watched the market over WebSockets. It used the first spike to learn the pattern: where the price
            started and where it topped out. From the second repetition on, it bought near the low and sold near the
            high each time the pattern came back. Some events gave 10 to 12 round trips.
          </p>
        </Section>

        <figure className="flex flex-col gap-2">
          <div className="border border-border rounded-lg overflow-hidden bg-[#0b0e14]">
            <Image
              src="/images/trading-bot-chart.png"
              alt="Price chart of a low-liquidity token with repeated spikes of around 25 to 30 percent, with buy markers at the bottom and sell markers at the top of each spike"
              width={377}
              height={380}
              className="mx-auto"
            />
          </div>
          <figcaption className="text-xs text-neutral-500 dark:text-neutral-400">
            One event: repeated spikes of roughly +25% to +30% in a single token. Green markers are entries, red markers
            are exits.
          </figcaption>
        </figure>

        <Section title="How it was built">
          <p>
            Written in Go, mainly for its cheap concurrency: each market feed ran in its own goroutine, so detecting a
            pattern and placing orders never blocked each other. There was no database. Everything lived in memory,
            because the useful window was a few milliseconds and anything slower was worthless.
          </p>
        </Section>

        <Section title="Risk and market impact">
          <p>
            These were thin markets, so my own orders could move the price and kill the pattern I was trading. I capped
            every position at about 5% of the incoming liquidity. That kept the size of the strategy small, but it
            kept the pattern intact and the fills predictable.
          </p>
        </Section>

        <Section title="Why it stopped working">
          <p>
            From 2023 the market had much more liquidity. Short-term fluctuations became smaller and less repeatable,
            and the edge disappeared, so I stopped running it. Knowing when a strategy has stopped working is part of
            running one.
          </p>
        </Section>

        <hr className="border-border/60" />

        <a href="/#projects" className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
          ← Back to projects
        </a>
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
