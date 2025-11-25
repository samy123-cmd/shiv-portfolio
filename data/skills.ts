export type Skill = {
    name: string;
    level: number; // 0-100
    category: "ETL" | "Database" | "Cloud" | "Language" | "Tool" | "AI/ML";
    icon?: string;
};

export const skills: Skill[] = [
    // ETL
    { name: "IBM DataStage", level: 95, category: "ETL" },
    { name: "Informatica", level: 85, category: "ETL" },
    { name: "Talend", level: 80, category: "ETL" },
    { name: "ODI", level: 75, category: "ETL" },

    // Database
    { name: "Snowflake", level: 95, category: "Database" },
    { name: "Teradata", level: 85, category: "Database" },
    { name: "Confluent Kafka", level: 80, category: "Database" },
    { name: "Oracle", level: 85, category: "Database" },
    { name: "SQL Server", level: 80, category: "Database" },

    // Cloud
    { name: "Databricks", level: 90, category: "Cloud" },
    { name: "AWS", level: 85, category: "Cloud" },
    { name: "Azure Data Factory", level: 80, category: "Cloud" },

    // AI/ML
    { name: "Generative AI", level: 90, category: "AI/ML" },
    { name: "RAG Applications", level: 90, category: "AI/ML" },
    { name: "LLM Chains", level: 85, category: "AI/ML" },
    { name: "Vector Search", level: 85, category: "AI/ML" },
    { name: "Model Serving", level: 80, category: "AI/ML" },
    { name: "MLflow", level: 85, category: "AI/ML" },
    { name: "Unity Catalog", level: 85, category: "AI/ML" },

    // Languages
    { name: "SQL", level: 95, category: "Language" },
    { name: "Python", level: 90, category: "Language" },
    { name: "Unix Shell", level: 85, category: "Language" },
    { name: "PySpark", level: 85, category: "Language" },

    // Tools
    { name: "Git", level: 90, category: "Tool" },
    { name: "Jira", level: 85, category: "Tool" },
    { name: "Confluence", level: 85, category: "Tool" },
    { name: "ServiceNow", level: 80, category: "Tool" },
    { name: "Autosys", level: 85, category: "Tool" },
    { name: "Control-M", level: 85, category: "Tool" },
];
