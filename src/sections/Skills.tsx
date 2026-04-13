import { Code2, Database, Wrench } from "lucide-react";
import type { ReactNode } from "react";

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["React.js", "TypeScript", "MaterialUI", "Zustand", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: ["Node.js", "Fastify", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Git", "Linux", "WebSockets", "WebOS", "Tizen", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.title}
            className="card animate-slide-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                {cat.icon}
              </div>
              <h3 className="font-semibold font-mono">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
