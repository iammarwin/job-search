/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-gray-2': '#f8f9fa',
        'brand-gray-3': '#80868b',
        'brand-blue-1': '#1a73e8',
        'brand-blue-2': '#4285f4',
        'brand-blue-3': '#1b66c9',
        'brand-green-1': '#137333'
      },
      boxShadow: {
        blue: '0 1px 3px 1px rgba(66,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)',
        bhover: '0 1px 3px 1px rgba(66,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)'
      }
    }
  },
  plugins: []
}
