import React, { useState, useEffect } from "react";
import { Button, Modal, Space, Table, Upload, message } from "antd";
import moment from "moment";
import axios from "axios";
import { FindByConditionData } from "../../shared/api/__generated__/data-contracts";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import styles from "./CourseManage.module.scss";
import Search from "antd/es/input/Search";
import CourseManagePanel from "./CourseManagePanel/CourseManagePanel";
import CourseManagePopup from "./CourseManagePopup/CourseManagePopup";

const { confirm } = Modal;

const CourseManage = () => {
  const [courses, setCourses] = useState<FindByConditionData[]>([]);
  const [fileList, setFileList] = useState<FindByConditionData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          createdAt: moment(item.createdAt).format("DD MMM YYYY"), // Format createdAt field
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format("DD MMM YYYY")
            : "", // Format deletedAt field
        }))
      );
    } catch (error) {
      console.error("Error fetching courses:", error);
      message.error("Failed to fetch courses");
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
      content: "Are you sure you want to delete this Courses?",
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
      const response = await axios.delete(
        `http://localhost:3000/courses/${id}`
      );
      const data = response.data;
      if (data.success) {
        fetchCourses();
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
      title: "Course Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Course Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Date Start",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <CourseManagePanel selected={record} />
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
          // fileList={fileList}
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
      <div className={styles.addProgram}>
        <CourseManagePopup />
      </div>
      <Table
        columns={columns}
        dataSource={courses}
        pagination={{ pageSize: 5 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default CourseManage;
