import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import MagneticCursor from "@/components/ui/MagneticCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shiv Shakti Mishra | Data Platform Specialist",
  description: "Crafting Data Architectures with Precision & Elegance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(cormorant.variable, inter.variable, "font-sans bg-fashion-black text-fashion-white antialiased")} suppressHydrationWarning>
        <SmoothScroll>
          <GrainOverlay />
          <ScrollProgress />
          <MagneticCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
