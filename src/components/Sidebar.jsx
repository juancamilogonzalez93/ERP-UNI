import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  People as TeamIcon,
  Inventory as InventoryIcon,
  Menu as MenuIcon,
  ChevronLeft as CollapseIcon,
  ChevronRight as ExpandIcon
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

export default function AppSidebar() {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Nueva forma de manejar el colapso sin useProSidebar
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Manejo responsivo mejorado
  const handleBreakpoint = (broken) => {
    setBroken(broken);
    if (broken) setCollapsed(true);
  };

  return (
    <>
      {broken && (
        <IconButton
          onClick={() => setCollapsed(!collapsed)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1200,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 2,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            }
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
          transition: 'all 0.3s ease-in-out'
        }}
        collapsed={collapsed}
        onBreakpoint={handleBreakpoint}
        breakPoint="md"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Menu>
          <MenuItem
            onClick={handleCollapse}
            icon={collapsed ? <ExpandIcon /> : <CollapseIcon />}
            style={{
              margin: '10px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {!collapsed && 'Minimizar'}
          </MenuItem>

          {/* Items del menú con Tooltip corregido */}
          <MenuItem 
            component={<Link to="/team" />}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: collapsed ? 'center' : 'flex-start',
              padding: collapsed ? '8px 12px' : '8px 16px'
            }}
          >
            <Tooltip 
              title="Equipo" 
              placement="right" 
              arrow
              disableHoverListener={!collapsed}
            >
              <Box sx={{ display: 'inherit' }}>
                <TeamIcon sx={{ mr: collapsed ? 0 : 1 }} />
                {!collapsed && 'Equipo'}
              </Box>
            </Tooltip>
          </MenuItem>

          <MenuItem 
            component={<Link to="/inventory" />}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: collapsed ? 'center' : 'flex-start',
              padding: collapsed ? '8px 12px' : '8px 16px'
            }}
          >
            <Tooltip 
              title="Inventario" 
              placement="right" 
              arrow
              disableHoverListener={!collapsed}
            >
              <Box sx={{ display: 'inherit' }}>
                <InventoryIcon sx={{ mr: collapsed ? 0 : 1 }} />
                {!collapsed && 'Inventario'}
              </Box>
            </Tooltip>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}