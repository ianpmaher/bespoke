import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                custom8008: {
                    "bg-color": "#333a45",
                    "main-color": "#f44c7f",
                    "caret-color": "#f44c7f",
                    "sub-color": "#939eae",
                    "sub-alt-color": "#2e343d",
                    "text-color": "#e9ecf0",
                    "error-color": "#da3333",
                    "error-extra-color": "#791717",
                    "colorful-error-color": "#c5da33",
                    "colorful-error-extra-color": "#849224",
                },
            },
        },
    },
    plugins: [],
};
export default config;
