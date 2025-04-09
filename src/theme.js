import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#4CAF50' },  // Verde corporativo
    secondary: { main: '#FF5722' }, // Naranja para acciones
    background: { default: '#f5f7fa' }, // Fondo claro
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', color: '#333' },
  },
  spacing: 8, // Base unit (1 = 8px)
  overrides: {
    MuiMenuItem: {
      root: {
        '&.ps-menu-button': {
          justifyContent: collapsed ? 'center' : 'flex-start',
        }
      }
    }
  }
});
