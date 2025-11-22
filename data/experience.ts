export type Experience = {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    tech: string[];
    color: string; // Line color
};

export const experiences: Experience[] = [
    {
        id: "cognizant",
        role: "Associate",
        company: "Cognizant Technology Solutions",
        period: "Nov 2022 – Current",
        location: "Pune, MH",
        description: [
            "Designed & optimized large-scale DataStage ETL pipelines, improving batch performance by 30%.",
            "Led DataStage → Snowflake migration for enterprise finance reporting workloads.",
            "Integrated Kafka streaming workflows for near real-time ingestion.",
            "Built AI-assisted anomaly detection scripts."
        ],
        tech: ["DataStage", "Snowflake", "ADF", "Kafka", "PySpark"],
        color: "#e94560", // Red line
    },
    {
        id: "ust",
        role: "Software Developer III",
        company: "UST Global",
        period: "Jan 2022 – Nov 2022",
        location: "Noida, UP",
        description: [
            "Developed and optimized DataStage parallel jobs for high-volume data processing.",
            "Automated workflows using Unix Shell Scripting + Control-M.",
            "Coordinated with QA and business teams to resolve data quality issues."
        ],
        tech: ["DataStage", "Oracle", "Unix", "Control-M"],
        color: "#f8e71c", // Yellow line
    },
    {
        id: "capgemini",
        role: "Associate Consultant",
        company: "Capgemini Technology Services",
        period: "Aug 2018 – Dec 2021",
        location: "Bengaluru, KA",
        description: [
            "Built and maintained DataStage ETL pipelines supporting enterprise reporting.",
            "Implemented SCD Type 1 & Type 2 logic and dimensional modelling patterns.",
            "Supported UAT, production stability, and performance improvement cycles."
        ],
        tech: ["DataStage", "DB2", "Control-M", "SQL"],
        color: "#00ff41", // Green line
    },
    {
        id: "education",
        role: "Bachelor of Technology",
        company: "GLA University",
        period: "Graduated: 2018",
        location: "Mathura, IN",
        description: ["Graduated with a degree in Technology."],
        tech: ["Computer Science"],
        color: "#0f3460", // Blue line
    },
];
