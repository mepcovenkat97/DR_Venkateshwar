export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-500">
          <span className="text-accent">&lt;</span>
          Built with Prompts + Claude
          <span className="text-accent">/&gt;</span>
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">
          &copy; {new Date().getFullYear()} Venkateshwar D R. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
