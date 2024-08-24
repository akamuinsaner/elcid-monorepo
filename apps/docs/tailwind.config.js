const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
      textColor: {
        primary: '#171717',
        'primary-hover': '#0a0a0a',
        'primary-invert': '#fff',
        secondary: '#525252',
        tertiary: '#737373',
        brand: '#4338ca',
        disabled: '#a3a3a3',
        error: '#dc2626',
        'error-emphasize': '#991b1b',
        success: '#15803d',
        warning: '#facc15',
      },
      backgroundColor: {
        primary: '#fff',
        'primary-invert': '#0a0a0a',
        'primary-hover': '#fafafa',
        secondary: '#e5e7eb',
        'secondary-hover': '#d1d5db',
        tertiary: '#fafafa',
        disabled: '#f5f5f5',
        'disabled-emphasize': '#f3f4f6',
        'brand-primary': '#4338ca',
        'brand-primary-emphasize': '#3730a3',
        error: '#dc2626',
        'error-emphasize': '#b91c1c',
        'error-subtle': '#fef2f2',
        'success-subtle': '#f0fdf4',
        'brand-subtle': '#eef2ff',
        'neutral-subtle': '#f9fafb',
        'warning-subtle': '#fffbeb',
      },
      borderColor: {
        primary: '#e5e5e5',
        secondary: '#9ca3af',
        success: '#bbf7d0',
        error: '#dc2626',
        'brand-solid': '#4f46e5',
        'brand-subtle': '#c7d2fe',
        'error-subtle': '#fecaca',
        'warning-subtle': '#fde68a',
        disabled: '#f5f5f5',
      },
      ringColor: {
        primary: '#e5e5e5',
        secondary: '#9ca3af',
        success: '#bbf7d0',
        error: '#dc2626',
        'brand-solid': '#4f46e5',
        'brand-subtle': '#c7d2fe',
        'error-subtle': '#fecaca',
        'warning-subtle': '#fde68a',
        disabled: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
