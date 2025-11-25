"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion-config";

export const About = () => {
    return (
        <section id="about" className="section-spacing bg-grey-100">
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
                            About Me
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif text-charcoal tracking-tight">
                        Building the{" "}
                        <span className="text-gradient-gold">infrastructure</span> behind
                        great products
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Left: Personal Narrative (3 columns) */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <motion.p
                            variants={staggerItem}
                            className="text-lg md:text-xl leading-relaxed text-charcoal/80"
                        >
                            I&apos;m a data engineer who believes that elegant code and robust
                            architecture aren&apos;t just technical requirements—they&apos;re a
                            craft.
                        </motion.p>

                        <motion.p
                            variants={staggerItem}
                            className="text-base md:text-lg leading-relaxed text-charcoal/70"
                        >
                            Over the years, I&apos;ve architected data pipelines that process
                            billions of events, designed cloud infrastructure that scales
                            effortlessly, and built analytics platforms that empower teams to
                            make data-driven decisions with confidence.
                        </motion.p>

                        <motion.p
                            variants={staggerItem}
                            className="text-base md:text-lg leading-relaxed text-charcoal/70"
                        >
                            My approach blends engineering rigor with creative
                            problem-solving. Whether I&apos;m optimizing a database query,
                            orchestrating complex ETL workflows, or designing a new data
                            model, I focus on building systems that are not just
                            functional—but beautiful in their simplicity and power.
                        </motion.p>

                        {/* Pull Quote */}
                        <motion.blockquote
                            variants={staggerItem}
                            className="border-l-4 border-deep-gold pl-6 py-4 my-8"
                        >
                            <p className="text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed">
                                &ldquo;Great engineering is invisible. It just works,
                                effortlessly and elegantly.&rdquo;
                            </p>
                        </motion.blockquote>

                        <motion.p
                            variants={staggerItem}
                            className="text-base md:text-lg leading-relaxed text-charcoal/70"
                        >
                            When I&apos;m not engineering data solutions, you&apos;ll find me
                            exploring emerging technologies, contributing to open-source
                            projects, or mentoring aspiring engineers.
                        </motion.p>
                    </motion.div>

                    {/* Right: Quick Facts & Timeline (2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Quick Facts */}
                        <div className="bg-ivory p-8 border border-charcoal/10">
                            <h3 className="text-sm uppercase tracking-widest text-charcoal/50 mb-6 font-sans">
                                Quick Facts
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-charcoal/50 mb-1 font-sans">
                                        Location
                                    </dt>
                                    <dd className="text-base text-charcoal font-sans">
                                        Based in India
                                    </dd>
                                </div>
                                <div className="divider-line my-3" />
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-charcoal/50 mb-1 font-sans">
                                        Experience
                                    </dt>
                                    <dd className="text-base text-charcoal font-sans">
                                        3+ Years
                                    </dd>
                                </div>
                                <div className="divider-line my-3" />
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-charcoal/50 mb-1 font-sans">
                                        Specialization
                                    </dt>
                                    <dd className="text-base text-charcoal font-sans">
                                        Data Engineering & Cloud Architecture
                                    </dd>
                                </div>
                            </div>
                        </div>

                        {/* Key Milestones */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-charcoal/50 mb-6 font-sans">
                                Key Milestones
                            </h3>
                            <ol className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="text-lg font-serif text-deep-gold shrink-0">
                                        01
                                    </span>
                                    <div>
                                        <p className="text-sm text-charcoal/60 font-sans">
                                            Built enterprise-scale data pipelines processing 10M+
                                            records daily
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-lg font-serif text-deep-gold shrink-0">
                                        02
                                    </span>
                                    <div>
                                        <p className="text-sm text-charcoal/60 font-sans">
                                            Architected cloud infrastructure reducing costs by 40%
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-lg font-serif text-deep-gold shrink-0">
                                        03
                                    </span>
                                    <div>
                                        <p className="text-sm text-charcoal/60 font-sans">
                                            Led data transformation initiatives across multiple
                                            organizations
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-lg font-serif text-deep-gold shrink-0">
                                        04
                                    </span>
                                    <div>
                                        <p className="text-sm text-charcoal/60 font-sans">
                                            Certified in AWS, Azure, and modern data technologies
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
