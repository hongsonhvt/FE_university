import React, { useState } from "react";
import { Table, Button, Drawer, Form, Input, Select } from "antd";
import styles from "./StudentManagePanel.module.scss";

const { Option } = Select;

const StudentManagePanel = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    onCloseDrawer();
  };

  // Dữ liệu cho phần Gender
  const genderOptions = ["Male", "Female"];

  return (
    <div className={styles.studentManagePanel}>
      <Button type="primary" onClick={showDrawer}>
        Edit Student
      </Button>
      <Drawer
        title="Edit Student Information"
        width={720}
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="id"
            label="ID"
            rules={[{ required: true, message: "Please input student ID!" }]}
          >
            <Input placeholder="Student ID" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input student name!" }]}
          >
            <Input placeholder="Student Name" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              { required: true, message: "Please select student gender!" },
            ]}
          >
            <Select placeholder="Select gender">
              {genderOptions.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="managementClass"
            label="Management Class"
            rules={[
              { required: true, message: "Please input management class!" },
            ]}
          >
            <Input placeholder="Management Class" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input student email!" }]}
          >
            <Input placeholder="Student Email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default StudentManagePanel;
