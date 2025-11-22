"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, Skill } from "@/data/skills";
import { cn } from "@/lib/utils";

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between text-retro-text font-pixel text-xs mb-1">
                <span>{skill.name}</span>
                <span>LVL {Math.floor(skill.level / 10)}</span>
            </div>
            <div className="h-6 bg-retro-secondary border-2 border-retro-text relative p-1">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                        "h-full relative",
                        skill.category === "ETL" && "bg-retro-primary",
                        skill.category === "Database" && "bg-retro-yellow",
                        skill.category === "Cloud" && "bg-retro-green",
                        skill.category === "Language" && "bg-blue-500",
                        skill.category === "Tool" && "bg-purple-500"
                    )}
                >
                    {/* Glitch/Shine effect */}
                    <div className="absolute top-0 right-0 w-1 h-full bg-white/50 animate-pulse" />
                </motion.div>
            </div>
        </div>
    );
};

export const Skills = () => {
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <section className="min-h-screen bg-retro-bg p-8 relative border-t-4 border-retro-secondary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-pixel text-retro-text text-center mb-12 text-shadow-retro">
                    SKILL ARSENAL
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* XP Bars Column */}
                    <div>
                        <h3 className="text-2xl font-pixel text-retro-primary mb-6 flex items-center">
                            <span className="mr-2">&gt;</span> PROFICIENCY LOGS
                        </h3>
                        <div className="bg-retro-accent/30 p-6 border-2 border-retro-secondary rounded">
                            {skills.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Tech Ecosystem / "Inventory" Column */}
                    <div>
                        <h3 className="text-2xl font-pixel text-retro-green mb-6 flex items-center">
                            <span className="mr-2">&gt;</span> INVENTORY GRID
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={cn(
                                        "aspect-square border-2 border-retro-text flex flex-col items-center justify-center p-2 text-center cursor-pointer bg-retro-bg hover:bg-retro-accent transition-colors",
                                        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    )}
                                >
                                    <div className={cn(
                                        "w-3 h-3 rounded-full mb-2",
                                        skill.category === "ETL" && "bg-retro-primary",
                                        skill.category === "Database" && "bg-retro-yellow",
                                        skill.category === "Cloud" && "bg-retro-green",
                                        skill.category === "Language" && "bg-blue-500",
                                        skill.category === "Tool" && "bg-purple-500"
                                    )} />
                                    <span className="font-pixel text-[10px] text-retro-text leading-tight">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 border-2 border-dashed border-retro-text/50 font-mono text-xs text-retro-text/70">
                            <p>TIP: Hover over items to view details.</p>
                            <p>LEGEND: <span className="text-retro-primary">ETL</span> <span className="text-retro-yellow">DB</span> <span className="text-retro-green">CLOUD</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
