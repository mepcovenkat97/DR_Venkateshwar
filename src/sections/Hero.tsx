import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="section-container relative z-10 text-center w-full">
        <div className="animate-fade-in">
          <p className="font-mono text-accent text-sm md:text-base mb-4 tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            Venkateshwar{" "}
            <span className="text-accent">D R</span>
          </h1>
          <p className="font-mono text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
            Full Stack Developer
          </p>
        </div>

        <div className="animate-slide-up max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm md:text-base">
            Dedicated and forward-thinking Full-Stack Developer with expertise in
            building scalable web applications, live data monitoring systems, and
            OTT platforms — driving teams towards delivering on aspirational tech
            visions.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="https://github.com/mepcovenkat97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 sm:p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/d-r-venkateshwar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 sm:p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mepcovenkat97@gmail.com"
              aria-label="Email"
              className="p-2.5 sm:p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors animate-bounce"
          >
            <ArrowDown className="h-4 w-4" />
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
