import { createTheme } from '@mui/material/styles'

const common = {
  fontTypography: {
    fontFamily: 'Roboto',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
}

const lightSettings = createTheme({
  ...common,
  palette: {
    mode: 'light',
    primary: {
      main: '#007C00',
    },
    secondary: {
      main: '#5C883D',
    },
  },
})

const darkSettings = createTheme({
  ...common,
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#C2EEA3',
    },
  },
})

export const themes = {
  light: lightSettings,
  dark: darkSettings,
}
