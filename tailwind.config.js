/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '30px',
      screens: { desktop: '1200px' }
    },
    extend: {
      colors: { primary: '#EFF0F2', secondary: '#F8FAFA' },
      fontFamily: {
        raleway: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        merriweather: ['Merriweather', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
