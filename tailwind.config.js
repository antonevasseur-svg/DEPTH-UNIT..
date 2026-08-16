/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 'ink-950': '#050509', 'ink-900': '#0a0a10', 'cyan-electric': '#4df5ff', 'violet-glow': '#7a3cff', 'magenta-hot': '#ff2bd6' },
      fontFamily: { display: ['Space Grotesk', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
    },
  },
  plugins: [],
};
