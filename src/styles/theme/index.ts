const breakpoints = {
  mobile: 320,
  tablet: 768,
  notebook: 960,
  desktop: 1440,
} as const;

export const theme = {
  // Colors
  colors: {
    primary: {
      main: '#009EDD',
    },
    secondary: {
      main: '#039B00',
    },
    text: {
      100: '#2F2E41',
      200: '#999999',
      300: '#333333',
      400: '#3f3d56',
    },
    auxiliar: {
      100: '#D9D9D9',
    },
    background: {
      primary: '#2F2E41',
    },
    base: {
      white: '#FFFFFF',
    },
  },

  // Fonts
  text: {
    size: {
      0: '12px',
      1: '14px',
      2: '16px',
      3: '18px',
      4: '20px',
      5: '24px',
    },
    family: {
      primary: 'Open Sans, sans-serif',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },

  // Index
  zIndex: {
    below: -1,
    default: 0,
    top: 1,
    high: 2,
    highest: 3,
  },

  // Breakpoints
  breakpoints,

  // devices query
  devices: {
    mobile: `(min-width: ${breakpoints.mobile}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    notebook: `(min-width: ${breakpoints.notebook}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
  },
} as const;

export default theme;
