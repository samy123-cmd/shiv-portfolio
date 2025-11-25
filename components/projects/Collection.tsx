import React from "react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

const Collection = () => {
    return (
        <section className="bg-fashion-white text-fashion-black py-24 md:py-32">
            <div className="px-6 md:px-24 mb-16">
                <h2 className="font-serif text-5xl md:text-7xl mb-4">The Collection</h2>
                <div className="w-full h-[1px] bg-fashion-charcoal" />
                <div className="flex justify-between mt-2 text-xs uppercase tracking-widest text-fashion-grey">
                    <span>Selected Works</span>
                    <span>Vol. 01</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={cn(
                            "group flex flex-col gap-6",
                            index % 2 !== 0 ? "md:mt-24" : "" // Staggered grid
                        )}
                    >
                        {/* Image Placeholder / Visual */}
                        <div className="aspect-[4/5] bg-fashion-charcoal/5 relative overflow-hidden border border-fashion-charcoal/10 group-hover:border-fashion-gold/50 transition-colors duration-500">
                            {project.image ? (
                                <NextImage
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity duration-500">
                                    <span className="font-serif text-9xl text-fashion-charcoal">{index + 1}</span>
                                </div>
                            )}

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-fashion-black/20">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="self-end text-xs uppercase tracking-widest border-b border-fashion-white text-fashion-white pb-1">
                                    View Lookbook
                                </a>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="font-serif text-3xl md:text-4xl group-hover:italic transition-all duration-300">
                                    {project.title}
                                </h3>
                                <span className="text-xs font-mono text-fashion-grey">00{index + 1}</span>
                            </div>

                            <p className="font-sans text-sm text-fashion-charcoal/70 leading-relaxed mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[10px] uppercase tracking-wider border border-fashion-charcoal/20 px-2 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collection;
