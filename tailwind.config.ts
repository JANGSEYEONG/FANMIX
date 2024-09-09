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
        'button-r': ['14px', { lineHeight: '1.4', fontWeight: '400' }], // Regular
        'button-m': ['14px', { lineHeight: '1.4', fontWeight: '500' }], // Medium
        'h1-sb': ['24px', { lineHeight: '1.5', fontWeight: '600' }], // SemiBold
        'h2-sb': ['20px', { lineHeight: '1.2', fontWeight: '600' }],
        'body1-r': ['18px', { lineHeight: '1.4', fontWeight: '400' }],
        'body1-m': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body2-r': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body2-m': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'body2-sb': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body3-r': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'body3-m': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'sub1-r': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'sub1-m': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'sub2-m': ['10px', { lineHeight: '1.4', fontWeight: '500' }],
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
        orange: { 1: { DEFAULT: '#FF4D33', action: '#B93825' } },
        darkgray: { 1: '#1F2021', 2: '#353637' },
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
        '.bg-gradient': {
          background: 'linear-gradient(to bottom, #320C06 0%, #000000 100%)',
        },
        '.fanmix-gradient': {
          background: 'linear-gradient(to bottom, #FF3A1C 0%, #FF5B46 100%)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
