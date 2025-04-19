import { TextField } from '@mui/material';
import React, { useState } from 'react';

export default function SupplierTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TextField 
        label="Buscar Proveedor"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Renderizar tabla con filteredData */}
    </>
  );
}