"use client";

import React, { useState } from "react";
import { Terminal } from "./Terminal";
import { CharacterSelect } from "./CharacterSelect";
import { MissionControl } from "./MissionControl";
import { StartScreen } from "./StartScreen";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/hooks/useSound";

type HeroState = "START" | "TERMINAL" | "CHAR_SELECT" | "DASHBOARD";

export const Hero = () => {
    const [state, setState] = useState<HeroState>("START");
    const [selectedRole, setSelectedRole] = useState("Data Engineer");
    const { playSound } = useSound();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
            <AnimatePresence mode="wait">
                {state === "START" && (
                    <motion.div key="start" exit={{ opacity: 0 }}>
                        <StartScreen onStart={() => setState("TERMINAL")} />
                    </motion.div>
                )}

                {state === "TERMINAL" && (
                    <motion.div
                        key="terminal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="w-full"
                    >
                        <Terminal />
                        <div className="text-center mt-8">
                            <button
                                onClick={() => {
                                    playSound("click");
                                    setState("CHAR_SELECT");
                                }}
                                onMouseEnter={() => playSound("hover")}
                                className="text-retro-text/50 text-xs hover:text-retro-primary font-pixel animate-pulse"
                            >
                                [ BYPASS SECURITY PROTOCOLS ]
                            </button>
                        </div>
                    </motion.div>
                )}

                {state === "CHAR_SELECT" && (
                    <motion.div
                        key="char-select"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="w-full"
                    >
                        <CharacterSelect onSelect={(char) => {
                            playSound("success");
                            setSelectedRole(char.role);
                            setState("DASHBOARD");
                        }} />
                    </motion.div>
                )}

                {state === "DASHBOARD" && (
                    <motion.div
                        key="dashboard"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full"
                    >
                        <MissionControl role={selectedRole} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
