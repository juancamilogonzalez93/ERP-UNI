// src/components/Charts/RevenueChart.jsx
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from '@mui/material';

export default function RevenueChart({ data }) {
  const theme = useTheme();

  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        colors={[theme.palette.primary.main]}
        // ... más configuraciones de nivo
      />
    </div>
  );
}