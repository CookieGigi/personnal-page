import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        surface: "light-dark(#FBFCFE, #191C1E)",
        background: "light-dark(#FBFCFE, #191C1E)",
        outline: "#light-dark(#70787D,8A9297)",
        shadow: "light-dark(#000000, #000000)",
        onSurface: "light-dark(#191C1E,#E1E2E4)",
        primaryContainer: "light-dark(#BCE9FF,#004d63)",
        onPrimaryContainer: "light-dark(#001F2A,#bce9ff)",
        secondaryContainer: "light-dark(#D0E6F2, #354A53)",
        onSecondaryContainer: "light-dark(#081E27, #D0E6F2)",
        tertiaryContainer: "light-dark(#E2DFFF, #454364)",
        onTertiaryContainer: "light-dark(#191836, #E2DFFF)",
      },
    },
  },
  plugins: [],
} satisfies Config;
