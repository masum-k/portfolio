import { Code2, Compass, Target } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const aboutCards = [
  {
    number: "01",
    title: "Why I Started",
    icon: Code2,
    accent: "blue",
    description:
      "I've always liked computers. I've been using them since I was very young, mostly because of video games. That early interest eventually turned into a desire to build things myself, and coding became a great way to create things digitally.",
  },
  {
    number: "02",
    title: "What I Enjoy",
    icon: Compass,
    accent: "purple",
    description:
      "I enjoy building things and solving problems. I started with web development, and I'm interested in exploring app development, UI/UX design, and graphic design as I continue learning.",
  },
  {
    number: "03",
    title: "Where I'm Going",
    icon: Target,
    accent: "green",
    description:
      "My goal is to become a skilled software engineer capable of building high-quality applications across multiple platforms. I'm currently focused on full-stack web development while gradually exploring mobile development, UI/UX, and graphic design.",
  },
];

const accentStyles = {
  blue: {
    icon: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
    glow: "group-hover:bg-blue-500/[0.06]",
    line: "bg-blue-500",
    number: "text-blue-400",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-400 ring-purple-500/20",
    glow: "group-hover:bg-purple-500/[0.06]",
    line: "bg-purple-500",
    number: "text-purple-400",
  },
  green: {
    icon: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    glow: "group-hover:bg-emerald-500/[0.06]",
    line: "bg-emerald-500",
    number: "text-emerald-400",
  },
};

export default function SectionAbout() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/8 px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.04),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              A developer who enjoys building{" "}
              <span className="text-blue-500">things.</span>
            </>
          }
          description="A little about how I got into programming, what I enjoy building, and where I want to go next."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {aboutCards.map((card) => {
            const Icon = card.icon;
            const styles = accentStyles[card.accent];

            return (
              <article
                key={card.number}
                className={`group relative overflow-hidden rounded-2xl border border-white/9 bg-zinc-950/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/16 ${styles.glow}`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/2 blur-3xl transition-all duration-500 group-hover:scale-150" />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl ring-1 ${styles.icon}`}
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    className={`font-mono text-xs font-semibold ${styles.number}`}
                  >
                    {card.number}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {card.description}
                  </p>
                </div>

                <div className="relative mt-8">
                  <div
                    className={`h-0.5 w-8 rounded-full ${styles.line} transition-all duration-500 group-hover:w-16`}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}