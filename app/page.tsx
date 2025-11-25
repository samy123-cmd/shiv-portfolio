import FashionHero from "@/components/hero/FashionHero";
import SignatureStatement from "@/components/statement/SignatureStatement";
import Runway from "@/components/experience/Runway";
import Collection from "@/components/projects/Collection";
import Capabilities from "@/components/skills/Capabilities";
import Backstage from "@/components/contact/Backstage";

export default function Home() {
  return (
    <main className="bg-fashion-black min-h-screen selection:bg-fashion-gold selection:text-fashion-black">
      <FashionHero />
      <SignatureStatement />
      <Runway />
      <Collection />
      <Capabilities />
      <Backstage />

      <footer className="bg-fashion-black text-fashion-grey py-12 text-center border-t border-fashion-charcoal">
        <p className="font-sans text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Shiv Shakti Mishra. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
