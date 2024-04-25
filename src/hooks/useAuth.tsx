import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  accessToken: string | null;
  login: (data: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  login: () => new Promise<void>(() => {}),
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    'accessToken',
    null,
  );
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login: AuthContextType['login'] = async (data) => {
    setAccessToken(data);
    navigate('/profile');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setAccessToken(null);
    navigate('/Login', { replace: true });
  };

  const value = useMemo<AuthContextType>(
    () => ({
      accessToken,
      login,
      logout,
    }),
    [accessToken],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
