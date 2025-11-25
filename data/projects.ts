export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    difficulty: "EASY" | "MEDIUM" | "HARD" | "LEGENDARY";
    xp: number;
    type: "MAIN QUEST" | "SIDE QUEST";
    image?: string;
};

export const projects: Project[] = [
    {
        id: "portfolio",
        title: "Interactive Portfolio",
        description: "A retro-themed interactive portfolio website with terminal, character selection, and gamified elements.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        github: "https://github.com/unpairedelectron/shiv-portfolio",
        difficulty: "HARD",
        xp: 5000,
        type: "MAIN QUEST",
        image: "/images/project-1.png",
    },
    {
        id: "etl-pipeline",
        title: "Enterprise ETL Pipeline",
        description: "High-performance DataStage pipeline processing 1TB+ daily data for a financial client.",
        tech: ["DataStage", "SQL", "Unix", "Control-M"],
        difficulty: "LEGENDARY",
        xp: 10000,
        type: "MAIN QUEST",
        image: "/images/project-2.png",
    },
    {
        id: "anomaly-detection",
        title: "AI Anomaly Detection",
        description: "Python script using statistical models to detect data anomalies in real-time streams.",
        tech: ["Python", "Pandas", "Scikit-learn"],
        difficulty: "MEDIUM",
        xp: 3500,
        type: "SIDE QUEST",
        image: "/images/project-3.png",
    },
    {
        id: "kafka-stream",
        title: "Real-time Ingestion",
        description: "Kafka consumer setup for ingesting transaction logs into Snowflake.",
        tech: ["Kafka", "Snowflake", "Java"],
        difficulty: "HARD",
        xp: 4500,
        type: "SIDE QUEST",
        image: "/images/project-2.png",
    },
];
