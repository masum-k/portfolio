"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { personal, socials } from "@/lib/data";

import {
  ArrowUpRight,
  MapPin,
  Send,
} from "lucide-react";

export default function SectionContact() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const github = socials.find(
    (social) => social.name === "GitHub",
  );

  const linkedin = socials.find(
    (social) => social.name === "LinkedIn",
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to send your message right now.",
        );
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setForm({
        name: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-zinc-800/80 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-12">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            <span className="size-1.5 rounded-full bg-blue-500" />
            Get in touch
          </div>

          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Let&apos;s build something
            <br />
            <span className="text-blue-500">together.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Have a question, an opportunity, or simply want to say hello?
            Feel free to reach out. I&apos;m always open to interesting
            conversations and new opportunities.
          </p>

          {/* Contact cards */}
          <div className="mt-8 space-y-2">
            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <MapPin className="size-5 text-blue-500" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-200">
                  {personal.location}
                </p>
              </div>
            </div>

            {/* GitHub */}
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-4 transition hover:border-zinc-700 hover:bg-zinc-900/70"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <FaGithub className="size-5 text-zinc-200" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    masum-k
                  </p>
                </div>

                <ArrowUpRight className="size-4 text-zinc-500 transition group-hover:text-zinc-300" />
              </a>
            )}

            {/* LinkedIn */}
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-4 transition hover:border-zinc-700 hover:bg-zinc-900/70"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <FaLinkedin className="size-5 text-zinc-200" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-400">
                    Coming soon
                  </p>
                </div>

                <ArrowUpRight className="size-4 text-zinc-500 transition group-hover:text-zinc-300" />
              </a>
            )}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-white">
            Send a message
          </h3>

          <p className="mt-1 text-xs text-zinc-500">
            I&apos;ll get back to you as soon as I can.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            {/* Name + Subject */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium text-zinc-200"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  maxLength={100}
                  className="h-10 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 text-xs text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-zinc-200"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  required
                  maxLength={200}
                  className="h-10 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 text-xs text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium text-zinc-200"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a little about your message..."
                required
                maxLength={5000}
                rows={6}
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-3 text-xs leading-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
              />
            </div>

            {/* Status */}
            {status.message && (
              <p
                className={
                  status.type === "success"
                    ? "text-xs text-emerald-400"
                    : "text-xs text-red-400"
                }
              >
                {status.message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-xs font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}

              {!isSubmitting && (
                <Send className="size-3.5" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}