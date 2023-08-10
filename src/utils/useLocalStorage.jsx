
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = () => {
    // Aquí podrías realizar la validación y enviar los datos al servidor.
    // En este ejemplo, solo almacenamos el token en localStorage.
    localStorage.setItem('token', 'your_token_here');
    setIsLoggedIn(true);
  };

  const handleLogin = () => {
    // Aquí podrías realizar la validación y enviar los datos al servidor.
    // En este ejemplo, solo almacenamos el token en localStorage.
    localStorage.setItem('token', 'your_token_here');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Logged in</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login/Register</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Auth;