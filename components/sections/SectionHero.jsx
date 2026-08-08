import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal, socials, skills } from "@/lib/data";

const codeLines = [
  "const developer = {",
  '  name: "Masum Kamal",',
  '  role: "Full Stack Developer",',
  '  focus: ["Web", "UI/UX", "Apps"],',
  "};",
];

export default function SectionHero() {
  const github = socials.find((social) => social.name === "GitHub");
  const linkedin = socials.find((social) => social.name === "LinkedIn");

  const technologies = skills
    .flatMap((category) => category.skills)
    .filter((skill) => ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"].includes(skill));

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.16),transparent_35%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40 dark:opacity-30">
        <div className="code-grid absolute inset-0" />

        <div className="absolute left-[8%] top-[18%] hidden rounded-2xl border border-zinc-200/70 bg-white/60 p-5 shadow-xl backdrop-blur-sm lg:block dark:border-zinc-800/70 dark:bg-zinc-900/40">
          <div className="font-mono text-xs leading-6 text-zinc-500 dark:text-zinc-500">
            {codeLines.map((line, index) => (
              <div key={index}>
                <span className="mr-4 select-none text-zinc-300 dark:text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[18%] right-[8%] hidden rounded-2xl border border-zinc-200/70 bg-white/60 p-5 shadow-xl backdrop-blur-sm lg:block dark:border-zinc-800/70 dark:bg-zinc-900/40">
          <div className="font-mono text-xs leading-6 text-zinc-500 dark:text-zinc-500">
            <p>
              <span className="text-blue-500">$</span> npm run build
            </p>
            <p>
              <span className="text-green-500">✓</span> Ready for production
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            <span className="size-2 animate-pulse rounded-full bg-green-500" />
            Available for learning & building
          </div>

          <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">
            Hello, I&apos;m
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-8xl dark:text-white">
            {personal.name}
          </h1>

          <p className="mt-5 text-2xl font-semibold tracking-tight text-blue-600 sm:text-3xl dark:text-blue-400">
            {personal.designation}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
            Building fast, modern, and user-friendly web applications with
            React, Next.js, Node.js, and MongoDB.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={personal.resume.url}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Download Resume
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>

            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-zinc-100 sm:w-auto dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-white dark:hover:bg-zinc-800"
            >
              View Projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {github?.url && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <FaGithub className="size-4" aria-hidden="true" />
              </a>
            )}

            {linkedin?.url && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <FaLinkedin className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden border-y border-zinc-200/70 py-4 dark:border-zinc-800/70">
          <div className="tech-marquee flex w-max items-center gap-8">
            {[...technologies, ...technologies].map((technology, index) => (
              <span
                key={`${technology}-${index}`}
                className="whitespace-nowrap text-sm font-medium text-zinc-400 dark:text-zinc-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}