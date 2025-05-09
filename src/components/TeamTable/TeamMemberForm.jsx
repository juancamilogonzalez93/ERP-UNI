import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react'; // Importa useEffect

export default function TeamMemberForm({ open, onClose, data, onSubmit }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { // Valores iniciales vacíos
      name: '',
      email: '',
      role: 'User',
      status: 'Active'
    }
  });

  // Efecto para resetear el formulario cuando cambian los datos o la apertura
  useEffect(() => {
    if (open) {
      reset(data || {
        name: '',
        email: '',
        role: 'User',
        status: 'Active'
      });
    }
  }, [open, data, reset]);

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {data ? 'Editar Miembro' : 'Agregar Nuevo Miembro'}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={3} sx={{ pt: 2 }}>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Campo obligatorio' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Nombre"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: 'Campo obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Estado"
                  fullWidth
                >
                  <MenuItem value="Active">Activo</MenuItem>
                  <MenuItem value="Inactive">Inactivo</MenuItem>
                </TextField>
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" variant="contained">
            {data ? 'Guardar Cambios' : 'Crear Miembro'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}