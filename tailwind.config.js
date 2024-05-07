const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^bg-/,
      variants: ['blue', 'green', 'red']
    },
    {
      pattern: /^text-/,
      variants: ['blue', 'green', 'red']
    }
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpEnter: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: 100,
            transform: 'translateY(0px)'
          }
        },
        slideLeave: {
          '0%': {
            opacity: 100,
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-20px)'
          }
        }
      },
      animation: {
        'slide-enter': ' slideUpEnter .3s ease-in-out',
        'slide-leave': ' slideLeave .3s ease-in-out'
      },
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive']
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b'
        },
        clr_body: "#141410",
                clr_white: "#ffffff",
                clr_title: "#181818",
                clr_mtitle: "#000d27",
                clr_pra: "#999999",
                clr_subtitle: "#121212",
                clr_base: "#c9f31d",
                clr_hover: "#c2ec1d9e",
                clr_bg1: "#e9f0ff",
                clr_ftext: "#818181",
                clr_footer: "#181818",
                clr_cusborder: "rgb(38, 37, 37)",
                clr_border1: "#414141",
                clr_ratting: "#ffa311",
                clr_bgsection: "#000d27",
                clr_success: "#3fca90",
                clr_danger: "#ed5050",
                clr_boxes1: "rgba(26, 77, 190, 0.05)",
                clr_cborder: "#d9d9d9",
        "violet-550": "#8257e6",
        "white": "#FFFF",

        "gray-900": "#121214",
        "gray-800": "#202024",
        "gray-300": "#c4c4cc",
        "gray-100": "#e1e1e6",
        
        "green-500": "#00875f",
        "green-300": "#00b37e",
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        customBlue: "#299EF3",
        lightGray: "#272D4E",
        lightGrayAlt: '#94A2B3',
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
        link: '#f72585',
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: '#201f27',
        secundary: '#2E3038',
        link: '#f72585'
      }
    }
  },
  plugins: [
    addVariablesForColors,
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require("tailwindcss-animate"),
    require('tailwindcss-radix')()
  ]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}