"use client";

import React from "react";
import { motion } from "framer-motion";

const nodes = [
    { id: "ingestion", label: "Ingestion (API)", metric: "Throughput: 1.2GB/s" },
    { id: "processing", label: "Processing (Spark)", metric: "Latency: 12ms" },
    { id: "storage", label: "Storage (Snowflake)", metric: "Data: 1.5PB" },
];

export default function EtlBackground() {
    return (
        <div className="absolute inset-0 w-full h-full flex flex-col justify-end pb-32 md:pb-40 pointer-events-none z-0 overflow-hidden">
            {/* Background Gradient Mesh (Subtle) */}
            <div className="absolute inset-0 bg-fashion-black opacity-90" />

            <div className="relative w-full max-w-5xl mx-auto flex items-center justify-between px-4 md:px-20 pointer-events-auto">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-fashion-charcoal/30 -z-10">
                    {/* Moving Particles */}
                    <motion.div
                        className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-fashion-gold to-transparent opacity-50"
                        animate={{ left: ["-10%", "110%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-fashion-white to-transparent opacity-30"
                        animate={{ left: ["-10%", "110%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
                    />
                </div>

                {nodes.map((node, index) => (
                    <Node key={node.id} node={node} index={index} />
                ))}
            </div>
        </div>
    );
}

function Node({ node, index }: { node: { id: string; label: string; metric: string }; index: number }) {
    return (
        <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
        >
            {/* Node Circle */}
            <motion.div
                className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-fashion-gold/50 bg-fashion-black relative z-10 flex items-center justify-center"
                whileHover={{ scale: 1.5, borderColor: "#D4AF37", boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
            >
                <div className="w-1.5 h-1.5 bg-fashion-gold rounded-full" />
            </motion.div>

            {/* Label */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center w-32">
                <p className="text-[10px] uppercase tracking-widest text-fashion-grey group-hover:text-fashion-gold transition-colors duration-300">
                    {node.label}
                </p>
            </div>

            {/* Metric Tooltip (Hover) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-fashion-charcoal/90 border border-fashion-gold/20 px-3 py-1.5 rounded backdrop-blur-sm whitespace-nowrap">
                    <p className="text-[10px] font-mono text-fashion-gold">{node.metric}</p>
                </div>
            </div>
        </motion.div>
    );
}
