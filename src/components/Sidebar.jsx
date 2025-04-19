import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  Store as StoreIcon,
  PointOfSale as PointOfSaleIcon,
  Receipt as ReceiptIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

// Componente Sidebar personalizado sin dependencias externas
export default function AppSidebar() {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/team', title: 'Equipo', icon: <PeopleIcon /> },
    { path: '/inventory', title: 'Inventario', icon: <InventoryIcon /> },
    { path: '/suppliers', title: 'Proveedores', icon: <StoreIcon /> },
    { path: '/sales', title: 'Ventas', icon: <PointOfSaleIcon /> },
    { path: '/invoices', title: 'Facturas', icon: <ReceiptIcon /> },
    { path: '/settings', title: 'Configuración', icon: <SettingsIcon /> }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarWidth = 260;
  const collapsedWidth = 80;

  return (
    <>
      {/* Botón para móviles */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: theme.zIndex.drawer + 1,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { md: collapsed ? collapsedWidth : sidebarWidth },
          flexShrink: { md: 0 },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Box
          sx={{
            width: { md: collapsed ? collapsedWidth : sidebarWidth },
            height: '100vh',
            position: 'fixed',
            borderRight: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            display: { xs: mobileOpen ? 'block' : 'none', md: 'block' },
          }}
        >
          {/* Contenido del Sidebar */}
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>

          <Box sx={{ px: 2 }}>
            {menuItems.map((item) => (
              <Box 
                key={item.path} 
                component={Link} 
                to={item.path}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: theme.palette.text.primary,
                  p: 1.5,
                  borderRadius: 1,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <Tooltip title={item.title} placement="right" arrow disableHoverListener={!collapsed}>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    width: '100%'
                  }}>
                    <Box sx={{ mr: collapsed ? 0 : 2 }}>{item.icon}</Box>
                    {!collapsed && item.title}
                  </Box>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}