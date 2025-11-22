"use client";

import React from "react";
import { motion } from "framer-motion";
import { certifications, education } from "@/data/certifications";
import { Award, BookOpen, Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";

const Badge = ({ cert, index }: { cert: any; index: number }) => {
    return (
        <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn(
                "relative w-24 h-24 flex flex-col items-center justify-center p-2 rounded-full border-4 cursor-pointer bg-retro-bg group",
                cert.unlocked ? "border-retro-yellow" : "border-retro-text/30 grayscale"
            )}
        >
            {cert.unlocked ? (
                <Unlock className="w-8 h-8 text-retro-yellow mb-1" />
            ) : (
                <Lock className="w-8 h-8 text-retro-text/30 mb-1" />
            )}
            <span className="text-[8px] text-center font-pixel text-retro-text leading-tight">
                {cert.title}
            </span>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 w-40 bg-retro-secondary p-2 rounded border border-retro-text text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <p className="font-pixel text-retro-primary">{cert.issuer}</p>
                <p className="font-mono text-retro-text/70">{cert.date}</p>
            </div>
        </motion.a>
    );
};

export const Certifications = () => {
    return (
        <section className="min-h-screen bg-retro-bg p-8 relative border-t-4 border-retro-secondary pb-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-pixel text-retro-text mb-12 text-shadow-retro">
                    ACHIEVEMENTS UNLOCKED
                </h2>

                {/* Skill Tree / Badges */}
                <div className="flex flex-wrap justify-center gap-8 mb-20 relative">
                    {/* Connecting Lines (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 100 50 L 300 50 L 300 150" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" />
                        <path d="M 500 50 L 300 50" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>

                    {certifications.map((cert, index) => (
                        <Badge key={cert.id} cert={cert} index={index} />
                    ))}
                </div>

                {/* Education Section */}
                <div className="border-4 border-retro-text p-8 bg-retro-accent/20 inline-block">
                    <div className="flex items-center justify-center mb-4">
                        <BookOpen className="w-8 h-8 text-retro-green mr-2" />
                        <h3 className="text-2xl font-pixel text-retro-text">ACADEMIC LOGS</h3>
                    </div>
                    {education.map((edu, index) => (
                        <div key={index} className="font-mono text-retro-text">
                            <p className="text-xl text-retro-primary">{edu.degree}</p>
                            <p className="text-retro-text/80">{edu.school}</p>
                            <p className="text-retro-text/60">{edu.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
