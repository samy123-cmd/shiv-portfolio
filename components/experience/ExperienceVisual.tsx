"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

export default function ExperienceVisual({ experience }: { experience: Experience }) {
    switch (experience.id) {
        case "cognizant":
            return (
                <TerminalWindow title="ETL_PIPELINE_MONITOR // KAFKA_TO_SNOWFLAKE">
                    <TypewriterLines
                        lines={[
                            "> INITIALIZING_STREAM_CONTEXT...",
                            "> CONNECTING_TO_BROKER: KAFKA_CLUSTER_01 [OK]",
                            "> SUBSCRIBING_TO_TOPIC: FIN_TRANSACTIONS",
                            "> BATCH_SIZE: 5000 RECORDS",
                            "> DETECTING_ANOMALIES...",
                            "> [INFO] ANOMALY_SCORE: 0.002 (NORMAL)",
                            "> TRANSFORMING_PAYLOAD (JSON -> PARQUET)...",
                            "> LOADING_TO_SNOWFLAKE: STAGE_FINANCE",
                            "> COMMIT_TRANSACTION: SUCCESS",
                            "> WAITING_FOR_NEXT_BATCH..."
                        ]}
                    />
                </TerminalWindow>
            );
        case "ust":
            return (
                <TerminalWindow title="UNIX_SHELL // AUTOMATION_CONTROLLER">
                    <TypewriterLines
                        lines={[
                            "$ ./run_daily_batch.sh --parallel",
                            "> CHECKING_RESOURCES...",
                            "> CPU_LOAD: 12% | MEMORY: 4GB_FREE",
                            "> ALLOCATING_NODES: [NODE_01, NODE_02, NODE_03]",
                            "> EXECUTING_DATASTAGE_JOB: DS_JOB_AGGREGATE",
                            "> PARTITIONING_METHOD: HASH",
                            "> STATUS: RUNNING...",
                            "> ...",
                            "> JOB_FINISHED_SUCCESSFULLY (TIME: 420ms)",
                            "> TRIGGERING_DOWNSTREAM_DEPENDENCIES..."
                        ]}
                    />
                </TerminalWindow>
            );
        case "capgemini":
            return (
                <TerminalWindow title="SQL_EDITOR // WAREHOUSE_BUILDER">
                    <TypewriterLines
                        lines={[
                            "-- EXECUTING DIMENSIONAL MODEL UPDATE",
                            "MERGE INTO DIM_CUSTOMER AS T",
                            "USING STG_CUSTOMER AS S",
                            "ON (T.CUST_ID = S.CUST_ID)",
                            "WHEN MATCHED AND T.HASH_DIFF <> S.HASH_DIFF THEN",
                            "  UPDATE SET",
                            "    T.END_DATE = CURRENT_DATE,",
                            "    T.IS_CURRENT = 'N';",
                            "-- INSERTING NEW RECORDS (SCD TYPE 2)",
                            "INSERT INTO DIM_CUSTOMER...",
                            "> ROWS_AFFECTED: 14,203",
                            "> COMMIT;"
                        ]}
                    />
                </TerminalWindow>
            );
        case "education":
            return (
                <TerminalWindow title="SYSTEM_BOOT // KNOWLEDGE_BASE">
                    <TypewriterLines
                        lines={[
                            "> POWER_ON_SELF_TEST...",
                            "> LOADING_KERNEL: COMPUTER_SCIENCE_CORE",
                            "> MOUNTING_MODULE: DATA_STRUCTURES [OK]",
                            "> MOUNTING_MODULE: ALGORITHMS [OK]",
                            "> MOUNTING_MODULE: DATABASE_SYSTEMS [OK]",
                            "> COMPILING_ASSETS...",
                            "> BUILD_COMPLETE",
                            "> SYSTEM_READY",
                            "> _"
                        ]}
                    />
                </TerminalWindow>
            );
        default:
            return null;
    }
}

// Reusable Terminal Component
function TerminalWindow({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="w-full max-w-md mx-auto bg-fashion-black border border-fashion-charcoal/50 rounded-sm overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-fashion-charcoal/20 border-b border-fashion-charcoal/50 px-4 py-2 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-fashion-gold uppercase">
                    {title}
                </span>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-fashion-charcoal" />
                    <div className="w-2 h-2 rounded-full bg-fashion-charcoal" />
                </div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm text-fashion-white/80 leading-relaxed min-h-[250px] flex flex-col justify-end">
                {children}
            </div>
        </div>
    );
}

// Typing Animation Component
function TypewriterLines({ lines }: { lines: string[] }) {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex >= lines.length) {
            // Reset animation after a delay
            const timeout = setTimeout(() => {
                setDisplayedLines([]);
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
            }, 3000);
            return () => clearTimeout(timeout);
        }

        const currentLine = lines[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines((prev) => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = "";
                    }
                    newLines[currentLineIndex] += currentLine[currentCharIndex];
                    return newLines;
                });
                setCurrentCharIndex((prev) => prev + 1);
            }, 30); // Typing speed
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }, 500); // Delay between lines
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, lines]);

    return (
        <div className="flex flex-col gap-1">
            {displayedLines.map((line, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <span className={line.startsWith(">") || line.startsWith("$") ? "text-fashion-gold" : "text-fashion-grey"}>
                        {line}
                    </span>
                </motion.div>
            ))}
            {/* Blinking Cursor */}
            {currentLineIndex < lines.length && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-fashion-gold ml-1 align-middle"
                />
            )}
        </div>
    );
}
