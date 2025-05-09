import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const storage = {
  get: (key) => {
    if (typeof window === 'undefined') return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  },
  set: (key, value) => {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Storage set error:', error);
      return false;
    }
  }
};

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    user: null,
    isReady: false,
    error: null
  });

  useEffect(() => {
    const token = storage.get('token');
    setAuthState({
      user: token ? { token } : null,
      isReady: true,
      error: null
    });
  }, []);

  const login = async (credentials) => {
    try {
      // Simulación de API
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const token = 'mock-token-' + Math.random().toString(36).substr(2, 9);
      storage.set('token', token);
      
      setAuthState({
        user: { token, email: credentials.email },
        isReady: true,
        error: null
      });
      
      return { success: true };
    } catch (error) {
      const message = error.message || 'Error en el login';
      setAuthState(prev => ({ ...prev, error: message }));
      return { success: false, error: message };
    }
  };

  const logout = () => {
    storage.set('token', null);
    setAuthState({
      user: null,
      isReady: true,
      error: null
    });
    return { success: true };
  };

  return (
    <AuthContext.Provider value={{
      user: authState.user,
      isAuthenticated: !!authState.user?.token,
      isReady: authState.isReady,
      error: authState.error,
      login,
      logout
    }}>
      {authState.isReady ? children : <div>Cargando...</div>}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};