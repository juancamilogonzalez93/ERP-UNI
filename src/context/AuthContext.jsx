import { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto
const AuthContext = createContext();

// Servicio seguro para localStorage
const safeStorage = {
  get: (key) => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
      return null;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
      return null;
    }
  },
  set: (key, value) => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error writing ${key} to localStorage:`, error);
      return false;
    }
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = safeStorage.get('token');
      if (token) {
        setUser({ token });
      }
      setIsReady(true);
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      // Simulación de llamada a API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).slice(2);
      safeStorage.set('token', fakeToken);
      setUser({ 
        token: fakeToken, 
        email: credentials.email,
        // Agrega más datos de usuario según necesites
      });
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'Error al iniciar sesión' 
      };
    }
  };

  const logout = () => {
    safeStorage.set('token', null);
    setUser(null);
    return { success: true };
  };

  // Estado de carga mejorado
  if (!isReady) {
    return <div>Cargando autenticación...</div>; // O un spinner
  }

  return (
    <AuthContext.Provider value={{ 
      user,
      isAuthenticated: !!user?.token,
      login,
      logout,
      isReady // Expone el estado de carga si es necesario
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook useAuth optimizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};