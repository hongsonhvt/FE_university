import React, { useState } from "react";
import { Table, Space, Modal } from "antd";
import styles from "./StudentManage.module.scss";
import StudentManagePanel from "./StudentManagePanel/StudentManagePanel";
import Search from "antd/es/input/Search";

const { confirm } = Modal;

const StudentManage = () => {
  const [students, setStudents] = useState<any>([
    {
      key: "1",
      id: "001",
      name: "John Doe",
      gender: "Male",
      managementClass: "A",
      email: "john.doe@example.com",
    },
    {
      key: "2",
      id: "002",
      name: "Jane Smith",
      gender: "Female",
      managementClass: "B",
      email: "jane.smith@example.com",
    },
  ]);

  const showDeleteConfirmation = (record: any) => {
    confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete this student?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("Deleting student:", record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "ID student",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Management Class",
      dataIndex: "managementClass",
      key: "managementClass",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>
            <StudentManagePanel />
          </a>
          <a onClick={() => showDeleteConfirmation(record)}>Delete</a>{" "}
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.studentManage}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        style={{ marginBottom: "35px", width: "500px", float: "right" }}
        // onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={students}
        pagination={{ pageSize: 10 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default StudentManage;
