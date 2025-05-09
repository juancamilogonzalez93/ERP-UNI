import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '../Auth/LoadingSpinner';

export default function PrivateRoute({ children }) {
  const { isAuthenticated, isReady } = useAuth();
  const location = useLocation();

  // Mostrar spinner mientras se verifica la autenticación
  if (!isReady) return <LoadingSpinner />;

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si está autenticado, renderiza el contenido protegido
  return children;
}
