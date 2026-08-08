"use client";

import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation, personal, socials } from "@/lib/data";


export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const github = socials.find((social) => social.name === "GitHub");

  function getHref(href) {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }

    return href;
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="text-base font-semibold tracking-tight text-zinc-950 dark:text-white"
          >
            {personal.name}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={getHref(item.href)}
                className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            {github?.url && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="ml-1 inline-flex size-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                <FaGithub className="size-4" aria-hidden="true" />
              </a>
            )}

          
          </div>

          <div className="flex items-center gap-2 md:hidden">
            

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {isMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={getHref(item.href)}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  {item.label}
                </Link>
              ))}

              {github?.url && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  <FaGithub className="size-4" aria-hidden="true" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}