import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  People as TeamIcon,
  Inventory as InventoryIcon,
  Menu as MenuIcon,
  ChevronLeft as CollapseIcon,
  ChevronRight as ExpandIcon
} from '@mui/icons-material';
import { IconButton, Tooltip, Box } from '@mui/material';

export default function AppSidebar({ collapsed, onCollapse }) {
  const theme = useTheme();
  const [broken, setBroken] = useState(false);

  return (
    <>
      {/* Botón móvil */}
      {broken && (
        <IconButton
          onClick={() => onCollapse(!collapsed)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1200,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 3
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar principal */}
      <Sidebar
        width="260px"
        collapsedWidth={broken ? "0px" : "80px"}
        backgroundColor={theme.palette.background.paper}
        rootStyles={{
          height: '100vh',
          position: 'fixed',
          borderRight: `1px solid ${theme.palette.divider}`,
          transition: 'all 0.3s ease'
        }}
        collapsed={collapsed}
        onBreakpoint={setBroken}
        breakPoint="md"
      >
        <Menu>
          {/* Botón colapsar */}
          <MenuItem
            onClick={() => onCollapse(!collapsed)}
            icon={collapsed ? <ExpandIcon /> : <CollapseIcon />}
            style={{ justifyContent: 'center' }}
          >
            {!collapsed && 'Minimizar'}
          </MenuItem>

          {/* Ítems del menú */}
          <MenuItem 
            component={<Link to="/team" />}
            icon={<TeamIcon />}
            style={{ 
              justifyContent: collapsed ? 'center' : 'flex-start',
              padding: collapsed ? '8px 12px' : '8px 16px'
            }}
          >
            {!collapsed && 'Equipo'}
          </MenuItem>

          <MenuItem 
            component={<Link to="/inventory" />}
            icon={<InventoryIcon />}
            style={{ 
              justifyContent: collapsed ? 'center' : 'flex-start',
              padding: collapsed ? '8px 12px' : '8px 16px'
            }}
          >
            {!collapsed && 'Inventario'}
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}