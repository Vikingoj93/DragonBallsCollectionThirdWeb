/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '640px',   // Small devices (mobile)
        md: '768px',   // Medium devices (tablets)
        lg: '1024px',  // Large devices (desktops)
        xl: '1280px',  // Extra large devices (large desktops)
      }
    },
    colors: {
      'orange': '#ff8400',
      'yellow': '#E8AA42',
      'navy': '#025464',
      'white': '#F8F1F1',
    }
  },
  plugins: [],
}
