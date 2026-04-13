import { useCallback, useEffect, useRef } from "react";

export default function FluidGradient() {
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ ax: 0.5, ay: 0.5, bx: 0.5, by: 0.5 });

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    const { x, y } = mouseRef.current;
    const c = currentRef.current;

    // Blob A follows mouse with slight offset
    c.ax = lerp(c.ax, x, 0.02);
    c.ay = lerp(c.ay, y, 0.02);

    // Blob B follows with more lag and inverse offset
    c.bx = lerp(c.bx, 1 - x, 0.015);
    c.by = lerp(c.by, 1 - y, 0.015);

    if (blobARef.current) {
      blobARef.current.style.transform = `translate(${c.ax * 40 - 20}%, ${c.ay * 40 - 20}%)`;
    }
    if (blobBRef.current) {
      blobBRef.current.style.transform = `translate(${c.bx * 40 - 20}%, ${c.by * 40 - 20}%)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Indigo blob */}
      <div
        ref={blobARef}
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vh] rounded-full opacity-30 dark:opacity-15 blur-[120px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.5) 0%, rgba(129,140,248,0) 70%)",
        }}
      />
      {/* Rose blob */}
      <div
        ref={blobBRef}
        className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vh] rounded-full opacity-30 dark:opacity-15 blur-[120px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(251,146,160,0.45) 0%, rgba(251,146,160,0) 70%)",
        }}
      />
    </div>
  );
}
