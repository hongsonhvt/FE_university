import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Fallback } from './Components/Protected/Fallback';
import { routeMap } from './Components/Protected/PrivateRoutes';
import { ProtectedRoute } from './Components/Protected/ProtectedRoute';
import Login from './Pages/Login/Login';
import { AuthProvider } from './hooks';

const App: React.FC = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Fallback />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          {routeMap.map((item) => (
            <Route
              key={item.route}
              path={item.route}
              element={<item.component />}
            />
          ))}
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
