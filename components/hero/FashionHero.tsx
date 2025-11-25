"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Typewriter from "@/components/ui/Typewriter";
import EtlBackground from "@/components/hero/EtlBackground";

export default function FashionHero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-fashion-black text-fashion-white">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <EtlBackground />
                <div className="absolute top-0 left-1/4 w-px h-full bg-fashion-gold/30" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-fashion-gold/30" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-fashion-gold/30" />
                <div className="absolute bottom-1/3 left-0 w-full h-px bg-fashion-gold/30" />
            </div>

            <div className="z-10 text-center flex flex-col items-center max-w-6xl px-6">
                {/* Vertical Label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-12 left-6 md:left-12 writing-vertical-rl text-xs tracking-[0.3em] text-fashion-gold/80 font-sans hidden md:block"
                >
                    EST. 2025 — VOL. 01
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-tighter mix-blend-difference"
                >
                    SHIV SHAKTI
                    <br />
                    <span className="italic font-light text-fashion-gold">MISHRA</span>
                </motion.h1>

                {/* Sub-headline / Role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-8 md:mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-8"
                >
                    <div className="h-px w-12 md:w-24 bg-fashion-white/50" />
                    <div className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-fashion-white/80 min-h-[1.5em] min-w-[200px] flex items-center justify-center">
                        <Typewriter
                            words={[
                                "Senior Data Engineer",
                                "AI Engineer",
                                "Data Platform Specialist",
                                "Product Manager",
                                "Freelancer"
                            ]}
                        />
                    </div>
                    <div className="h-px w-12 md:w-24 bg-fashion-white/50" />
                </motion.div>
            </div>

            {/* Scroll Indicator & Resume */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-6"
            >
                <a
                    href="/resume.pdf"
                    download="Shiv_Shakti_Mishra_Resume.pdf"
                    className="group relative px-6 py-3 overflow-hidden border border-fashion-gold/30 rounded-full hover:border-fashion-gold transition-colors duration-500"
                >
                    <span className="relative z-10 font-sans text-xs tracking-[0.2em] uppercase text-fashion-gold group-hover:text-fashion-black transition-colors duration-500">
                        Download Résumé
                    </span>
                    <div className="absolute inset-0 bg-fashion-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </a>

                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] tracking-widest uppercase text-fashion-gold/60">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-fashion-gold/60 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
