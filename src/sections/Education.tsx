import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>

      <div className="card flex items-start gap-4 animate-slide-up">
        <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-1">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold">
            B.E Computer Science and Engineering
          </h3>
          <p className="text-accent font-mono text-xs sm:text-sm">
            Mepco Schlenk Engineering College
          </p>
          <span className="text-xs font-mono text-gray-500 dark:text-gray-500 mt-1 block">
            2015 — 2019
          </span>
        </div>
      </div>
    </section>
  );
}
