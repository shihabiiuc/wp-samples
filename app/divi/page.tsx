import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Some of My Divi Work Samples",
  description:
    "A curated collection of WordPress sites built with Divi by Shihabiiuc.",
};

type Project = {
  name: string;
  category: string;
  url: string;
  description: string;
  icon: keyof typeof icons;
};

const projects: Project[] = [
  {
    name: "My Property Master",
    category: "Property Management",
    url: "https://mypropertymaster.com/",
    description:
      "Property management company site with clear service breakdowns and an owner-inquiry form built to convert.",
    icon: "key",
  },
  {
    name: "SLeCAD",
    category: "Agribusiness Association",
    url: "https://slecad.biz/",
    description:
      "Site for the Sierra Leone Chamber for Agribusiness Development, connecting agribusiness companies, farmers, and industry partners.",
    icon: "leaf",
  },
];

export default function Divi() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-6 pb-14 md:px-10 md:pt-10 md:pb-20">
      <h1 className="mt-2 text-center font-bold font-display text-lg leading-[1.1] text-[#434445] sm:text-2xl md:text-3xl">
        Divi Project Links
      </h1>

      <ul className="mt-14 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10">
        {projects.map((project) => (
          <li key={project.url}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-sm border border-line bg-card p-7 pt-10 transition-all duration-200 hover:-translate-y-1 hover:border-navy hover:shadow-[0_18px_40px_-20px_rgba(27,36,48,0.35)]"
            >
              <span className="absolute -top-5 left-7 flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-brass bg-card text-brass shadow-sm transition-transform duration-200 group-hover:-rotate-6">
                <Icon name={project.icon} />
              </span>

              <p className="font-label text-[11px] uppercase tracking-[0.15em] text-navy-soft">
                {project.category}
              </p>
              <h2 className="mt-2 font-display text-xl text-ink">
                {project.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="font-label text-xs text-ink-muted">
                  {project.url
                    .replace(/^https?:\/\/(www\.)?/, "")
                    .replace(/\/$/, "")}
                </span>
                <span className="flex items-center gap-1 font-label text-xs text-navy transition-colors group-hover:text-brass">
                  Visit site
                  <ArrowUpRightIcon className="h-3 w-3" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons = {
  key: (
    <svg {...iconProps}>
      <circle cx="8" cy="15" r="4.2" />
      <path d="M11 12.2 20 3.2M15.5 6.7l2.3 2.3M13 9.2l2 2" />
    </svg>
  ),
  leaf: (
    <svg {...iconProps}>
      <path d="M5 21c9 0 14-5 14-14 0-1-.1-2-.3-3C10 4 5 9 5 18c0 1 0 2 .2 3z" />
      <path d="M5 21c3-6 6-9 12-12" />
    </svg>
  ),
};

function Icon({ name }: { name: keyof typeof icons }) {
  return icons[name];
}
