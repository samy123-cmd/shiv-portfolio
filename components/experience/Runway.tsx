import React from "react";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

const Runway = () => {
    return (
        <section className="bg-fashion-black text-fashion-white py-24 md:py-32 relative overflow-hidden">
            {/* Section Header */}
            <div className="px-6 md:px-24 mb-24">
                <h2 className="font-serif text-5xl md:text-7xl mb-4">The Runway</h2>
                <div className="w-full h-[1px] bg-fashion-charcoal" />
                <div className="flex justify-between mt-2 text-xs uppercase tracking-widest text-fashion-grey">
                    <span>Career History</span>
                    <span>2018 — Present</span>
                </div>
            </div>

            {/* Timeline / Runway */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-24">
                {/* Center Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-fashion-charcoal -translate-x-1/2 hidden md:block" />

                <div className="flex flex-col gap-24 md:gap-32">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        const collectionLabel = getCollectionLabel(exp.period);

                        return (
                            <div
                                key={exp.id}
                                className={cn(
                                    "relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
                                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                                )}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-fashion-gold rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 md:mt-0 z-10" />

                                {/* Content Card */}
                                <div className={cn("w-full md:w-1/2 pl-8 md:pl-0", isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16")}>
                                    <div className="mb-4">
                                        <span className="inline-block py-1 px-3 border border-fashion-gold/30 text-[10px] tracking-[0.2em] uppercase text-fashion-gold mb-2">
                                            {collectionLabel}
                                        </span>
                                        <h3 className="font-serif text-3xl md:text-4xl">{exp.company}</h3>
                                        <p className="font-sans text-sm tracking-wide text-fashion-grey mt-1 uppercase">
                                            {exp.role}
                                        </p>
                                    </div>

                                    <ul className={cn("flex flex-col gap-2 text-fashion-white/80 font-light text-sm md:text-base", isEven ? "items-start md:items-end" : "items-start")}>
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="leading-relaxed max-w-md">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={cn("flex flex-wrap gap-2 mt-6", isEven ? "justify-start md:justify-end" : "justify-start")}>
                                        {exp.tech.map((tech) => (
                                            <span key={tech} className="text-[10px] uppercase tracking-wider text-fashion-grey border-b border-fashion-charcoal pb-0.5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Helper to generate "Fashion Collection" names based on dates
const getCollectionLabel = (period: string) => {
    if (period.includes("Current")) return "SS '24 Collection";
    if (period.includes("2022")) return "AW '22 Drop";
    if (period.includes("2021")) return "FW '21 Archive";
    if (period.includes("2018")) return "Vintage '18";
    return "Archive Collection";
};

export default Runway;
