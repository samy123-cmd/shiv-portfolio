"use client";

import React, { useRef, useEffect } from "react";
import { useTerminal } from "@/hooks/useTerminal";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Terminal = () => {
    const { history, input, setInput, executeCommand } = useTerminal();
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            executeCommand(input);
            setInput("");
        }
    };

    return (
        <div
            className="w-full max-w-3xl mx-auto bg-retro-bg border-4 border-retro-secondary rounded-lg p-4 font-pixel text-retro-text shadow-retro overflow-hidden relative"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="absolute top-0 left-0 w-full h-8 bg-retro-secondary flex items-center px-2 space-x-2">
                <div className="w-3 h-3 rounded-full bg-retro-primary"></div>
                <div className="w-3 h-3 rounded-full bg-retro-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                <span className="ml-4 text-xs text-retro-text opacity-70">USER@SHIV-PORTFOLIO:~</span>
            </div>

            <div className="mt-8 h-[400px] overflow-y-auto scrollbar-hide space-y-2">
                <div className="text-retro-green mb-4">
                    <p>Welcome to Shiv's Portfolio v1.0.0</p>
                    <p>Type 'help' to get started.</p>
                </div>

                {history.map((entry, index) => (
                    <div key={index} className="space-y-1">
                        <div className="flex items-center">
                            <span className="text-retro-primary mr-2">➜</span>
                            <span className="text-retro-yellow">~</span>
                            <span className="ml-2">{entry.command}</span>
                        </div>
                        <div className="ml-6 text-retro-text opacity-90">
                            {entry.output}
                        </div>
                    </div>
                ))}

                <div className="flex items-center">
                    <span className="text-retro-primary mr-2">➜</span>
                    <span className="text-retro-yellow">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none ml-2 flex-1 text-retro-text font-pixel"
                        autoFocus
                    />
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-3 h-5 bg-retro-text inline-block ml-1"
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};
