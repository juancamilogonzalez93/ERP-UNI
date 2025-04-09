import { useState } from 'react';
import { 
  DataGrid, 
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarExport 
} from '@mui/x-data-grid';
import { 
  Box, 
  Button, 
  IconButton, 
  Typography,
  Tooltip
} from '@mui/material';
import { 
  Edit as EditIcon, 
  Delete as DeleteIcon,
  Add as AddIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import TeamMemberForm from './TeamMemberForm';

// Datos de ejemplo (reemplaza con tus datos reales)
const mockData = [
  { id: 1, name: 'CamiloG', email: 'ed@erp.com', role: 'Admin', status: 'Active' }
];

export default function TeamTable() {
  const [rows, setRows] = useState(mockData);
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const columns = [
    { field: 'name', headerName: 'Nombre', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { 
      field: 'status', 
      headerName: 'Estado', 
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
      )
    },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Tooltip title="Editar"><EditIcon color="primary" /></Tooltip>}
          onClick={() => {
            setFormData(params.row);
            setOpenForm(true);
          }}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<Tooltip title="Eliminar"><DeleteIcon color="error" /></Tooltip>}
          onClick={() => handleDelete(params.id)}
          label="Delete"
        />,
      ],
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm('¿Eliminar este miembro?')) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const CustomToolbar = () => (
    <GridToolbarContainer sx={{ justifyContent: 'space-between', p: 2 }}>
      <Button
        startIcon={<AddIcon />}
        onClick={() => {
          setFormData(null);
          setOpenForm(true);
        }}
        variant="contained"
      >
        Agregar Miembro
      </Button>
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <Typography variant="h4" gutterBottom>Gestión de Equipo</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
        pageSize={10}
      />
      <TeamMemberForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        data={formData}
        onSubmit={(data) => {
          if (data.id) {
            // Editar
            setRows(rows.map(row => row.id === data.id ? data : row));
          } else {
            // Crear
            setRows([...rows, { ...data, id: rows.length + 1 }]);
          }
        }}
      />
    </Box>
  );
}