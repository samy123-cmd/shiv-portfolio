"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { Github, ExternalLink, Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const QuestCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "bg-retro-bg border-4 p-6 relative overflow-hidden group",
                project.type === "MAIN QUEST" ? "border-retro-yellow" : "border-retro-secondary"
            )}
        >
            {/* Quest Type Badge */}
            <div className={cn(
                "absolute top-0 right-0 px-3 py-1 font-pixel text-xs text-retro-bg",
                project.type === "MAIN QUEST" ? "bg-retro-yellow" : "bg-retro-secondary text-retro-text"
            )}>
                {project.type}
            </div>

            {/* Difficulty Stars */}
            <div className="flex space-x-1 mb-4">
                {Array.from({ length: project.difficulty === "LEGENDARY" ? 5 : project.difficulty === "HARD" ? 4 : project.difficulty === "MEDIUM" ? 3 : 2 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-retro-yellow fill-retro-yellow" />
                ))}
            </div>

            <h3 className="text-xl font-pixel text-retro-text mb-2 group-hover:text-retro-primary transition-colors">
                {project.title}
            </h3>

            <p className="font-mono text-retro-text/80 text-sm mb-6 min-h-[60px]">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                    <span key={t} className="text-xs font-pixel text-retro-green border border-retro-green px-2 py-1">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center border-t-2 border-retro-text/20 pt-4">
                <div className="flex items-center text-retro-yellow font-pixel text-sm">
                    <Trophy className="w-4 h-4 mr-2" />
                    {project.xp} XP
                </div>

                <div className="flex space-x-4">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-retro-text hover:text-retro-primary transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section className="min-h-screen bg-retro-bg p-8 relative border-t-4 border-retro-secondary">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-pixel text-retro-text text-center mb-12 text-shadow-retro">
                    MISSION BOARD
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <QuestCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub Activity Graph (Mock) */}
                <div className="mt-16 border-4 border-retro-secondary p-6 bg-retro-accent/20">
                    <h3 className="text-xl font-pixel text-retro-green mb-4 text-center">
                        CONTRIBUTION MATRIX
                    </h3>
                    <div className="flex flex-wrap gap-1 justify-center">
                        {Array.from({ length: 365 }).map((_, i) => {
                            const level = Math.random() > 0.7 ? Math.floor(Math.random() * 4) : 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.001 }}
                                    className={cn(
                                        "w-3 h-3 rounded-sm",
                                        level === 0 ? "bg-retro-secondary/30" :
                                            level === 1 ? "bg-retro-green/40" :
                                                level === 2 ? "bg-retro-green/70" :
                                                    "bg-retro-green"
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
