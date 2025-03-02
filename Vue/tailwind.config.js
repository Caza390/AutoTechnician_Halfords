module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'halfords-orange': {
          '50': '#fff8eb',
          '100': '#ffecc6',
          '200': '#ffd688',
          '300': '#ffbc4a',
          '400': '#ff9e18',  //Logo
          '500': '#f97d07',
          '600': '#dd5802',
          '700': '#b73a06',
          '800': '#942c0c',
          '900': '#7a250d',
          '950': '#461002',
        },
        'halfords-background': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#242424',  //Grey Background
        }
      },

      spacing: {
        '5px' : '5px',
        '20px' : '20px',
        '19': '4.75rem'
      },
    },
  },
  plugins: [],
}
