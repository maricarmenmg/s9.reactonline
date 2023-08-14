import{ createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Aquí puedes definir tu estado de contexto y funciones necesarias
  const [user, setUser] = useState(null);

  // Puedes agregar más datos y funciones según tus necesidades

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };