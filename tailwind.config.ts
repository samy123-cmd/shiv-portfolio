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
                fashion: {
                    black: "#000000", // Midnight Black
                    white: "#FAF9F7", // Atelier Off-White
                    gold: "#D4AF37", // Gold Thread
                    charcoal: "#1A1A1A", // Charcoal
                    grey: "#9A9A9A", // Muted Grey
                },
            },
            fontFamily: {
                serif: ['var(--font-cormorant)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            spacing: {
                'xs': '8px',
                'sm': '16px',
                'md': '32px',
                'lg': '64px',
                'xl': '128px',
                '2xl': '256px',
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
