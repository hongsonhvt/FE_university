import { Navigate } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { useAuth } from '../../hooks';

export const Fallback = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/Login" />;
  }

  return <Home />;
};
