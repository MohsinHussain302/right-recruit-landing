/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#004D3D', light: '#0A5C4A' },
        mint: { DEFAULT: '#8EE8B2', light: '#A8F0C4', dark: '#5FC98A' },
        surface: '#F9FBF9',
        border: '#E5EDE9',
        primary: { DEFAULT: '#004D3D', foreground: '#FFFFFF' },
        secondary: { DEFAULT: '#F9FBF9', foreground: '#004D3D' },
        destructive: { DEFAULT: '#DC2626', foreground: '#FFFFFF' },
        accent: { DEFAULT: '#F9FBF9', foreground: '#004D3D' },
        ring: '#8EE8B2',
        input: '#E5EDE9',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: { lg: '12px', md: '8px', sm: '6px' },
    },
  },
  plugins: [],
}
