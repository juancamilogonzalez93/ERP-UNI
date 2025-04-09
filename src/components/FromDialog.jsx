// src/components/FormDialog.jsx
import { Dialog, TextField, Button, DialogActions, DialogContent } from '@mui/material';

export default function FormDialog({ open, onClose, initialData }) {
  const [formData, setFormData] = useState(initialData || {});

  const handleSubmit = async () => {
    if (formData.id) {
      await updateMember(formData.id, formData);
    } else {
      await createMember(formData);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          fullWidth
          margin="normal"
        />
        {/* Más campos aquí */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}