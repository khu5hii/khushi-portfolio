type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Gemini AI"],
    image: "/images/contextifyai.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    name: "recipe-box",
    description:
      "A recipe manager with AI-assisted ingredient substitutions and a drag-and-drop weekly meal planner.",
    tags: ["React", "Node.js", "MongoDB", "OpenAI API"],
    image: "https://placehold.co/900x700",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    name: "studyflow",
    description:
      "A spaced-repetition study tool with shareable decks and progress analytics for exam prep.",
    tags: ["React", "Express", "MySQL"],
    image: "https://placehold.co/900x700",
    liveUrl: "#",
    codeUrl: "#",
  },
];

const miniProjects: MiniProject[] = [
  {
    name: "weather-now",
    description: "5-day forecast widget with geolocation",
    url: "#",
  },
  {
    name: "task-tally",
    description: "Minimal kanban board with local persistence",
    url: "#",
  },
  {
    name: "color-picker",
    description: "Palette generator with export to CSS vars",
    url: "#",
  },
  {
    name: "quiz-bot",
    description: "Trivia app with a Node/Express backend",
    url: "#",
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
    <section id="projects" className="mx-auto max-w-5xl px-8 py-10">
      <div className="flex items-center gap-6">
        <h2 className="whitespace-nowrap text-4xl font-extrabold text-foreground">
          / projects
        </h2>
        <div className="h-px max-w-60 flex-1 bg-border" />
        <a
          href="#"
          className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition hover:text-primary-hover"
        >
          View all
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-4">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1;

          return (
            <div key={project.name}>
              <div
                className={`flex flex-col gap-10 py-14 sm:gap-14 lg:items-center ${
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* <img
                  src={project.image}
                  alt={project.name}
                  className="h-56 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl  object-cover sm:h-72 lg:h-70 lg:w-100"
                /> */}

                <div className="max-w-xl">
                  <h3 className="text-3xl font-extrabold text-foreground">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-text-secondary">
                    {project.description}
                  </p>

                  <p className="mt-4 text-xs uppercase tracking-widest text-text-secondary">
                    {project.tags.join("  ·  ")}
                  </p>

                  <div className="mt-6 flex items-center gap-6">
                    {project.liveUrl && (
                      <a
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

              {i < projects.length - 1 && (
                <div className="h-px w-full bg-border" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-6">
          <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-text-secondary">
            side projects
          </h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        <ul className="mt-6 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {miniProjects.map((mp) => (
            <li key={mp.name}>
              <a
                href={mp.url}
                className="group flex items-baseline justify-between gap-4"
              >
                <span>
                  <span className="text-base font-medium text-foreground transition group-hover:text-primary">
                    {mp.name}
                  </span>
                  <span className="ml-3 text-sm text-text-secondary">
                    {mp.description}
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