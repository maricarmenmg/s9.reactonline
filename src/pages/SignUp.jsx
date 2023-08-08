import Layout from '../components/Layout';
import { Register } from '../components/Form';


function SignUp() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Layout title="SignUp">

      <main className="grow">
        <Register  />
      </main>

      </Layout>
    </div>
  );
}

export default SignUp;