import { Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import SupplierForm from '../../pages/Suppliers/SupplierForm';
import SupplierTable from '../../pages/Suppliers/SupplierTable';

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const handleDelete = (id) => {
    setSuppliers(suppliers.filter(s => s.id !== id));
  };

  return (
    <Box ml="240px" p={3}>
      <Button onClick={() => setOpenForm(true)}>Agregar Proveedor</Button>
      <SupplierForm 
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setSelectedSupplier(null);
        }}
        initialData={selectedSupplier}
        onSubmit={(data) => {
          if (selectedSupplier) {
            // Lógica de actualización
          } else {
            // Lógica de creación
          }
        }}
      />
      <SupplierTable 
        data={suppliers} 
        onEdit={setSelectedSupplier} 
        onDelete={handleDelete}
      />
    </Box>
  );
}