"use client";

type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

type MiniProject = {
  name: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    name: "ContextifyAi",
    description:
      "A full-stack AI platform that converts company websites into structured business intelligence through automated crawling, content extraction, and LLM-powered analysis.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Gemini AI",
    ],
    liveUrl: "#",
    codeUrl: "https://github.com/khu5hii/contextify.ai",
  },
  {
    name: "WineOfTime",
    description:
      "A modern personal website that brings together blogs, projects, and personal stories through a clean, responsive interface and a calm, thoughtfully crafted user experience.",
    tags: ["React", "Javascript", "HTML5", "CSS3"],
    liveUrl: "https://wineoftime.vercel.app/",
    codeUrl: "https://github.com/khu5hii/wineoftime",
  },
  // {
  //   name: "xyz",
  //   description:
  //     "xyz.",
  //   tags: ["xyz", "xyz", "xyz"],
  //   liveUrl: "#",
  //   codeUrl: "#",
  // },
];

const miniProjects: MiniProject[] = [
  {
    name: "toonel",
    description: "Comic-style article website",
    url: "https://toonel.onrender.com/",
  },
  {
    name: "toscan",
    description: "AI Terms analyzer",
    url: "https://toscan.onrender.com/",
  },
  {
    name: "retrocast",
    description: "8-bit weather application",
    url: "https://retrocast.onrender.com/",
  },
  {
    name: "plannit",
    description: "Task planner app",
    url: "https://plannitapp.vercel.app/",
  },
  {
    name: "pixelporter",
    description: "Indie game portfolio",
    url: "https://pixelporter.vercel.app/",
  },
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-8 py-10 mt-20">
      <div className="flex items-center">
        <div className="flex flex-1 items-center gap-6">
          <h2 className="whitespace-nowrap text-4xl font-extrabold text-foreground">
            / projects
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <a
          href="#"
          className="ml-6 flex items-center gap-1.5 text-sm font-medium text-primary transition hover:text-primary-hover"
        >
          View all
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 divide-y divide-border">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex flex-col gap-3 py-8 first:pt-0 sm:flex-row sm:items-baseline sm:gap-10"
          >
            <h3 className="shrink-0 text-xl font-bold text-foreground sm:w-40">
              {project.name}
            </h3>

            <div className="flex-1">
              <p className="text-base leading-7 text-text-secondary">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="text-xs uppercase tracking-widest text-text-secondary">
                  {project.tags.join(" · ")}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-5">
                {project.liveUrl && (
                  <a
                    target="_blank"
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-sm font-medium text-primary transition hover:text-primary-hover"
                  >
                    View live
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    className="text-sm font-medium text-text-secondary transition hover:text-foreground"
                  >
                    View code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-6">
          <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-text-secondary">
            side projects
          </h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        <ul className="mt-6 grid gap-x-12 gap-y-5 sm:grid-cols-3">
          {miniProjects.map((mp) => (
            <li key={mp.name}>
              <a
                target="_blank"
                href={mp.url}
                className="group flex items-baseline justify-between gap-4"
              >
                <span>
                  <span className="text-base font-medium text-foreground transition group-hover:text-primary">
                    {mp.name}
                  </span>
                  <span className="ml-2 text-sm text-text-secondary">
                    — {mp.description}
                  </span>
                </span>
                <ArrowIcon className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-text-secondary opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
