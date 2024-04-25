import { UserOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Auth } from '../../shared/api/__generated__/Auth';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { accessToken, login } = useAuth();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    new Auth()
      .login({ email, password })
      .then((response) => login(response.data.data.accessToken))
      .catch((error) => {
        console.error('Login error:', error);
        message.error('Login failed');
      });
  };

  if (accessToken) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className={styles.Login}>
      <div className={styles.loginInput}>
        <Input
          size="large"
          placeholder="Email Address"
          prefix={<UserOutlined />}
          className={styles.input}
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          size="large"
          placeholder="Password"
          type="password"
          prefix={<UserOutlined />}
          className={styles.input}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Button type="primary" style={{ width: '200px' }} onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
