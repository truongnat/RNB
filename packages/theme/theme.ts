import { ITheme } from './system';

export const defaultTheme: ITheme = {
  colors: {
    primary: '#EFEFEF',
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f9fafb',
      100: '#f4f5f7',
      200: '#e5e7eb',
      300: '#d2d6dc',
      400: '#9fa6b2',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#252f3f',
      900: '#161e2e',
    },
    red: {
      50: '#fdf2f2',
      100: '#fde8e8',
      200: '#fbd5d5',
      300: '#f8b4b4',
      400: '#f98080',
      500: '#f05252',
      600: '#e02424',
      700: '#c81e1e',
      800: '#9b1c1c',
      900: '#771d1d',
    },
    orange: {
      50: '#fff8f1',
      100: '#feecdc',
      200: '#fcd9bd',
      300: '#fdba8c',
      400: '#ff8a4c',
      500: '#ff5a1f',
      600: '#d03801',
      700: '#b43403',
      800: '#8a2c0d',
      900: '#771d1d',
    },
    yellow: {
      50: '#fdfdea',
      100: '#fdf6b2',
      200: '#fce96a',
      300: '#faca15',
      400: '#e3a008',
      500: '#c27803',
      600: '#9f580a',
      700: '#8e4b10',
      800: '#723b13',
      900: '#633112',
    },
    green: {
      50: '#f3faf7',
      100: '#def7ec',
      200: '#bcf0da',
      300: '#84e1bc',
      400: '#31c48d',
      500: '#0e9f6e',
      600: '#057a55',
      700: '#046c4e',
      800: '#03543f',
      900: '#014737',
    },
    teal: {
      50: '#edfafa',
      100: '#d5f5f6',
      200: '#afecef',
      300: '#7edce2',
      400: '#16bdca',
      500: '#0694a2',
      600: '#047481',
      700: '#036672',
      800: '#05505c',
      900: '#014451',
    },
    blue: {
      50: '#ebf5ff',
      100: '#e1effe',
      200: '#c3ddfd',
      300: '#a4cafe',
      400: '#76a9fa',
      500: '#3f83f8',
      600: '#1c64f2',
      700: '#1a56db',
      800: '#1e429f',
      900: '#233876',
    },
    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    alpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },
  },
  indices: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1700,
    tooltip: 1800,
  },
  radii: {
    none: 0,
    sm: 2,
    base: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 20,
    full: 9999,
  },
  sizes: {
    full: '100%',
    '3xs': 224,
    '2xs': 256,
    xs: 320,
    sm: 384,
    md: 448,
    lg: 512,
    xl: 576,
    '2xl': 640,
    '3xl': 768,
    '4xl': 896,
    '5xl': 1024,
    '6xl': 1152,
    '7xl': 1280,
    '8xl': 1408,
    container: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  shadows: {
    none: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,

      elevation: 0,
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
    xs: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    base: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    '2xl': {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    '3xl': {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    },
  },
  spacing: {
    0.5: 0.5,
    1: 1,
    1.5: 1.5,
    2: 2,
    2.5: 2.5,
    3: 3,
    3.5: 3.5,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    36: 36,
    40: 40,
    44: 44,
    48: 48,
    52: 52,
    56: 56,
    60: 60,
    64: 64,
    72: 72,
    80: 80,
    96: 96,
  },
  typography: {
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'Georgia, serif',
      mono: 'Menlo, monospace',
    },
    fontSizes: {
      xs: 12, // 0.75rem * 16px/rem = 12px
      sm: 14, // 0.875rem * 16px/rem = 14px
      md: 16, // 1rem * 16px/rem = 16px
      lg: 18, // 1.125rem * 16px/rem = 18px
      xl: 20, // 1.25rem * 16px/rem = 20px
      '2xl': 24, // 1.5rem * 16px/rem = 24px
      '3xl': 30, // 1.875rem * 16px/rem = 30px
      '4xl': 36, // 2.25rem * 16px/rem = 36px
      '5xl': 48, // 3rem * 16px/rem = 48px
      '6xl': 60, // 3.75rem * 16px/rem = 60px
      '7xl': 72, // 4.5rem * 16px/rem = 72px
      '8xl': 96, // 6rem * 16px/rem = 96px
      '9xl': 128, // 8rem * 16px/rem = 128px
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: 2,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 28,
      '7': 32,
      '8': 36,
      '9': 40,
      '10': 44,
    },
    letterSpacings: {
      tighter: -0.8,
      tight: -0.4,
      normal: 0,
      wide: 0.4,
      wider: 0.8,
      widest: 1,
    },
  },
  components: {
    button: {
      default: {
        rounded: '2xl',
        px: '12',
        py: '24',
        fs: 'md',
        fw: 'medium',
        bg: 'primary',
      },
    },
  },
};
