import React, { useState } from "react";
import { Table, Space, Modal, Upload, Button, message } from "antd";
import Search from "antd/es/input/Search";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./TeacherManage.module.scss";
import TeacherManagePanel from "./TeacherManagePanel/TeacherManagePanel";

const { confirm } = Modal;

const TeacherManage = () => {
  const [teachers, setTeachers] = useState<any>([
    {
      key: "1",
      id: "001",
      name: "John Doe",
      gender: "Male",
      email: "john.doe@example.com",
    },
    {
      key: "2",
      id: "002",
      name: "Jane Smith",
      gender: "Female",
      email: "jane.smith@example.com",
    },
  ]);

  const [fileList, setFileList] = useState<any>([]);

  const handleUpload = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    setFileList(fileList);

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const showDeleteConfirmation = (record: any) => {
    confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete this teacher?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("Deleting teacher:", record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "ID teacher",
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
            <TeacherManagePanel />
          </a>
          <a onClick={() => showDeleteConfirmation(record)}>Delete</a>{" "}
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.teacherManage}>
      <div className={styles.header}>
        <Upload
          fileList={fileList}
          onChange={handleUpload}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          style={{
            marginBottom: "35px",
            width: "500px",
            float: "right",
          }}
          // onSearch={onSearch}
        />
      </div>
      <Table
        columns={columns}
        dataSource={teachers}
        pagination={{ pageSize: 10 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default TeacherManage;
