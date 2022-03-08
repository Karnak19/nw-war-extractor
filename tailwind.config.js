module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        discord: '#5865F2',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['emerald', 'forest'],
    darkTheme: 'forest',
  },
};
