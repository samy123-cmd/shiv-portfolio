import { Hero } from "@/components/features/Hero";
import { Skills } from "@/components/features/Skills";
import { SubwayMap } from "@/components/features/SubwayMap";
import { Projects } from "@/components/features/Projects";
import { Certifications } from "@/components/features/Certifications";
import { MatrixRain } from "@/components/features/MatrixRain";

export default function Home() {
  return (
    <main className="min-h-screen bg-retro-bg relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Grid Background (Overlay) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none fixed z-0" />

      {/* Scanline Effect */}
      <div className="scanline" />

      <Hero />
      <Skills />
      <SubwayMap />
      <Projects />
      <Certifications />

      <footer className="bg-retro-secondary p-8 text-center border-t-4 border-retro-primary relative z-10">
        <p className="font-pixel text-retro-text text-sm">
          © {new Date().getFullYear()} SHIV SHAKTI MISHRA. SYSTEM ONLINE.
        </p>
        <p className="font-mono text-retro-text/50 text-xs mt-2">
          BUILT WITH NEXT.JS + TAILWIND + PIXEL DREAMS
        </p>
      </footer>
    </main>
  );
}
