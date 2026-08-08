export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <div
        className={`flex items-center gap-2 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="size-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-500">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}