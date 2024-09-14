import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        suit: ['var(--font-suit-variable)', 'sans-serif'],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        regular: '400',
        light: '300',
      },
      fontSize: {
        'h1-sb': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h2-r': ['20px', { lineHeight: '1.2', fontWeight: '400' }], // regular : 400
        'h2-m': ['20px', { lineHeight: '1.2', fontWeight: '500' }], // medium : 500
        'h2-sb': ['20px', { lineHeight: '1.2', fontWeight: '600' }], // semiBold : 600
        'body1-r': ['18px', { lineHeight: '1.4', fontWeight: '400' }],
        'body1-m': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body2-r': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body2-m': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'body2-sb': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body3-r': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'body3-m': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'body3-sb': ['14px', { lineHeight: '1.4', fontWeight: '600' }],
        'sub1-r': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'sub1-m': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'sub1-sb': ['12px', { lineHeight: '1.4', fontWeight: '600' }],
        'sub2-m': ['10px', { lineHeight: '1.4', fontWeight: '500' }],
        'sub2-sb': ['10px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        orange: {
          100: '#FFF4F0',
          200: '#FFDBD6',
          300: '#FFB8AD',
          400: '#FF9485',
          500: '#FF634F',
          600: '#FF4D33',
          700: '#B93825',
          800: '#7B1E10',
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(({ addUtilities }) => {
      const newUtilities = {
        // custom-flex
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        // custom-gradient
        '.dark-gradient': {
          background: 'linear-gradient(to bottom, #320C06 0%, #000000 100%)',
        },
        '.fanmix-gradient': {
          background: 'linear-gradient(to bottom, #FF3A1C 0%, #FF5B46 100%)',
        },
        // scroll
        '.scrollbar-hide-smooth': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          'scroll-behavior': 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        // 스크롤 감지가 되어야하는 페이지 영역 최상단에 추가
        '.page-scrollable-container': {
          '@apply overflow-y-auto pb-20 scrollbar-hide-smooth': {},
        },
        // 스케일 부드럽게 키우기
        '.scale-transition-105': {
          '@apply transform transition duration-300 ease-in-out scale-105 cursor-pointer': {},
        },
        // blur
        '.blur-10': {
          '@apply backdrop-blur-[4px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]': {},
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
