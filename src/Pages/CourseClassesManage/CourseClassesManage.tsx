import React, { useEffect, useState } from "react";
import styles from "./CourseClassesManage.module.scss";
import { Button, Modal, Space, Table, Upload, message } from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import axios from "axios";
import moment from "moment";
import CourseClassesManagePanel from "./CourseClassesManagePanel/CourseClassesManagePanel";
import CourseClassesManagePopup from "./CourseClassesManagePopup/CourseClassesManagePopup";
import { FindByConditionData } from "../../shared/api/__generated__/data-contracts";

const { confirm } = Modal;

const CourseClassesManage = () => {
  const [courseClasses, setCourseClasses] = useState<FindByConditionData[]>([]);
  const [fileList, setFileList] = useState<FindByConditionData[]>([]);

  useEffect(() => {
    fetchCourseClasses();
  }, []);

  const fetchCourseClasses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/course-classes");
      setCourseClasses(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          startAt: moment(item.startAt).format("DD MMM YYYY"), // Format createdAt field
          endAt: item.endAt ? moment(item.endAt).format("DD MMM YYYY") : "N/A",
        }))
      );
    } catch (error) {
      console.error("Error fetching course class:", error);
      message.error("Failed to fetch course class");
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
      content: "Are you sure you want to delete this Course Classes?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteCourseClasses(record.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const deleteCourseClasses = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/course-classes/${id}`
      );
      const data = response.data;
      if (data.success) {
        fetchCourseClasses();
        message.success("Course Classes deleted successfully");
      } else {
        message.error("Failed to delete Course Classes");
      }
    } catch (error) {
      console.error("Error deleting Course Classes:", error);
      message.error("An error occurred while deleting Course Classes");
    }
  };

  const columns = [
    {
      title: "Course Class Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Course Class Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Date Start",
      dataIndex: "startAt",
      key: "startAt",
    },
    {
      title: "Date End",
      dataIndex: "endAt",
      key: "endAt",
    },
    {
      title: "Sessions Total",
      dataIndex: "sessionCount",
      key: "sessionCount",
    },
    {
      title: "Courses",
      dataIndex: ["course", "name"],
      key: "course",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <CourseClassesManagePanel />
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
        <CourseClassesManagePopup />
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
      <div className={styles.addProgram}>{/* <ProgramManagePopup /> */}</div>
      <Table
        columns={columns}
        dataSource={courseClasses}
        pagination={{ pageSize: 10 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default CourseClassesManage;
