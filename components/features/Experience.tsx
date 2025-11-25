"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const TimelineEntry = ({
    experience,
    index,
}: {
    experience: (typeof experiences)[0];
    index: number;
}) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 relative ${isEven ? "" : "md:flex-row-reverse"
                }`}
        >
            {/* Left side (or right if even) */}
            <div className={isEven ? "md:text-right" : "md:col-start-2"}>
                <div className={`${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    {/* Company & Role */}
                    <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-1">
                        {experience.role}
                    </h3>
                    <p className="text-lg text-deep-gold font-sans mb-2">
                        {experience.company}
                    </p>

                    {/* Period & Location */}
                    <div
                        className={`text-sm text-charcoal/60 font-sans mb-6 ${isEven ? "md:text-right" : "text-left"
                            }`}
                    >
                        <p>{experience.period}</p>
                        <p>{experience.location}</p>
                    </div>

                    {/* Description */}
                    <ul
                        className={`space-y-2 mb-6 ${isEven ? "md:text-right" : "text-left"
                            }`}
                    >
                        {experience.description.map((item, i) => (
                            <li key={i} className="text-base text-charcoal/70 leading-relaxed">
                                {isEven ? (
                                    <>
                                        {item}
                                        <span className="text-deep-gold ml-2">•</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-deep-gold mr-2">•</span>
                                        {item}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <div
                        className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"
                            }`}
                    >
                        {experience.tech.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 border border-charcoal/20 text-charcoal/70 font-sans"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Node (center) */}
            <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-deep-gold border-4 border-ivory z-10" />
            </div>

            {/* Empty space on opposite side */}
            <div className={isEven ? "md:col-start-2" : "md:col-start-1"} />
        </motion.div>
    );
};

export const Experience = () => {
    return (
        <section id="experience" className="section-spacing bg-ivory relative">
            <div className="container-padding max-w-content mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="grid-mark" />
                        <span className="text-sm uppercase tracking-widest text-charcoal/50 font-sans">
                            Career Journey
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif text-charcoal tracking-tight">
                        Where <span className="text-gradient-gold">experience</span> meets
                        expertise
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-charcoal/10 md:-translate-x-1/2" />

                    {/* Timeline entries */}
                    <div className="space-y-16 md:space-y-24 relative pl-12 md:pl-0">
                        {experiences.map((exp, index) => (
                            <TimelineEntry key={exp.id} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
