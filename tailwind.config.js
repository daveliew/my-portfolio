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
      },
      fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
        'helvetica': ['"Helvetica World"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}