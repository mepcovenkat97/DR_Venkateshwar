import { Briefcase } from "lucide-react";

interface Role {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  tech: string[];
}

const ROLES: Role[] = [
  {
    company: "Saint-Gobain India",
    title: "Associate Software Engineer",
    period: "2023 — Present",
    highlights: [
      "Built Live Data Monitoring System using WebSockets for real-time production visibility.",
      "Implemented white-labeling architecture enabling seamless deployment across global markets.",
      "Developed Production Reporting Platform aggregating data from multiple factory systems.",
    ],
    tech: ["React.js", "Node.js", "Sockets", "PostgreSQL", "Fastify"],
  },
  {
    company: "Crayon'D Digital",
    title: "Software Developer",
    period: "2022 — 2023",
    highlights: [
      "Developed medical portals streamlining patient and provider workflows.",
      "Created API Configurator tools reducing backend integration time significantly.",
      "Built BDD Testing interfaces improving QA coverage and developer confidence.",
    ],
    tech: ["React.js", "Express.js", "MongoDB", "MaterialUI"],
  },
  {
    company: "Ventuno Technologies",
    title: "Software Developer",
    period: "2021 — 2022",
    highlights: [
      "Engineered WebOS and Tizen applications for smart TV platforms.",
      "Designed REST APIs powering OTT platform content delivery and user management.",
      "Optimized application performance across diverse device ecosystems.",
    ],
    tech: ["JavaScript", "WebOS", "Tizen", "REST APIs", "Node.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

        <div className="space-y-8">
          {ROLES.map((role, i) => (
            <div
              key={role.company}
              className="relative md:pl-16 animate-slide-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-accent bg-white dark:bg-gray-950 hidden md:flex items-center justify-center">
                <Briefcase className="h-2.5 w-2.5 text-accent" />
              </div>

              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{role.company}</h3>
                    <p className="text-accent font-mono text-xs sm:text-sm">{role.title}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">
                    {role.period}
                  </span>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
