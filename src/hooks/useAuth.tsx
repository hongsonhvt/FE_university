import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from '../shared/api/__generated__/Users';
import { Role } from '../shared/api/__generated__/data-contracts';

type AuthContextType = {
  accessToken: string | null;
  role: Role | null;
  isLoading: boolean;
  login: (data: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  role: null,
  isLoading: false,
  login: () => new Promise<void>(() => {}),
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    'accessToken',
    null,
  );
  const [role, setRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setIsLoading(true);
      new Users().getUserProfile().then((res) => {
        setRole(res.data.data.role);
        setIsLoading(false);
      });
    } else {
      setRole(null);
    }
  }, [accessToken]);

  // call this function when you want to authenticate the user
  const login: AuthContextType['login'] = async (data) => {
    setAccessToken(data);
    navigate('/');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setAccessToken(null);
    navigate('/Login', { replace: true });
  };

  const value = useMemo<AuthContextType>(
    () => ({
      role,
      accessToken,
      isLoading,
      login,
      logout,
    }),
    [accessToken, role],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
