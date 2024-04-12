import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import CalendarManage from "../../Pages/Calendar/CalendarManage";

const Sidebar = () => {
  return (
    <>
      <div className={styles.leftBar} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        // style={{ width: "500px" }}
        items={[
          {
            key: "1",
            icon: <UploadOutlined />,
            label: <Link to="./Home"> Home</Link>,
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Link to="./Course"> Course</Link>,
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: <Link to="./Classroom"> Classroom</Link>,
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: <Link to="./Information"> Information</Link>,
          },
          {
            key: "5",
            icon: <UploadOutlined />,
            label: <Link to="./Grades"> Grades</Link>,
          },
          {
            key: "6",
            icon: <UserOutlined />,
            label: <Link to="./CalendarManage"> Calendar</Link>,
          },
          {
            key: "7",
            icon: <UserOutlined />,
            label: <Link to="./ProgramManage">Program Manage</Link>,
          },
          {
            key: "8",
            icon: <UserOutlined />,
            label: <Link to="./StudentManage">Student Management</Link>,
          },
          {
            key: "9",
            icon: <UserOutlined />,
            label: <Link to="./TeacherManage">Teacher Management</Link>,
          },
          {
            key: "10",
            icon: <UserOutlined />,
            label: <Link to="./SubjectManage">Subject Management</Link>,
          },
          {
            key: "11",
            icon: <UserOutlined />,
            label: <Link to="./GradeDetail">Grades Detail</Link>,
          },
          {
            key: "12",
            icon: <UserOutlined />,
            label: <Link to="./ClassroomManage">Classroom Manage</Link>,
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
