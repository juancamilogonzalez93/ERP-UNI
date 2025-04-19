import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // <- Añade extensión .jsx explícita
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';

// Configuración del tema MUI
const theme = createTheme({
  palette: {
    mode: 'light',  // Añade modo claro/oscuro explícito
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'  // Añade color para componentes tipo paper
    }
  },
  typography: {
    fontWeightBold: 700,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'  // Fuente explícita
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minHeight: '100vh'
        }
      }
    }
  }
});

// Renderizado principal
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <AuthProvider>
          <App />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);