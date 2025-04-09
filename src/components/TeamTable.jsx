import { useState } from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridActionsCellItem
} from '@mui/x-data-grid';
import { 
  TextField,
  IconButton,
  Box,
  Typography,
  Button,
  Tooltip
} from '@mui/material';
import { 
  Search as SearchIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import TeamMemberForm from './TeamMemberForm';

// Datos iniciales
const initialData = [
  { id: 1, name: 'CamiloG', email: 'ed@erp.com', role: 'Admin', status: 'Active' }
];

export default function TeamTable() {
  const [rows, setRows] = useState(initialData);
  const [searchText, setSearchText] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState(null);

  // Filtrar datos basados en la búsqueda
  const filteredData = rows.filter(row =>
    Object.values(row).some(
      value => value && 
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Columnas de la tabla
  const columns = [
    { 
      field: 'name', 
      headerName: 'Nombre', 
      flex: 1,
      minWidth: 150 
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      flex: 1 
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
      )
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      width: 120,
      getActions: (params) => [
        <GridActionsCellItem
          icon={
            <Tooltip title="Editar">
              <EditIcon fontSize="small" color="primary" />
            </Tooltip>
          }
          onClick={() => handleEdit(params.row)}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={
            <Tooltip title="Eliminar">
              <DeleteIcon fontSize="small" color="error" />
            </Tooltip>
          }
          onClick={() => handleDelete(params.id)}
          label="Delete"
        />,
      ],
    },
  ];

  // Manejar edición
  const handleEdit = (row) => {
    setFormData(row);
    setOpenForm(true);
  };

  // Manejar eliminación
  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este miembro?')) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  // Manejar envío del formulario
  const handleFormSubmit = (data) => {
    if (data.id) {
      // Actualizar existente
      setRows(rows.map(row => row.id === data.id ? data : row));
    } else {
      // Crear nuevo
      const newId = Math.max(...rows.map(row => row.id), 0) + 1;
      setRows([...rows, { ...data, id: newId }]);
    }
    setOpenForm(false);
  };

  // Barra de herramientas personalizada
  function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{ 
        p: 2, 
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <Box>
          <GridToolbarFilterButton />
          <GridToolbarExport />
        </Box>
        
        <TextField
          size="small"
          variant="outlined"
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment: (
              <SearchIcon color="action" sx={{ mr: 1 }} />
            ),
          }}
          sx={{ width: 300 }}
        />
        
        <Button
          startIcon={<AddIcon />}
          onClick={() => {
            setFormData(null);
            setOpenForm(true);
          }}
          variant="contained"
          color="primary"
        >
          Agregar
        </Button>
      </GridToolbarContainer>
    );
  }

  return (
    <Box sx={{ 
      height: 600, 
      width: '100%',
      backgroundColor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1,
      overflow: 'hidden'
    }}>
      <Typography variant="h5" sx={{ p: 2 }}>
        Gestión de Equipo
      </Typography>
      
      <DataGrid
        rows={filteredData}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        disableSelectionOnClick
      />
      
      <TeamMemberForm
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setFormData(null);
        }}
        data={formData}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
}