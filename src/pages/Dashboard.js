import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
