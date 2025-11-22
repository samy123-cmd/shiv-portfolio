"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Database, Network, Code2 } from "lucide-react";
import { useSound } from "@/hooks/useSound";

type Character = {
    id: string;
    name: string;
    role: string;
    description: string;
    stats: {
        intelligence: number;
        strength: number;
        agility: number;
        wisdom: number;
    };
    icon: React.ElementType;
    color: string;
};

const characters: Character[] = [
    {
        id: "data-engineer",
        name: "The Architect",
        role: "Data Engineer",
        description: "Master of pipelines and large-scale data processing. Builds robust structures to withstand any data load.",
        stats: { intelligence: 9, strength: 8, agility: 5, wisdom: 7 },
        icon: Database,
        color: "text-retro-primary",
    },
    {
        id: "integration-spec",
        name: "The Connector",
        role: "Integration Specialist",
        description: "Weaves complex systems together. fluent in API, Kafka, and legacy protocols.",
        stats: { intelligence: 7, strength: 6, agility: 9, wisdom: 8 },
        icon: Network,
        color: "text-retro-yellow",
    },
    {
        id: "full-stack",
        name: "The Builder",
        role: "Full Stack Dev",
        description: "Versatile creator. Can craft user interfaces and server logic with equal proficiency.",
        stats: { intelligence: 8, strength: 6, agility: 8, wisdom: 6 },
        icon: Code2,
        color: "text-retro-green",
    },
];

export const CharacterSelect = ({ onSelect }: { onSelect: (char: Character) => void }) => {
    const [selectedId, setSelectedId] = useState<string>(characters[0].id);
    const [displayedStats, setDisplayedStats] = useState(characters[0].stats);
    const { playSound } = useSound();

    const selectedChar = characters.find((c) => c.id === selectedId)!;

    // Rolling stats effect
    useEffect(() => {
        let interval: NodeJS.Timeout;
        let counter = 0;
        const targetStats = selectedChar.stats;

        interval = setInterval(() => {
            if (counter > 5) {
                setDisplayedStats(targetStats);
                clearInterval(interval);
                return;
            }

            setDisplayedStats({
                intelligence: Math.floor(Math.random() * 10) + 1,
                strength: Math.floor(Math.random() * 10) + 1,
                agility: Math.floor(Math.random() * 10) + 1,
                wisdom: Math.floor(Math.random() * 10) + 1,
            });

            playSound("type");
            counter++;
        }, 50);

        return () => clearInterval(interval);
    }, [selectedId, selectedChar, playSound]);

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h2 className="text-3xl text-center font-pixel text-retro-text mb-8 animate-pulse text-shadow-retro">CHOOSE YOUR CHARACTER</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Character List */}
                <div className="space-y-4">
                    {characters.map((char) => (
                        <motion.div
                            key={char.id}
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                playSound("click");
                                setSelectedId(char.id);
                            }}
                            onMouseEnter={() => playSound("hover")}
                            className={cn(
                                "cursor-pointer border-4 p-4 flex items-center space-x-4 transition-all duration-200",
                                selectedId === char.id
                                    ? "border-retro-primary bg-retro-accent/50 shadow-[0_0_15px_rgba(0,255,0,0.5)]"
                                    : "border-retro-secondary bg-retro-bg hover:border-retro-text hover:bg-retro-accent/20"
                            )}
                        >
                            <div className={cn("p-2 rounded-full border-2", char.color)}>
                                <char.icon className="w-12 h-12" />
                            </div>
                            <div>
                                <h3 className="font-pixel text-lg text-retro-text">{char.role}</h3>
                                <p className="font-mono text-sm text-retro-text/70">{char.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Character Details */}
                <div className="border-4 border-retro-text p-6 bg-retro-bg relative overflow-hidden group">
                    {/* Glitch Overlay */}
                    <div className="absolute inset-0 bg-retro-primary/5 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-100" />

                    <div className="absolute top-0 right-0 p-2">
                        <span className="font-pixel text-xs text-retro-text/50">Lvl. 7</span>
                    </div>

                    <div className="flex flex-col items-center mb-6 relative z-10">
                        <motion.div
                            key={selectedChar.id}
                            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className={cn("p-6 rounded-full border-4 mb-4 bg-retro-bg", selectedChar.color)}
                        >
                            <selectedChar.icon className="w-24 h-24 animate-pulse" />
                        </motion.div>
                        <h3 className="font-pixel text-2xl text-retro-text mb-2">{selectedChar.role}</h3>
                        <p className="font-mono text-center text-retro-text/80 min-h-[3rem]">{selectedChar.description}</p>
                    </div>

                    <div className="space-y-3 font-mono relative z-10">
                        {Object.entries(displayedStats).map(([stat, value]) => (
                            <div key={stat} className="flex items-center">
                                <span className="w-24 text-retro-text uppercase text-sm">{stat}</span>
                                <div className="flex-1 h-4 bg-retro-secondary rounded-full overflow-hidden border border-retro-text/30">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${value * 10}%` }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={cn("h-full relative", selectedChar.color.replace('text-', 'bg-'))}
                                    >
                                        <div className="absolute top-0 right-0 w-1 h-full bg-white/50 animate-pulse" />
                                    </motion.div>
                                </div>
                                <span className="ml-2 text-retro-text w-6 text-right">{value}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            playSound("success");
                            onSelect(selectedChar);
                        }}
                        onMouseEnter={() => playSound("hover")}
                        className="w-full mt-8 py-3 bg-retro-primary text-retro-bg font-pixel text-lg hover:bg-retro-text hover:text-retro-primary border-2 border-transparent hover:border-retro-primary transition-all animate-bounce"
                    >
                        START GAME
                    </button>
                </div>
            </div>
        </div>
    );
};
