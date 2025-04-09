import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';

const mockData = [
  { id: 1, name: 'CamiloG', email: 'ed@erp.com', role: 'Admin', status: 'Active' },
  // ... más datos
];

const columns = [
  { 
    field: 'name', 
    headerName: 'Nombre', 
    flex: 1,
    minWidth: 150,
  },
  { 
    field: 'email', 
    headerName: 'Email', 
    flex: 1,
    renderCell: (params) => (
      <Typography variant="body2" color="textSecondary">
        {params.value}
      </Typography>
    ),
  },
  { 
    field: 'status', 
    headerName: 'Estado', 
    width: 120,
    renderCell: (params) => (
      <Box
        sx={{
          bgcolor: params.value === 'Active' ? 'success.light' : 'error.light',
          color: 'white',
          px: 1,
          borderRadius: 4,
          fontSize: '0.75rem',
        }}
      >
        {params.value}
      </Box>
    ),
  },
];

export default function TeamPage() {
  const theme = useTheme();

  return (
    <Box ml="240px" p={3}>
      <Typography variant="h2" mb={3}>Gestión de Equipo</Typography>
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
          boxShadow: 1,
          height: 500,
        }}
      >
        <DataGrid
          rows={mockData}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
}