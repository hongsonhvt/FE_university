import React from "react";
import styles from "./Login.module.scss";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.loginInput}>
        <Input
          size="large"
          placeholder="Email Address"
          prefix={<UserOutlined />}
          className={styles.input}
        />
        <Input
          size="large"
          placeholder="Password"
          prefix={<UserOutlined />}
          className={styles.input}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button type="primary" style={{ width: "200px" }}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
