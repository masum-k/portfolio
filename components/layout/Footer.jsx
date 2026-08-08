import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { personal, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-white"
          >
            Masum<span className="text-blue-500">.</span>
          </Link>

          <p className="mt-1 text-xs text-zinc-500">
            Full Stack Web Developer
          </p>
        </div>

        {/* <div className="flex items-center gap-5">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition-colors hover:text-white"
          >
            <FaGithub className="size-5" aria-hidden="true" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-blue-400"
          >
            Contact
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div> */}
      </div>

      <div className="mx-auto mt-7 max-w-7xl border-t border-white/6 pt-6">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}