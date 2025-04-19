// En tu LoginPage.js
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Box, TextField, Button, Typography } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login({ email, password })) {
      window.location.href = '/dashboard';
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 300,
          p: 4,
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <Typography variant="h5" textAlign="center">
          Iniciar sesión
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" fullWidth>
          Ingresar
        </Button>
        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          Usuario de prueba: admin@example.com / admin123
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;