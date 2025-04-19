import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const mockInvoices = [
  { id: 1, code: 'INV-001', date: '2023-10-01', total: 150.00 },
];

const columns = [
  { field: 'code', headerName: 'Código', width: 150 },
  { field: 'date', headerName: 'Fecha', width: 120 },
  { field: 'total', headerName: 'Total', width: 120 },
];

export default function InvoicesPage() {
  return (
    <Box ml="240px" p={3}>
      <Typography variant="h2" gutterBottom>Facturas</Typography>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={mockInvoices}
          columns={columns}
          pageSize={5}
        />
      </Box>
    </Box>
  );
}