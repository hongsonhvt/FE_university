import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import "./App.css";
import Sidebar from "./Components/SideBar/Sidebar";
import { Route, Routes } from "react-router-dom";
import CalendarManage from "./Pages/Calendar/CalendarManage";
import Course from "./Pages/Course/Course";
import Classroom from "./Pages/Class/Classroom";
import Information from "./Pages/Information/Information";
import Grades from "./Pages/Grades/Grades";
import { Home } from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import StudentManage from "./Pages/StudentManage/StudentManage";
// import { Home } from "./Pages/Home/Home";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible>
        <Sidebar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/CalendarManage" element={<CalendarManage />} />
            <Route path="/Course" element={<Course />} />
            <Route path="/Classroom" element={<Classroom />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/Grades" element={<Grades />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/StudentManage" element={<StudentManage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
