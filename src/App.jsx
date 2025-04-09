import { Box } from '@mui/material';
import { SidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <SidebarProvider>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <AppSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Tu contenido principal aquí */}
        </Box>
      </Box>
    </SidebarProvider>
  );
}