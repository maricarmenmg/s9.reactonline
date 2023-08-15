
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    if (userData.email === 'usuario@example.com' && userData.password === 'password') {
      setUser(userData); // Almacenar los datos del usuario en el estado
    }
    setUser(userData);
  };

  const register = (userData) => {
    // Aquí puedes implementar la lógica de registro de usuarios
    // y almacenar los datos del nuevo usuario en el estado
    setUser(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión y eliminar los datos del usuario del estado
    setUser(null);
  };

  const isAuthenticated = () => {
    // Verifica si el usuario está autenticado
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
