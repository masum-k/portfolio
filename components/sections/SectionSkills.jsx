import {
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  BiLogoMongodb ,
  BiLogoTailwindCss ,
  BiLogoVisualStudio ,
} from "react-icons/bi";



import {
  SiExpress ,
  SiNextdotjs 
} from "react-icons/si";

import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

const categoryConfig = {
  Frontend: {
    icon: Code2,
    accent: "blue",
  },
  Backend: {
    icon: Server,
    accent: "purple",
  },
  Database: {
    icon: Database,
    accent: "green",
  },
  Tools: {
    icon: Wrench,
    accent: "amber",
  },
};

const skillIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": BiLogoTailwindCss ,

  "Node.js": FaNodeJs,
  "Express.js": SiExpress,

  MongoDB: BiLogoMongodb ,

  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code": BiLogoVisualStudio ,
  Figma: FaFigma,
};

const skillIconColors = {
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  JavaScript: "text-yellow-400",
  React: "text-cyan-400",
  "Next.js": "text-white",
  "Tailwind CSS": "text-cyan-400",

  "Node.js": "text-green-500",
  "Express.js": "text-zinc-300",

  MongoDB: "text-green-500",

  Git: "text-orange-500",
  GitHub: "text-white",
  "VS Code": "text-blue-400",
  Figma: "text-pink-400",
};

const accentStyles = {
  blue: {
    icon: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
    card:
      "hover:border-blue-500/30 hover:shadow-[0_20px_80px_-30px_rgba(59,130,246,0.5)]",
    pill:
      "border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/[0.06]",
    number: "text-blue-400",
    glow:
      "bg-blue-500/10 group-hover:bg-blue-500/[0.16]",
  },

  purple: {
    icon: "bg-purple-500/10 text-purple-400 ring-purple-500/20",
    card:
      "hover:border-purple-500/30 hover:shadow-[0_20px_80px_-30px_rgba(168,85,247,0.5)]",
    pill:
      "border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/[0.06]",
    number: "text-purple-400",
    glow:
      "bg-purple-500/10 group-hover:bg-purple-500/[0.16]",
  },

  green: {
    icon: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
    card:
      "hover:border-emerald-500/30 hover:shadow-[0_20px_80px_-30px_rgba(16,185,129,0.5)]",
    pill:
      "border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/[0.06]",
    number: "text-emerald-400",
    glow:
      "bg-emerald-500/10 group-hover:bg-emerald-500/[0.16]",
  },

  amber: {
    icon: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
    card:
      "hover:border-amber-500/30 hover:shadow-[0_20px_80px_-30px_rgba(245,158,11,0.5)]",
    pill:
      "border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/[0.06]",
    number: "text-amber-400",
    glow:
      "bg-amber-500/10 group-hover:bg-amber-500/[0.16]",
  },
};

export default function SectionSkills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/8 px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.035),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Tools I use to turn ideas into{" "}
              <span className="text-blue-500">applications.</span>
            </>
          }
          description="My current development stack, organized by the areas I work with most."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((category) => {
            const config =
              categoryConfig[category.category] || categoryConfig.Frontend;

            const Icon = config.icon;
            const styles = accentStyles[config.accent];

            return (
              <article
                key={category.category}
                className={`group relative overflow-hidden rounded-2xl border border-white/9 bg-zinc-950/80 p-6 transition-all duration-500 hover:-translate-y-1 ${styles.card}`}
              >
                <div
                  className={`pointer-events-none absolute -bottom-24 -right-24 size-64 rounded-full blur-3xl transition-all duration-700 ${styles.glow}`}
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex size-14 items-center justify-center rounded-2xl ring-1 ${styles.icon}`}
                    >
                      <Icon
                        className="size-6"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {category.category}
                    </h3>
                  </div>

                  <span
                    className={`font-mono text-sm font-semibold ${styles.number}`}
                  >
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-8 flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill];
                    const iconColor =
                      skillIconColors[skill] || "text-zinc-300";

                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-2.5 rounded-xl border bg-black/20 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${styles.pill}`}
                      >
                        {SkillIcon && (
                          <SkillIcon
                            className={`size-5 shrink-0 ${iconColor}`}
                            aria-hidden="true"
                          />
                        )}

                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}