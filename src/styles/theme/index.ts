const breakpoints = {
  mobile: 320,
  tablet: 768,
  notebook: 1024,
  desktop: 1440,
} as const;

export const theme = {
  colors: {
    primary: {
      main: "#009EDD",
    },
    secondary: {
      main: "#039B00",
    },
    text: {
      100: "#2F2E41",
      200: "#999999",
    },
    auxiliar: {
      100: "#D9D9D9",
    },
    background: {
      primary: "#2F2E41",
    },
    base: {
      white: "#FFFFFF",
    },
  },
  text: {
    family: {
      primary: "Open Sans, sans-serif",
    },
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
