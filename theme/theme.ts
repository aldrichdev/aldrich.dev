import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          textTransform: 'none',
          backgroundColor: 'black',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 600,

          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        },
        outlinedPrimary: {
          textTransform: 'none',
          borderRadius: '0',
          backgroundColor: 'transparent',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 600,
          color: 'black',
          borderColor: 'black',
          borderWidth: '2px',

          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        },
      },
    },
  },
})

export default theme
