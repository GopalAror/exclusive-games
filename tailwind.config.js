/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hover': 'linear-gradient(307deg, #51C8EF -13.72%, #7AF57A 102.02%)',
        'seven': "linear-gradient(306.99deg, rgba(81, 200, 239, 0.5) -13.72%, rgba(122, 245, 122, 0.5) 102.02%), linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)",
        'people': 'linear-gradient(306.99deg, rgba(81, 200, 239, 0.5) -13.72%, rgba(122, 245, 122, 0.5) 102.02%)',
        'background': "linear-gradient(306.99deg, rgba(81, 200, 239, 0.5) -13.72%, rgba(122, 245, 122, 0.5) 102.02%), linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)"
      },
     
     
    },
    fontFamily: {
      Inter: 'inter',
      Anton: "anton"
    },
    backgroundSize: {
      '100': "100% 100%",
      'cover': "cover",
    }
  },
  plugins: [],
}

