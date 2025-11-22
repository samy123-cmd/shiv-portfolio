"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/useSound";

export const StartScreen = ({ onStart }: { onStart: () => void }) => {
    const { playSound } = useSound();
    const [showPressStart, setShowPressStart] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPressStart((prev) => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const handleStart = () => {
        playSound("success");
        onStart();
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-retro-bg text-retro-text font-pixel cursor-pointer" onClick={handleStart}>
            <div className="absolute inset-0 bg-black/50 z-0" />

            <div className="relative z-10 text-center">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="text-4xl md:text-6xl text-retro-primary mb-4 text-shadow-retro"
                >
                    SHIV.EXE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-retro-text/70 mb-12 font-mono"
                >
                    INTERACTIVE PORTFOLIO SYSTEM v2.0
                </motion.p>

                <div className="h-8">
                    {showPressStart && (
                        <p className="text-xl md:text-2xl text-retro-yellow animate-pulse">
                            PRESS START / CLICK TO ENTER
                        </p>
                    )}
                </div>

                <div className="mt-16 text-xs text-retro-text/30 font-mono">
                    INSERT COIN (0/1)
                </div>
            </div>
        </div>
    );
};
