import {
  Camera,
  Palette,
  ShieldCheck,
  Smartphone,
  Route,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { learning } from "@/lib/data";

const learningIcons = [
  Route,
  ShieldCheck,
  Smartphone,
  Palette,
  Camera,
];

export default function SectionLearning() {
  return (
    <section
      id="learning"
      className="relative overflow-hidden border-t border-white/8 px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.035),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Currently Exploring"
          title={
            <>
              Always learning,{" "}
              <span className="text-blue-500">always building.</span>
            </>
          }
          description="Technologies and areas I'm exploring as I continue growing as a developer."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {learning.map((item, index) => {
            const Icon = learningIcons[index];

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/9 bg-zinc-950/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.5)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 transition-all duration-300 group-hover:bg-blue-500/15 group-hover:ring-blue-500/30">
                    <Icon
                      className="size-5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-xs font-semibold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 min-h-12 text-base font-semibold leading-6 text-white">
                  {item.title}
                </h3>

                <div className="mt-7">
                  <div className="h-1 overflow-hidden rounded-full bg-zinc-800">
                    <div className="h-full w-1/3 rounded-full bg-blue-500 transition-all duration-700 group-hover:w-2/3" />
                  </div>

                  <p className="mt-3 text-xs font-medium text-blue-400">
                    Exploring
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}