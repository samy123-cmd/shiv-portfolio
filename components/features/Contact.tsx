"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion-config";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="section-spacing bg-charcoal text-ivory">
            <div className="container-padding max-w-content mx-auto">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Main Heading */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight">
                        Let&apos;s Build Something{" "}
                        <span className="text-gradient-gold">Incredible</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-ivory/70 leading-relaxed mb-12">
                        Whether you&apos;re looking to architect a data platform, optimize
                        your infrastructure, or just want to connect—I&apos;d love to hear
                        from you.
                    </p>

                    {/* Contact Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <a
                            href="mailto:your.email@example.com"
                            className="group inline-flex items-center gap-3 bg-deep-gold hover:bg-yellow-600 text-soft-black px-8 py-4 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="font-sans font-medium">Email Me</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 border-2 border-ivory hover:bg-ivory hover:text-charcoal text-ivory px-8 py-4 transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="font-sans font-medium">LinkedIn</span>
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-ivory/10 mb-16" />

                    {/* Footer Grid */}
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {/* Column 1: Connect */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-ivory/50 mb-4 font-sans">
                                Connect
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ivory/70 hover:text-deep-gold transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ivory/70 hover:text-deep-gold transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ivory/70 hover:text-deep-gold transition-colors"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-ivory/50 mb-4 font-sans">
                                Quick Links
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#about"
                                        className="text-ivory/70 hover:text-deep-gold transition-colors font-sans"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-ivory/70 hover:text-deep-gold transition-colors font-sans"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#experience"
                                        className="text-ivory/70 hover:text-deep-gold transition-colors font-sans"
                                    >
                                        Experience
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Brand */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-ivory/50 mb-4 font-sans">
                                Brand
                            </h3>
                            <p className="text-sm text-ivory/70 leading-relaxed font-sans">
                                Shiv Shakti Mishra
                                <br />
                                Data Engineer & Architect
                                <br />
                                Based in India
                            </p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-16 pt-8 border-t border-ivory/10">
                        <p className="text-sm text-ivory/50 font-sans">
                            © {new Date().getFullYear()} Shiv Shakti Mishra. Crafted with
                            precision and care.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
