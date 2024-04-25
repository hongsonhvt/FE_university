import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthorizedRoute } from './Components/Protected/AuthorizedRoute';
import { Fallback } from './Components/Protected/Fallback';
import { routeMap } from './Components/Protected/PrivateRoutes';
import { ProtectedRoute } from './Components/Protected/ProtectedRoute';
import Login from './Pages/Login/Login';
import { AuthProvider } from './hooks';

const App: React.FC = () => {
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
              element={
                <AuthorizedRoute roles={item.roles}>
                  {item.component}
                </AuthorizedRoute>
              }
            />
          ))}
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
