import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated === null) {
    return <LoadingSpinner />;
  }

  return isAuthenticated 
    ? <Outlet /> 
    : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;