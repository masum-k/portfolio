import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-zinc-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold">Project not found</h1>

          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const isInProgress = project.status === "In Progress";

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/0.08 px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
                    isInProgress
                      ? "border-amber-500/20 bg-amber-500/5 text-amber-400"
                      : "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      isInProgress ? "bg-amber-400" : "bg-emerald-400"
                    }`}
                  />

                  {project.status}
                </span>

                {project.featured && (
                  <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-medium text-zinc-400">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-400 hover:shadow-[0_10px_35px_-12px_rgba(59,130,246,0.8)]"
                >
                  Live Project
                  <ExternalLink className="size-4" />
                </a>

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:bg-white/4 hover:text-white"
                >
                  <FaGithub className="size-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Project screenshot */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30">
              <div className="absolute left-4 right-4 top-4 z-10 flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-yellow-400/80" />
                <span className="size-2.5 rounded-full bg-green-400/80" />
              </div>

              <div className="relative aspect-16/10">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top pt-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Left column */}
          <div className="space-y-6">
            {/* Overview */}
            <article className="rounded-2xl border border-white/9 bg-white/1.5 p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Overview
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                About the project
              </h2>

              <p className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base">
                {project.overview}
              </p>
            </article>

            {/* Challenges */}
            <article className="rounded-2xl border border-white/9 bg-white/1.5 p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Development
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Challenges
              </h2>

              <div className="mt-6 space-y-4">
                {project.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="flex gap-3 text-sm leading-7 text-zinc-400"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-blue-400" />

                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Right column */}
          <aside className="space-y-6">
            {/* Technologies */}
            <article className="rounded-2xl border border-white/9 bg-white/1.5 p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Technology
              </p>

              <h2 className="mt-3 text-xl font-bold">
                Built with
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-xs font-medium text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>

            {/* Status */}
            <article className="rounded-2xl border border-white/9 bg-white/1.5 p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Project Status
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span
                  className={`size-2 rounded-full ${
                    isInProgress
                      ? "bg-amber-400"
                      : "bg-emerald-400"
                  }`}
                />

                <span className="font-medium text-white">
                  {project.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.developmentStatus}
              </p>
            </article>
          </aside>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="border-t border-white/8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            Visit live site
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}