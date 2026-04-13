import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

interface Slide {
  title: string;
  subtitle?: string;
  content: string[];
  accent?: string;
}

const SLIDES: Slide[] = [
  {
    title: "Venkateshwar D R",
    subtitle: "Engineering Philosophy",
    content: [
      "Full-Stack Developer driven by clean architecture and pragmatic engineering.",
      "I believe in building systems that are observable, maintainable, and scalable — not just functional.",
      "My approach: understand the domain deeply, choose the simplest tool that solves the problem, and iterate with real user feedback.",
      "Technology is a vehicle for impact. Every line of code should serve a purpose.",
    ],
    accent: "Philosophy",
  },
  {
    title: "Career Progression",
    subtitle: "From Campus to Production Systems",
    content: [
      "B.E. in Computer Science and Engineering — Mepco Schlenk Engineering College (2015–2019)",
      "Began professional journey building WebOS/Tizen apps and OTT platforms at Ventuno Technologies.",
      "Progressed to full-stack medical portals and API tooling at Crayon'D Digital.",
      "Currently an Associate Software Engineer at Saint-Gobain India, architecting real-time monitoring and global white-label platforms.",
    ],
    accent: "Growth",
  },
  {
    title: "High-Impact Projects",
    subtitle: "Production Reporting Platform & Beyond",
    content: [
      "Production Reporting Platform — Aggregates factory data across multiple systems into a unified dashboard with real-time socket updates.",
      "White-Label Architecture — Configurable theming and branding system deployed across 5+ global Saint-Gobain markets.",
      "Medical Portal — Streamlined patient-provider workflows with role-based access, scheduling, and document management.",
      "API Configurator — Visual tool reducing backend integration time by 40%, with auto-generated documentation.",
    ],
    accent: "Impact",
  },
  {
    title: "Certifications & Skills",
    subtitle: "Continuous Learning",
    content: [
      "HackerRank — JavaScript Basic (Dec 2020)",
      "HackerRank — Problem Solving Basic (Sep 2020)",
      "Core Stack: React, Node.js, Fastify, PostgreSQL, TypeScript",
      "Passionate about performance optimization, developer tooling, and system observability.",
    ],
    accent: "Credentials",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1)),
    []
  );

  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  const slide = SLIDES[current];

  return (
    <>
      <SEOHead
        title="About Me"
        description="A developer slideshow about Venkateshwar D R's journey and engineering philosophy."
        path="/slideshow"
      />

      <div className="min-h-screen sm:h-screen flex items-center justify-center overflow-hidden px-4 py-20 sm:py-0" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="section-container w-full max-w-6xl">
          {/* Slide counter */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <span className="font-mono text-xs text-gray-500 dark:text-gray-500">
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            {slide.accent && (
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {slide.accent}
              </span>
            )}
          </div>

          {/* Slide content */}
          <div className="card min-h-0 sm:min-h-[340px] md:min-h-[380px] flex flex-col justify-center p-4 sm:p-8 md:p-12" key={current}>
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{slide.title}</h1>
              {slide.subtitle && (
                <p className="font-mono text-accent text-xs sm:text-sm md:text-base mb-4 sm:mb-8">
                  {slide.subtitle}
                </p>
              )}
              <div className="space-y-2.5 sm:space-y-4">
                {slide.content.map((line, i) => (
                  <p
                    key={i}
                    className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2 sm:gap-3 animate-slide-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="text-accent shrink-0 font-mono text-sm mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4 sm:mt-6">
            <button
              onClick={prev}
              className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent transition-all text-xs sm:text-sm font-mono"
            >
              <ChevronLeft className="h-4 w-4" /> <span className="hidden xs:inline">Prev</span>
            </button>

            <div className="flex gap-1.5 sm:gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-accent w-8"
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-accent/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent transition-all text-xs sm:text-sm font-mono"
            >
              <span className="hidden xs:inline">Next</span> <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Keyboard hint */}
          <p className="text-center mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-400 dark:text-gray-600 font-mono">
            <span className="hidden sm:inline">Use arrow keys or click to navigate</span>
            <span className="sm:hidden">Swipe or tap to navigate</span>
          </p>
        </div>
      </div>
    </>
  );
}
