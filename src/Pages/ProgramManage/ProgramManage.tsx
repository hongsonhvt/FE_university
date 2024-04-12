import React, { useState, useEffect } from "react";
import { Table, Space, Modal, Upload, Button, message } from "antd";
import styles from "./ProgramManage.module.scss";
import Search from "antd/es/input/Search";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const ProgramManage = () => {
  const [programs, setPrograms] = useState<any[]>([]);
  const [fileList, setFileList] = useState<any>([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch("http://localhost:3000/programs/");
      const data = await response.json();
      if (data.success) {
        setPrograms(data.data);
      } else {
        console.error("Failed to fetch programs:", data.message);
      }
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  };

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
      content: "Are you sure you want to delete this Program?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteProgram(record.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const deleteProgram = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/programs/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        fetchPrograms();
        message.success("Program deleted successfully");
      } else {
        message.error("Failed to delete program");
      }
    } catch (error) {
      console.error("Error deleting program:", error);
      message.error("An error occurred while deleting program");
    }
  };

  const columns = [
    {
      title: "Program Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Program Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Date Start",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Date End",
      dataIndex: "deletedAt",
      key: "deletedAt",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>{<ProgramManage />}</a>
          <a onClick={() => showDeleteConfirmation(record)}>
            <DeleteOutlined />
            Delete
          </a>{" "}
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.studentManage}>
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
        dataSource={programs}
        pagination={{ pageSize: 10 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default ProgramManage;
