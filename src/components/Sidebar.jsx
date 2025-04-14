import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function AppSidebar() {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);

  const handleCollapse = () => setCollapsed(!collapsed);
  const handleBreakpoint = (broken) => {
    setBroken(broken);
    if (broken) setCollapsed(true);
  };

  // Configuración de los items del menú
  const menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/team', title: 'Equipo', icon: <PeopleIcon /> },
    { path: '/inventory', title: 'Inventario', icon: <InventoryIcon /> },
    { path: '/suppliers', title: 'Proveedores', icon: <StoreIcon /> },
    { path: '/sales', title: 'Ventas', icon: <PointOfSaleIcon /> },
    { path: '/invoices', title: 'Facturas', icon: <ReceiptIcon /> },
    { path: '/settings', title: 'Configuración', icon: <SettingsIcon /> }
  ];

  return (
    <>
      {broken && (
        <IconButton
          onClick={handleCollapse}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1200,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 2,
            '&:hover': { backgroundColor: theme.palette.action.hover }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Sidebar
        width="260px"
        collapsedWidth={broken ? "0px" : "80px"}
        backgroundColor={theme.palette.background.paper}
        rootStyles={{
          height: '100vh',
          position: 'fixed',
          borderRight: `1px solid ${theme.palette.divider}`,
          boxShadow: theme.shadows[4],
          transition: 'all 0.3s ease'
        }}
        collapsed={collapsed}
        onBreakpoint={handleBreakpoint}
        breakPoint="md"
      >
        <Menu>
          <MenuItem
            onClick={handleCollapse}
            icon={collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            style={{
              margin: '10px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {!collapsed && 'Minimizar'}
          </MenuItem>

          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              component={<Link to={item.path} />}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: collapsed ? 'center' : 'flex-start',
                padding: collapsed ? '8px 12px' : '8px 16px',
                margin: '4px 0'
              }}
            >
              <Tooltip
                title={item.title}
                placement="right"
                arrow
                disableHoverListener={!collapsed}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    mr: collapsed ? 0 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.25rem'
                  }}>
                    {item.icon}
                  </Box>
                  {!collapsed && item.title}
                </Box>
              </Tooltip>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
}