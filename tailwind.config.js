module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['emerald', 'forest'],
    darkTheme: 'forest',
  },
};
