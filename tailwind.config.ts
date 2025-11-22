import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                retro: {
                    bg: "#1a1a2e", // Dark blue/purple background
                    primary: "#e94560", // Neon red/pink
                    secondary: "#0f3460", // Dark blue
                    accent: "#16213e", // Darker blue
                    text: "#eaeaea", // Off-white
                    green: "#00ff41", // Terminal green
                    yellow: "#f8e71c", // Arcade yellow
                },
            },
            fontFamily: {
                pixel: ['var(--font-press-start-2p)', 'monospace'],
                mono: ['var(--font-vt323)', 'monospace'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "conic-gradient":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
