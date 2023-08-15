import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [isLoading, setIsLoading] = useState(false); // Estado para mostrar el mensaje de error
  

  const handleRegister = () => {
    const user = { email, password };
    localStorage.setItem(email, JSON.stringify(user));

    console.log('Registro exitoso');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

  <section className="bg-transparent">

       <div className="max-w-6xl mx-auto py-12 mt-32 sm:px-26">
       <div className="pt-6 pb-12 md:pt-6 md:pb-20">

        {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
           <h3 className="h3 text-project-100 font-prompt">Welcome<br/>Sign Up your new account</h3>
           <h4 className="h4 text-gray-600 font-prompt">Join the Community Millions of movies, TV shows  to discover.</h4>
           
        </div>

       {/* Form Register */}
     <div className="max-w-sm mx-auto">
          <form>
             <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-project-100 text-lg font-prompt  font-medium mb-1" htmlFor="email">Email</label>
                  <input 
                  id="email" 
                  type="email" 
                  className="form-input w-full text-gray-800" 
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

            {/* Button Register */}

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-project-500 bg-project-200 hover:bg-transparent hover:border-2 border-project-200 w-full"  onClick={handleRegister}> Sign up </button>
                </div>
              </div>

                                
              <div className="text-gray-600 text-center mt-6">
                 You have an account? Log in <Link to="/signin" className="text-project-100 font-bold hover:underline transition duration-150 ease-in-out">Sign In</Link>
              </div>
                 
            </form>

   </div>
   </div>
   </div>
</section>

  );
};