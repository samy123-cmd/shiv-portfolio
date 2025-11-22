"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, GitCommit, Server, Cpu, Wifi } from "lucide-react";

export const MissionControl = ({ role }: { role: string }) => {
    const [metrics, setMetrics] = useState({
        cpu: 12,
        memory: 45,
        network: 120,
        uptime: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics({
                cpu: Math.floor(Math.random() * 30) + 10,
                memory: Math.floor(Math.random() * 20) + 40,
                network: Math.floor(Math.random() * 100) + 50,
                uptime: metrics.uptime + 1,
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [metrics.uptime]);

    return (
        <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-retro-text">
            {/* Status Panel */}
            <div className="col-span-1 md:col-span-2 bg-retro-bg border-2 border-retro-secondary p-4 rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-retro-primary animate-pulse" />
                <h3 className="text-xl font-pixel mb-4 flex items-center">
                    <Activity className="mr-2 text-retro-green" /> SYSTEM STATUS: ONLINE
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-retro-accent/50 p-3 rounded border border-retro-secondary">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">CPU LOAD</span>
                            <Cpu className="w-4 h-4 text-retro-primary" />
                        </div>
                        <div className="text-2xl font-pixel">{metrics.cpu}%</div>
                        <div className="w-full h-2 bg-retro-secondary mt-2 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${metrics.cpu}%` }}
                                className="h-full bg-retro-primary"
                            />
                        </div>
                    </div>
                    <div className="bg-retro-accent/50 p-3 rounded border border-retro-secondary">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">MEMORY</span>
                            <Server className="w-4 h-4 text-retro-yellow" />
                        </div>
                        <div className="text-2xl font-pixel">{metrics.memory}%</div>
                        <div className="w-full h-2 bg-retro-secondary mt-2 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${metrics.memory}%` }}
                                className="h-full bg-retro-yellow"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile / Role Info */}
            <div className="bg-retro-bg border-2 border-retro-secondary p-4 rounded flex flex-col justify-between">
                <div>
                    <h3 className="text-sm text-retro-text/60 mb-1">ACTIVE AGENT</h3>
                    <h2 className="text-2xl font-pixel text-retro-primary">{role.toUpperCase()}</h2>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>LEVEL</span>
                        <span className="text-retro-green">07</span>
                    </div>
                    <div className="flex justify-between">
                        <span>EXP</span>
                        <span className="text-retro-yellow">8,450 / 10,000</span>
                    </div>
                    <div className="flex justify-between">
                        <span>RANK</span>
                        <span className="text-retro-primary">ELITE</span>
                    </div>
                </div>
            </div>

            {/* GitHub Activity Feed (Mock) */}
            <div className="col-span-1 md:col-span-3 bg-retro-bg border-2 border-retro-secondary p-4 rounded">
                <h3 className="text-lg font-pixel mb-4 flex items-center">
                    <GitCommit className="mr-2 text-retro-text" /> LATEST TRANSMISSIONS
                </h3>
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center text-sm p-2 hover:bg-retro-accent/30 transition-colors rounded">
                            <span className="text-retro-green mr-4 font-pixel">[{new Date().toLocaleTimeString()}]</span>
                            <span className="text-retro-yellow mr-2">feat:</span>
                            <span>Optimized ETL pipeline for faster data ingestion</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
