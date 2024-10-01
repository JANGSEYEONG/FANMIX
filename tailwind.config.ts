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
        lime: {
          400: '#E6FE74',
        },
        lavender: {
          400: '#C192FF',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.1s ease-in forwards',
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
        '.orange-600-gradient': {
          background: 'linear-gradient(to right, #FF4D33CC 0%, #FF4D3300 100%)',
        },
        '.orange-600-white-gradient': {
          background: 'linear-gradient(to bottom, #FF4D3300 0%, #FF4D3366 100%)',
        },
        '.orange-700-gradient': {
          background: 'linear-gradient(to bottom, #FF5B46 0%, #952B1D 100%)',
        },
        '.neutral-800-gradient': {
          background: 'linear-gradient(to bottom, #26262600 0%, #262626 100%)',
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
          'overflow-y': 'auto',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          'scroll-behavior': 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        // 스케일 부드럽게 키우기
        '.scale-transition-105': {
          transform: 'scale(1.05)',
          transition: 'transform 300ms ease-in-out',
          cursor: 'pointer',
        },
        // blur
        '.blur-10': {
          'backdrop-filter': 'blur(4px)',
        },
        '.blur-10-shadow': {
          'backdrop-filter': 'blur(4px)',
          'box-shadow': '0 4px 4px 0px rgba(0,0,0,0.25)',
        },
        '.blur-22-shadow': {
          'backdrop-filter': 'blur(22px)',
          'box-shadow': '1px 3px 15px 0px rgba(0,0,0,0.5)',
        },
        // #20240919.syjang, text fonSize 확장에서 유틸리티 클래스로 변경 (색상 지정과 동시에 쓸 때 충돌)
        // Typo
        '.h1-sb': {
          fontSize: '24px',
          lineHeight: '1.4',
          fontWeight: '600',
        },
        '.h1-sb-leading-0': {
          fontSize: '24px',
          fontWeight: '600',
        },
        '.h1-m': {
          fontSize: '24px',
          lineHeight: '1.4',
          fontWeight: '500',
        },
        '.h2-r': {
          fontSize: '20px',
          lineHeight: '1.2',
          fontWeight: '400',
        },
        '.h2-m': {
          fontSize: '20px',
          lineHeight: '1.2',
          fontWeight: '500',
        },
        '.h2-sb': {
          fontSize: '20px',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        '.body1-r': {
          fontSize: '18px',
          lineHeight: '1.4',
          fontWeight: '400',
        },
        '.body1-m': {
          fontSize: '18px',
          lineHeight: '1.4',
          fontWeight: '500',
        },
        '.body1-sb': {
          fontSize: '18px',
          lineHeight: '1.4',
          fontWeight: '600',
        },
        '.body1-b': {
          fontSize: '18px',
          lineHeight: '1.4',
          fontWeight: '700',
        },
        '.body2-r': {
          fontSize: '16px',
          lineHeight: '1.5',
          fontWeight: '400',
        },
        '.body2-m': {
          fontSize: '16px',
          lineHeight: '1.5',
          fontWeight: '500',
        },
        '.body2-sb': {
          fontSize: '16px',
          lineHeight: '1.5',
          fontWeight: '600',
        },
        '.body3-r': {
          fontSize: '14px',
          lineHeight: '1.4',
          fontWeight: '400',
        },
        '.body3-m': {
          fontSize: '14px',
          lineHeight: '1.4',
          fontWeight: '500',
        },
        '.body3-sb': {
          fontSize: '14px',
          lineHeight: '1.4',
          fontWeight: '600',
        },
        '.sub1-r': {
          fontSize: '12px',
          lineHeight: '1.4',
          fontWeight: '400',
        },
        '.sub1-m': {
          fontSize: '12px',
          lineHeight: '1.4',
          fontWeight: '500',
        },
        '.sub1-sb': {
          fontSize: '12px',
          lineHeight: '1.4',
          fontWeight: '600',
        },
        '.sub2-m': {
          fontSize: '10px',
          lineHeight: '1.4',
          fontWeight: '500',
        },
        '.sub2-sb': {
          fontSize: '10px',
          lineHeight: '1.4',
          fontWeight: '600',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
