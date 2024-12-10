import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
