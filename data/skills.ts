export type Skill = {
    name: string;
    level: number; // 0-100
    category: "ETL" | "Database" | "Cloud" | "Language" | "Tool";
    icon?: string;
};

export const skills: Skill[] = [
    { name: "IBM DataStage", level: 95, category: "ETL" },
    { name: "Informatica", level: 85, category: "ETL" },
    { name: "Snowflake", level: 90, category: "Database" },
    { name: "Oracle", level: 85, category: "Database" },
    { name: "SQL Server", level: 80, category: "Database" },
    { name: "SQL", level: 95, category: "Language" },
    { name: "Python", level: 80, category: "Language" },
    { name: "Unix Shell", level: 85, category: "Language" },
    { name: "Azure Data Factory", level: 80, category: "Cloud" },
    { name: "Kafka", level: 75, category: "Tool" },
    { name: "Control-M", level: 85, category: "Tool" },
    { name: "PySpark", level: 75, category: "Language" },
];
