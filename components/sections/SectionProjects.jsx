import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "@/lib/data";

const statusStyles = {
  "In Progress": {
    dot: "bg-amber-400",
    text: "text-amber-400",
    border: "border-amber-500/20",
    background: "bg-amber-500/5",
  },

  Finished: {
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    background: "bg-emerald-500/5",
  },
};

export default function SectionProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/8 px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.04),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-500">
              Selected Work
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Things I&apos;ve{" "}
            <span className="text-blue-500">built.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            A selection of web applications I&apos;ve built while developing
            my full-stack skills.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const status =
              statusStyles[project.status] || statusStyles.Finished;

            return (
              <article
                key={project.slug}
                className={`group relative overflow-hidden rounded-2xl border border-white/9 bg-zinc-950/80 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/25 hover:shadow-[0_24px_90px_-35px_rgba(59,130,246,0.45)] ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Screenshot */}
                <div
                  className={`relative overflow-hidden border-b border-white/8 ${
                    project.featured
                      ? "aspect-16/8"
                      : "aspect-video"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes={
                      project.featured
                        ? "(max-width: 1024px) 100vw, 1200px"
                        : "(max-width: 1024px) 100vw, 600px"
                    }
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Screenshot overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/10" />

                  {/* Status */}
                  <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-md ${status.border} ${status.background} ${status.text}`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${status.dot}`}
                      />

                      {project.status}
                    </span>
                  </div>

                  {/* External arrow */}
                  <div className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20 group-hover:text-blue-300 sm:right-6 sm:top-6">
                    <ArrowUpRight
                      className="size-5 transition-transform duration-300 group-hover:rotate-45"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Project title over image */}
                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300/80">
                      {project.featured
                        ? "Featured Project"
                        : "Web Application"}
                    </span>

                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/8 bg-white/3 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-white/15 hover:text-zinc-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_8px_30px_-10px_rgba(59,130,246,0.8)]"
                    >
                      View Details

                      <ArrowUpRight
                        className="size-4"
                        aria-hidden="true"
                      />
                    </Link>

                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/4 hover:text-white"
                    >
                      <ExternalLink
                        className="size-4"
                        aria-hidden="true"
                      />

                      Live
                    </a>

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/4 hover:text-white"
                    >
                      <FaGithub
                        className="size-4"
                        aria-hidden="true"
                      />

                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}