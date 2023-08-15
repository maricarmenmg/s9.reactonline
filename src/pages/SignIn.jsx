import Layout from '../components/Layout';
import { Login } from '../components/Login';

function SignIn() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Layout title="SignIn">

      {/* Page content */}
      <main className="grow">
        {/* Page sections */}
        <Login />
      </main>

      {/* Site footer */}
      </Layout>
    </div>
  );
}

export default SignIn;
