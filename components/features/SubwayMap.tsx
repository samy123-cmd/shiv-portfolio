"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences, Experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export const SubwayMap = () => {
    const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

    return (
        <section className="min-h-screen bg-retro-bg p-8 relative border-t-4 border-retro-secondary overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl font-pixel text-retro-text text-center mb-12 text-shadow-retro">
                    CAREER TRANSIT MAP
                </h2>

                <div className="relative h-[600px] w-full bg-retro-accent/20 rounded-lg border-4 border-retro-text p-8 overflow-x-auto">
                    {/* SVG Map Layer */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        {/* Connecting Lines */}
                        <motion.path
                            d="M 100 500 L 100 400 L 300 400 L 300 300 L 500 300 L 500 200 L 700 200 L 700 100"
                            fill="none"
                            stroke="#e94560"
                            strokeWidth="8"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Branch Lines (Decorative) */}
                        <motion.path
                            d="M 300 400 L 400 400"
                            fill="none"
                            stroke="#f8e71c"
                            strokeWidth="6"
                            strokeDasharray="10,10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.5 }}
                            transition={{ delay: 1 }}
                        />
                    </svg>

                    {/* Stations */}
                    <div className="relative w-full h-full">
                        {experiences.map((exp, index) => {
                            // Calculate position based on index (simple diagonal layout for now)
                            // In a real app, these would be precise coordinates
                            const x = 100 + index * 200;
                            const y = 500 - index * 100; // Moving up

                            return (
                                <motion.div
                                    key={exp.id}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                                    style={{ left: x, top: y }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.5 }}
                                    onClick={() => setSelectedExp(exp)}
                                >
                                    {/* Station Node */}
                                    <div className={cn(
                                        "w-8 h-8 rounded-full border-4 border-white bg-retro-bg relative z-10 transition-transform group-hover:scale-125",
                                        selectedExp?.id === exp.id ? "bg-white" : ""
                                    )} style={{ borderColor: exp.color }}>
                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping" />
                                    </div>

                                    {/* Label */}
                                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-48 text-center">
                                        <span className="bg-retro-bg px-2 py-1 text-retro-text font-pixel text-xs border border-retro-secondary block">
                                            {exp.company}
                                        </span>
                                        <span className="text-retro-text/70 font-mono text-xs block mt-1">
                                            {exp.period}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Station Details Panel */}
                <div className="mt-8 min-h-[200px]">
                    {selectedExp ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={selectedExp.id}
                            className="bg-retro-bg border-4 border-retro-primary p-6 rounded shadow-retro"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-pixel text-retro-text">{selectedExp.role}</h3>
                                    <p className="text-retro-primary font-mono">{selectedExp.company} | {selectedExp.location}</p>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-3 py-1 bg-retro-secondary text-retro-text font-pixel text-xs rounded">
                                        {selectedExp.period}
                                    </span>
                                </div>
                            </div>

                            <ul className="list-disc list-inside space-y-2 font-mono text-retro-text/80 mb-4">
                                {selectedExp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {selectedExp.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 border border-retro-green text-retro-green text-xs font-pixel hover:bg-retro-green hover:text-retro-bg transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <div className="text-center text-retro-text/50 font-pixel animate-pulse mt-12">
                            SELECT A STATION TO VIEW DATA LOGS...
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
