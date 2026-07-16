"use client";

type Experience = {
  role: string;
  company: string;
  start: string;
  end: string;
  description: Array<string>;
  tags: string[];
};

const experience: Experience = {
  role: "Software Engineer",
  company: "SVTECHSHANT PVT. LTD.",
  start: "Dec 2025",
  end: "May 2025",
  description: [
    "Contributed to a government-sector web application from requirement gathering to final submission.",
    "Successfully completed and delivered 3 fully functional web-based projects.",
    "Contributed to development, testing, and project documentation.",
  ],
  tags: ["PHP", "MySQL", "XAMPP", "FileZilla"],
};

export default function Experience() {
  return (
    <section id="experience" className="flex w-full justify-center mt-40">
      <div className="w-full max-w-5xl px-8 py-10">
        <div className="flex items-center gap-6">
          <h2 className="whitespace-nowrap text-4xl font-extrabold text-foreground">
            / experience
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-2xl font-extrabold text-foreground">
              {experience.role} —{" "}
              <span className="text-primary transition hover:text-primary-hover">
                {experience.company}
              </span>
            </h3>

            <span className="text-sm font-medium text-text-secondary mb-5">
              {experience.start} — {experience.end}
            </span>
          </div>

          <ul className="space-y-2">
            {experience.description.map((item, index) => (
              <li key={index} className="text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs uppercase tracking-widest text-text-secondary">
            {experience.tags.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
