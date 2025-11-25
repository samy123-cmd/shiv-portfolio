import React from "react";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const Capabilities = () => {
    // Group skills by category
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <section className="bg-fashion-black text-fashion-white py-24 md:py-32">
            <div className="px-6 md:px-24 mb-16">
                <h2 className="font-serif text-5xl md:text-7xl mb-4">Capabilities</h2>
                <div className="w-full h-[1px] bg-fashion-charcoal" />
                <div className="flex justify-between mt-2 text-xs uppercase tracking-widest text-fashion-grey">
                    <span>Technical Arsenal</span>
                    <span>Core Competencies</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
                {categories.map((category) => (
                    <div key={category} className="flex flex-col gap-6">
                        <h3 className="font-serif text-2xl md:text-3xl text-fashion-gold italic border-b border-fashion-charcoal/50 pb-2">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills
                                .filter((s) => s.category === category)
                                .map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="px-4 py-2 border border-fashion-charcoal rounded-full text-sm font-sans tracking-wide hover:bg-fashion-white hover:text-fashion-black transition-colors duration-300 cursor-default"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Capabilities;
