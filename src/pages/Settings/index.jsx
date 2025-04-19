import { Box, Typography, Switch, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box ml="240px" p={3}>
      <Typography variant="h2" gutterBottom>Configuración</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        }
        label="Modo oscuro"
      />
    </Box>
  );
}