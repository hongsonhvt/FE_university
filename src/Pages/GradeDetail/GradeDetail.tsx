import React, { useState } from "react";
import { Table, Input, Button } from "antd";

const GradeDetail = () => {
  const [data, setData] = useState([
    {
      key: "1",
      className: "Class A",
      email: "student1@example.com",
      subject: "Mathematics",
      grade: "",
      studentName: "Nguyễn Văn A",
    },
    {
      key: "2",
      className: "Class B",
      email: "student2@example.com",
      subject: "Science",
      grade: "",
      studentName: "Nguyễn Văn B",
    },
  ]);

  const onSave = () => {
    console.log("Saved", data);
  };

  const onCancel = () => {
    console.log("Cancelled");
  };

  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Class Name",
      dataIndex: "className",
      key: "className",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      width: 200,
      render: (_: any, record: any) => (
        <Input
          value={record.grade}
          onChange={(e) => {
            const newData = [...data];
            const index = newData.findIndex((item) => record.key === item.key);
            if (index > -1) {
              newData[index].grade = e.target.value;
              setData(newData);
            }
          }}
        />
      ),
    },
  ];

  return (
    <>
      <h2>Grades Detail</h2>
      <Table columns={columns} dataSource={data} />
      <div style={{ marginTop: "20px" }}>
        <Button type="primary" onClick={onSave}>
          Save
        </Button>
        <Button style={{ marginLeft: "10px" }} onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </>
  );
};

export default GradeDetail;
