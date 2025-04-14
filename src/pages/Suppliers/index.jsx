import { Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import SupplierForm from '../../pages/Suppliers/SupplierForm';

export default function SuppliersPage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box ml="240px" p={3}>
      <Typography variant="h2" gutterBottom>Proveedores</Typography>
      <Button 
        variant="contained" 
        onClick={() => setOpenForm(true)}
        sx={{ mb: 3 }}
      >
        Agregar Proveedor
      </Button>
      <SupplierForm 
        open={openForm} 
        onClose={() => setOpenForm(false)} 
      />
      {/* Agregar tabla de proveedores aquí */}
    </Box>
  );
}
