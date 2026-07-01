/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#041329',
        'ink-deep': '#020c1b',
        panel: '#112240',
        'panel-soft': '#172b4d',
        aqua: '#64ffda',
        cyan: '#00d2ff',
        violet: '#b388ff',
        slate: '#8892b0',
        mist: '#ccd6f6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(100, 255, 218, 0.13)',
        panel: '0 24px 70px rgba(2, 12, 27, 0.45)',
      },
    },
  },
  plugins: [],
};
