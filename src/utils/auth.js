export const verifyToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    // Opcional: Verificar expiración con jwt-decode
    return true;
  };