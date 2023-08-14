
export const authService = {
  
  login: async (username) => {
    if(!username) {
      throw Error ('Username is required')
    }
    try {
      const user = { username };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Error en el inicio de sesión');
    }
  },

  register: async (username, password) => {

    try {
      const user = { username, password }; // Asegúrate de usar la variable password
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

