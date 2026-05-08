import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import { useThemeStore } from "@/store/useThemeStore";

const Home = lazy(() => import("@/pages/Home"));
const Slideshow = lazy(() => import("@/pages/Slideshow"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 font-mono text-sm text-gray-500 dark:text-gray-400">
        <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        Loading...
      </div>
    </div>
  );
}

export default function App() {
  const isDark = useThemeStore((s) => s.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <main className="pt-16">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/DR_Venkateshwar" element={<Home />} />
              <Route path="/slideshow" element={<Slideshow />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
}
