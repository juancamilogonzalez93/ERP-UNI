import { Box, Typography } from '@mui/material';

export default function InventoryPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Módulo de Inventario
      </Typography>
      <Typography variant="body1">
        Aquí irá el contenido de gestión de inventario
      </Typography>
    </Box>
  );
}