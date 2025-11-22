import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Shiv Shakti Mishra | Interactive Portfolio",
  description: "A retro interactive portfolio for Shiv Shakti Mishra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(pressStart2P.variable, vt323.variable, "font-mono bg-retro-bg text-retro-text antialiased")}>
        {children}
      </body>
    </html>
  );
}
