import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Some of My Elementor Work Samples",
  description:
    "A curated collection of WordPress sites built with Elementor by Shihabiiuc.",
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
    name: "Roofing Contractor",
    category: "Roofing",
    url: "https://roofinginri.com/",
    description:
      "Lead-generation site for a Rhode Island roofing company, built to turn storm-damage searches into booked estimates.",
    icon: "roof",
  },
  {
    name: "Your Thinking Mind",
    category: "Wellness Blog",
    url: "https://yourthinkingmind.com/",
    description:
      "Content-first wellness blog built for fast reads and easy navigation across long-form mental health articles.",
    icon: "leaf",
  },
  {
    name: "Interior Design Studio",
    category: "Interior Design",
    url: "https://hitechistubd.com/",
    description:
      "Interior design studio site with project galleries and service packages tailored for residential clients.",
    icon: "chair",
  },
  {
    name: "AJ Rich Therapy",
    category: "Family Therapy",
    url: "https://ajrichtherapy.com/",
    description:
      "Warm, approachable site for a family therapy practice, designed to make booking a first session feel easy.",
    icon: "heart",
  },
  {
    name: "VI Media",
    category: "Marketing Agency",
    url: "https://vi-media.ca/",
    description:
      "Canadian marketing agency site with a bold portfolio layout built to show off client campaign work.",
    icon: "megaphone",
  },
  {
    name: "360 Cap Group",
    category: "Financing",
    url: "https://360capgroup.com/",
    description:
      "Corporate site for a capital financing group, built to read as credible and trustworthy to loan applicants.",
    icon: "coins",
  },
  {
    name: "Blue Cat Cleaning",
    category: "Commercial Cleaning",
    url: "https://bluecatcleaning.com/",
    description:
      "Local commercial cleaning company site optimized to turn nearby searches into quote requests.",
    icon: "spray",
  },
  {
    name: "Transport Company",
    category: "Logistic",
    url: "https://kat-transport.fr/",
    description:
      "Transport company specializing in domestic and international transport. Based in France.",
    icon: "logistic",
  },
  {
    name: "Sham Tech",
    category: "Technology",
    url: "https://sham-tech.com/",
    description:
      "Technology company site built to present services and capabilities to prospective clients.",
    icon: "laptop",
  },
];

export default function Elementor() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-6 pb-14 md:px-10 md:pt-10 md:pb-20">
      <h1 className="mt-2 text-center font-bold font-display text-lg leading-[1.1] text-[#434445] sm:text-2xl md:text-3xl">
        Elementor Project Links
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
  roof: (
    <svg {...iconProps}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  logistic: (
    <svg {...iconProps}>
      <path d="M3 16V6a1 1 0 0 1 1-1h9v11" />
      <path d="M13 10h4l4 3.5V16a1 1 0 0 1-1 1h-2" />
      <path d="M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      <path d="M14 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      <path d="M7 16h5" />
    </svg>
  ),
  leaf: (
    <svg {...iconProps}>
      <path d="M5 21c9 0 14-5 14-14 0-1-.1-2-.3-3C10 4 5 9 5 18c0 1 0 2 .2 3z" />
      <path d="M5 21c3-6 6-9 12-12" />
    </svg>
  ),
  chair: (
    <svg {...iconProps}>
      <path d="M6 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      <path d="M4 11h16v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M6 18v2M18 18v2" />
    </svg>
  ),
  heart: (
    <svg {...iconProps}>
      <path d="M12 20s-7-4.5-9-8.6C1.4 8 3 5 6.3 5 8.4 5 10.6 6.4 12 8.5 13.4 6.4 15.6 5 17.7 5 21 5 22.6 8 21 11.4 19 15.5 12 20 12 20z" />
    </svg>
  ),
  megaphone: (
    <svg {...iconProps}>
      <path d="M3 10.5v3a1 1 0 0 0 1 1h1.8L13 19V6l-7.2 4.5H4a1 1 0 0 0-1 1z" />
      <path d="M16.5 9a4 4 0 0 1 0 6" />
    </svg>
  ),
  coins: (
    <svg {...iconProps}>
      <ellipse cx="12" cy="6.5" rx="6" ry="2.4" />
      <path d="M6 6.5v5c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4v-5" />
      <path d="M6 11.5v5c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4v-5" />
    </svg>
  ),
  spray: (
    <svg {...iconProps}>
      <path d="M9 3.5h3l.8 1.7H15a1 1 0 0 1 1 1V8H8V6.2a1 1 0 0 1 1-1z" />
      <path d="M7.5 8h6.7l.9 11a1 1 0 0 1-1 1.1H7.6a1 1 0 0 1-1-1.1z" />
      <path d="M3.5 5.5 5 6.7M3.5 9.5 5 10M3 13.5h2" />
    </svg>
  ),
  laptop: (
    <svg {...iconProps}>
      <rect x="4" y="5" width="16" height="10" rx="1" />
      <path d="M2 19h20" />
      <path d="M9 15v2M15 15v2" />
    </svg>
  ),
};

function Icon({ name }: { name: keyof typeof icons }) {
  return icons[name];
}
