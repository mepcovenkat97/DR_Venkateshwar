import { Award, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

const CERTS: Certification[] = [
  {
    title: "JavaScript Basic",
    issuer: "HackerRank",
    date: "Dec 2020",
    url: "https://www.hackerrank.com/certificates/62a1741c657e",
  },
  {
    title: "Problem Solving Basic",
    issuer: "HackerRank",
    date: "Sep 2020",
    url: "https://www.hackerrank.com/certificates/3a46d183ef55",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {CERTS.map((cert, i) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-start gap-4 animate-slide-up cursor-pointer group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-1">
              <Award className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-semibold group-hover:text-accent transition-colors">{cert.title}</h3>
                <ExternalLink className="h-3.5 w-3.5 text-gray-400 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-accent font-mono text-xs sm:text-sm">{cert.issuer}</p>
              <span className="text-xs font-mono text-gray-500 dark:text-gray-500 mt-1 block">
                Issued {cert.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
