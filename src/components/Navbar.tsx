import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { to: "/DR_Venkateshwar", label: "Home" },
  { to: "/slideshow", label: "About Me" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 safe-top">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <Link
          to="/DR_Venkateshwar"
          className="font-mono font-semibold text-lg tracking-tight hover:text-accent transition-colors"
        >
          <span className="text-accent">&lt;</span>
          DRV
          <span className="text-accent">/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === link.to
                  ? "text-accent"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://mepcovenkat97.github.io/DR_Venkateshwar/Venkateshwar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            Download CV
          </a>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2.5 -mr-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 space-y-1 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block text-base font-medium py-3 px-2 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-accent ${
                pathname === link.to
                  ? "text-accent bg-accent/5"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Venkateshwar_Resume.pdf"
            download
            className="block text-center text-base font-medium px-4 py-3 mt-2 rounded-lg bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
