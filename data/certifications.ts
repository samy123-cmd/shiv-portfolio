export type Certification = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    link?: string;
    icon: "cloud" | "data" | "code" | "shield";
    unlocked: boolean;
};

export const certifications: Certification[] = [
    {
        id: "databricks-genai",
        title: "Generative AI Engineer Associate",
        issuer: "Databricks",
        date: "2024",
        link: "https://credentials.databricks.com/1a2cc55a-ba6c-4c8b-9713-4290326beaba",
        icon: "code",
        unlocked: true,
    },
    {
        id: "azure-data",
        title: "Azure Data Fundamentals",
        issuer: "Microsoft",
        date: "2023",
        icon: "cloud",
        unlocked: true,
    },
    {
        id: "aws-cloud",
        title: "Certified Cloud Practitioner",
        issuer: "AWS",
        date: "2023",
        icon: "cloud",
        unlocked: true,
    },
    {
        id: "datastage",
        title: "DataStage Developer",
        issuer: "IBM",
        date: "2019",
        icon: "data",
        unlocked: true,
    },
    {
        id: "safe",
        title: "SAFe 5 Practitioner",
        issuer: "Scaled Agile",
        date: "2022",
        icon: "shield",
        unlocked: true,
    },
];

export const education = [
    {
        degree: "Bachelor of Technology",
        school: "GLA University, Mathura",
        year: "2018",
    },
];
