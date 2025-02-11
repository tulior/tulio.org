module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        mono: ['Roboto Mono', 'ui-monospace'],
      },
      colors: {
        primary: '#0369A1',
        secondary: '#4b5563',
        background: '#f8fafc',
        card: '#ffffff',
        'text-primary': '#1f2937',
        'text-secondary': '#374151',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

