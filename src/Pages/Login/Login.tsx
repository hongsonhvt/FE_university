import { useState } from "react";
import axios from "axios";
import { Button, Input, message } from "antd";
import styles from "./Login.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3000/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.data.access_token); 
        message.success("Login successful");
        navigate("/Home");
      })
      .catch((error) => {
        console.error("Login error:", error);
        message.error("Login failed");
      });
  };

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
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button type="primary" style={{ width: "200px" }} onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
