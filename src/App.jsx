import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './context/AuthContext';
import AppSidebar from './components/Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import theme from './context/theme';

// Importaciones de páginas
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/Auth/PrivateRoute';
import DashboardPage from './pages/dashboard';
import TeamPage from './pages/Team';
import InventoryPage from './pages/Inventory';
import SuppliersPage from './pages/Suppliers';
import SalesPage from './pages/Sales';
import InvoicesPage from './pages/Invoices';
import SettingsPage from './pages/Settings';

// Componente Layout para rutas autenticadas
const AuthenticatedLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: { md: '260px' } }}>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Box>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Routes>
            {/* Ruta pública */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Rutas protegidas */}
            <Route path="/*" element={
              <PrivateRoute>
                <AuthenticatedLayout />
              </PrivateRoute>
            } />
            
            {/* Redirección inicial */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;