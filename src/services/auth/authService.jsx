


export const authService = {
  login: async (username, password) => {
    try {

      const user = { username };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Error en la autenticación');
    }
  },

  register: async (username, password) => {
    try {
      // Simulación de lógica de registro exitoso
      const user = { username };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Error en el registro');
    }
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('user');
  }
};

