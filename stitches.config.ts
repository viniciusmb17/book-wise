import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito, sans-serif',
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      green_100: '#50B2C0',
      green_200: '#255D6A',
      green_300: '#0A313C',

      purple_100: '#8381D9',
      purple_200: '#2A2879',

      gray_100: '#F8F9FC',
      gray_200: '#E6E8F2',
      gray_300: '#D1D6E4',
      gray_400: '#8D95AF',
      gray_500: '#303F73',
      gray_600: '#252D4A',
      gray_700: '#181C2A',
      gray_800: '#0E1116',

      'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },
  },
})
