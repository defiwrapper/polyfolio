module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        greenPF: '#0AC186',
        green2PF: '#35DCB3',
        green3PF: '#10C7A2',
        green4PF: '#74DD9F',
        bluePF: '#6CAAF7',
        yellowPF: '#E1B33E',
        blueGrayPF: '#324154',
        grayPF: '#E1E8F0',
        footerText: '#CBD5E1',
        white2PF: '#F1F4F9',

        // Light & Dark
        whitePF: '#F9FAFC',
        darkPF: '#1E2B45',
        dark2PF: '#1D3245',
        
        // Inputs & Select
        grayTextDark: '#94A3B8',
        grayTextWhite: '#64748B',
        darkBlueBG: 'rgba(30,43,69,0.67)',
        borderColor: 'rgba(255,255,255,0.13)',
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
        Overpass: ['Overpass', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      screens: {
        '400px': '400px',
        '600px': '600px',
        '700px': '700px',
        '800px': '800px',
        '1000px': '1000px',
        '1200px': '1200px',
        '1860px': '1860px',
        '1600px': '1600px',
        '1800px': '1800px',
      },
      backgroundImage: {
        greenLG: 'linear-gradient(214.8deg, #35DCB3 5.04%, #10C7A2 76.98%)',
        green2LG: 'linear-gradient(235.49deg, #74DD9F 0%, #27C69F 87.27%);',
      }
    },
  },
  plugins: [],
}
