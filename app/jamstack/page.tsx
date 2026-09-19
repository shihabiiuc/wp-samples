import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Some of My Jamstack Work Samples",
  description:
    "A curated collection of Jamstack websites built by Shihabiiuc with Next.js, Astro, and Jekyll, deployed on Vercel, Netlify, and GitHub Pages.",
};

type Project = {
  name: string;
  url: string;
  description: string;
};

type Framework = {
  name: string;
  tagline: string;
  icon: keyof typeof frameworkIcons;
  projects: Project[];
};


const frameworks: Framework[] = [
  {
    name: "Astro",
    tagline: "Content-focused sites shipped as fast, mostly static HTML.",
    icon: "astro",
    projects: [
      {
        name: "FDCPA Training",
        url: "https://fdcpatraining.com",
        description:
          "Course and compliance training site built with Astro for fast page loads.",
      },
      {
        name: "Belkis",
        url: "https://belkis.site/en/",
        description:
          "Multilingual personal site built with Astro, with an English locale route.",
      },
      {
        name: "HackedWP",
        url: "https://hackedwp.com",
        description:
          "WordPress security resource site built with Astro.",
      },
      {
        name: "Carol Silbergeld",
        url: "https://carolsilbergeld.vercel.app",
        description:
          "Personal portfolio site built with Astro and deployed on Vercel.",
      },
      {
        name: "Biocode Sys",
        url: "https://biocodesys.netlify.app",
        description:
          "Astro build of the Biocode site, deployed and hosted on Netlify.",
      },
      {
        name: "NovaPep",
        url: "https://novapep.netlify.app",
        description:
          "Product-style landing page built with Astro and deployed on Netlify.",
      },
      {
        name: "Jess Sims",
        url: "https://imjesssims.vercel.app",
        description:
          "Personal brand site built with Astro and deployed on Vercel.",
      },
      {
        name: "SpeedUp",
        url: "https://speedup-iota.vercel.app",
        description:
          "Lightweight landing page built with Astro, optimized for fast delivery.",
      },
    ],
  },
  {
    name: "Jekyll",
    tagline: "Ruby-based static site generator, served from GitHub Pages.",
    icon: "jekyll",
    projects: [
      {
        name: "Jekyll Sample",
        url: "https://shihabiiuc.github.io/jekyll",
        description:
          "Static site built with Jekyll and hosted directly on GitHub Pages.",
      },
    ],
  },
  {
    name: "Gatsby",
    tagline: "React-based static site generator with a rich GraphQL data layer.",
    icon: "gatsby",
    projects: [
      {
        name: "Bright Smile Dentale",
        url: "https://brightsmiledentale.netlify.app/",
        description:
          "Dental practice website built with Gatsby and deployed on Netlify.",
      },
    ],
  },
  {
    name: "Hugo",
    tagline: "Go-based static site generator built for speed.",
    icon: "hugo",
    projects: [
      {
        name: "Daniel Carter",
        url: "https://danielcarter.website/",
        description:
          "Personal portfolio site built with Hugo.",
      },
    ],
  },
  {
    name: "Next.js",
    tagline: "React framework with server rendering and file-based routing.",
    icon: "nextjs",
    projects: [
      {
        name: "The Biocode System",
        url: "https://thebiocodesystem.com",
        description:
          "Marketing site for a wellness program, built with the Next.js App Router.",
      },
      {
        name: "Interior Design Umally",
        url: "https://interiordesignumally.vercel.app",
        description:
          "Interior design portfolio site built with Next.js and deployed on Vercel.",
      },
    ],
  },
];

export default function Jamstack() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-6 pb-14 md:px-10 md:pt-10 md:pb-20">
      <h1 className="mt-2 text-center font-bold font-display text-lg leading-[1.1] text-[#434445] sm:text-2xl md:text-3xl">
        Jamstack Project Links
      </h1>

      <div className="mt-14 flex flex-col gap-14 md:mt-16 md:gap-16">
        {frameworks.map((framework) => (
          <section key={framework.name}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-brass bg-card text-brass">
                <FrameworkIcon name={framework.icon} />
              </span>
              <div>
                <h2 className="font-display text-lg text-ink md:text-xl">
                  {framework.name}
                </h2>
                <p className="text-xs text-ink-muted md:text-sm">
                  {framework.tagline}
                </p>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-10">
              {framework.projects.map((project) => (
                <li key={project.url}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-sm border border-line bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-navy hover:shadow-[0_18px_40px_-20px_rgba(27,36,48,0.35)]"
                  >
                    <p className="font-label text-[11px] uppercase tracking-[0.15em] text-navy-soft">
                      {framework.name}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-ink">
                      {project.name}
                    </h3>
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
          </section>
        ))}
      </div>
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

const frameworkIconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const frameworkIcons = {
  nextjs: (
    <svg {...frameworkIconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 8v8" />
      <path d="M8.5 8 15 16" />
      <path d="M15 8v8" />
    </svg>
  ),
  astro: (
    <svg {...frameworkIconProps}>
      <path d="M12 3 7 19h2.5l1-3.3h3l1 3.3H17L12 3z" />
      <path d="M10 13h4" />
      <path d="M8.5 21c1-1.2 2-1.2 3.5 0 1.5-1.2 2.5-1.2 3.5 0" />
    </svg>
  ),
  jekyll: (
    <svg {...frameworkIconProps}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6M17.8 17.8l-1.6-1.6M7.8 7.8 6.2 6.2" />
    </svg>
  ),
  gatsby: (
    <svg {...frameworkIconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3.2" />
      <path d="M12 20.5c-4.7-.4-8.5-4.2-8.9-8.9L12 20.5z" />
      <circle cx="18" cy="18" r="1.4" />
    </svg>
  ),
  hugo: (
    <svg {...frameworkIconProps}>
      <path d="M5 20V4l7 7 7-7v16" />
      <path d="M5 20h4M15 20h4" />
    </svg>
  ),
};

function FrameworkIcon({ name }: { name: keyof typeof frameworkIcons }) {
  return frameworkIcons[name];
}
