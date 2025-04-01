module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-black': 'var(--space-black)',
        'burgundy': 'var(--burgundy)',
        'light-burgundy': 'var(--light-burgundy)',
        'off-white': 'var(--off-white)',
        'dark-gray': 'var(--dark-gray)',
        'primary-yellow': 'var(--primary-yellow)',
        'primary-yellow-dark': 'var(--primary-yellow-dark)',
        'primary-yellow-10': 'var(--primary-yellow-10)',
        // New Tech-AI Fusion Color Palette
        'deep-navy': 'var(--deep-navy)',
        'twilight-purple': 'var(--twilight-purple)',
        'tech-burgundy': 'var(--tech-burgundy)',
        'warm-sand': 'var(--warm-sand)',
        'cool-mint': 'var(--cool-mint)',
        'vibrant-teal': 'var(--vibrant-teal)',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'sans-serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
      },
      boxShadow: {
        'ambient': 'var(--ambient-shadow)',
        'hover-glow': 'var(--hover-glow)',
        'active-pulse': 'var(--active-pulse)',
      },
      backgroundImage: {
        'depth-gradient': 'var(--depth-gradient)',
        'accent-gradient': 'var(--accent-gradient)',
        'warm-gradient': 'var(--warm-gradient)',
        'reflection': 'var(--reflection)',
      },
    },
  },
  plugins: [],
}
