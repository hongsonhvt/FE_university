import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const Fallback = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/Login" />;
  }

  return <Navigate to="/Home" />;
};
