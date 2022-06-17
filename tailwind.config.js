// tailwind.config.js
module.exports = {
    content:[
      "./screens/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        sm: '380px',
        md: '420px',
        lg: '680px',
        // or maybe name them after devices for `tablet:flex-row`
        tablet: '1024px',
      },
    },
  };