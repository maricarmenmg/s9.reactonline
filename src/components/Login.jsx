import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); // Estado para mostrar el mensaje de error
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar el mensaje de error

  const login = (user) => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoading(false);
    }, 1000);
  };


  const handleLogin = () => {
    if (email === ' ' || password === ' ') {
      setLoginError(true);
    } else {
      setLoginError(false);
      login({
        email,
        password,
      });
    }

  };
    

  return (

    <section className="bg-transparent">

  <div className="text-red-600 text-center mt-2">
      {loginError && <p>Error en el inicio de sesión</p>}
    </div>
  
      <div className="max-w-6xl mx-auto py-12 mt-32 sm:px-26">
        <div className="pt-6 pb-12 md:pt-6 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3 text-project-100 font-prompt">Welcome back <br/>Log In to your account</h3>
            <h4 className="h4 text-gray-600 font-prompt font-light">To see the detail you must be logged in.</h4>
          </div>
  
     <div className="max-w-sm mx-auto">
          <form>
            <div className="flex flex-wrap -mx-3 mb-4">
                 <div className="w-full px-3">
                    <label className="block text-project-100 text-lg font-medium mb-1" htmlFor="email">Email</label>
                    <input 
                    id="email" 
                    type="email" 
                    className="form-input w-full text-gray-800 bg-project-900" 
                    placeholder="Enter your email address" required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    
                  </div>
              </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <div className="flex justify-between">
                          <label className="block text-project-100 text-lg font-prompt font-medium mb-1" htmlFor="password">Password</label>
                        </div>
                        <input 
                        id="password" 
                        type="password" 
                        className="form-input w-full text-gray-800" 
                        placeholder="Enter your password" required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
  
                    {/* Button Login */}
  
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                      <button 
                        className="btn text-project-500 bg-project-200 hover:bg-transparent hover:border-2 border-project-200 w-full" 
                        onClick={handleLogin}>
                       {isLoading ? 'Cargando...' : 'Sign In'}
                      </button>
                      </div>
                    </div>
  
                    <div className="text-gray-600 text-center mt-6">
                    Don’t you have an account? <Link to="/signup" className="text-project-100 font-bold  hover:underline transition duration-150 ease-in-out">Sign Up</Link>
                   </div>
                  </form>
         </div>
         </div>
         </div>
  </section>
    );
  };