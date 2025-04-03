module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
    theme: {
      extend: {
        fontFamily: {
          'rubik': ['Rubik'],
        },
        colors: {
          'custom-purple': 'rgba(60, 8, 118, 0.8)',
          'custom-pink': 'rgba(250, 0, 118, 0.8)',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(135deg, rgba(60, 8, 118, 0.8) 0%, rgba(250, 0, 118, 0.8) 100%)',
        },
      },
    },
    plugins: [
      tailwindcss(),
    ],
  }