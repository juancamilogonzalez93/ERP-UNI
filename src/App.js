import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppSidebar from './components/Sidebar';
import TeamPage from './pages/Team';
import InventoryPage from './pages/Inventory';

function Layout() {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false); // Estado local para el colapso

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default
    }}>
      <AppSidebar 
        collapsed={collapsed}
        onCollapse={setCollapsed} // Pasamos el control al componente
      />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          p: 3,
          width: '100%', // Asegura el responsive
          ml: { 
            xs: 0, // Mobile (sidebar oculto)
            md: collapsed ? '80px' : '260px' // Desktop
          },
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Routes>
          <Route path="/team" element={<TeamPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/" element={<TeamPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ProSidebarProvider
        defaultCollapsed={false}
        disableAutoCollapse // Elimina el uso de localStorage
      >
        <Layout />
      </ProSidebarProvider>
    </BrowserRouter>
  );
}

export default App;