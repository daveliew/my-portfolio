module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': 'var(--midnight-blue)',
        'space-grey': 'var(--space-grey)',
        'dark-bg': 'var(--dark-bg)',
        'light-text': 'var(--light-text)',
      },
    },
  },
  plugins: [],
}
