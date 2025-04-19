import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './context/AuthContext';
import AppSidebar from './components/Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './context/theme'; // Usamos tu archivo theme.js existente

// Importaciones de páginas según tu estructura
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/dashboard';
import TeamPage from './pages/Team';
import InventoryPage from './pages/Inventory';
import SuppliersPage from './pages/Suppliers';
import SalesPage from './pages/Sales';
import InvoicesPage from './pages/Invoices';
import SettingsPage from './pages/Settings';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}> {/* Usamos tu tema personalizado */}
        <CssBaseline />
        <AuthProvider>
          <Box sx={{ 
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: 'background.default'
          }}>
            {/* Sidebar - Visible excepto en Login */}
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<AppSidebar />} />
            </Routes>
            
            {/* Contenido principal */}
            <Box component="main" sx={{ 
              flexGrow: 1,
              p: 3,
              ml: { xs: 0, md: '260px' } // Ajuste para el sidebar
            }}>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/suppliers" element={<SuppliersPage />} />
                <Route path="/sales" element={<SalesPage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<DashboardPage />} />
              </Routes>
            </Box>
          </Box>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;