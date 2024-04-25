import { Button, Drawer, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { useState } from 'react';
import styles from './TeacherManagePanel.module.scss';

const TeacherManagePanel = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    onCloseDrawer();
  };

  const genderOptions = ['Male', 'Female'];

  return (
    <div className={styles.TeacherManagePanel}>
      <Button type="primary" onClick={showDrawer}>
        Edit Teacher
      </Button>
      <Drawer
        title="Edit Teacher Information"
        width={720}
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="id"
            label="ID"
            rules={[{ required: true, message: 'Please input Teacher ID!' }]}
          >
            <Input placeholder="Teacher ID" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input Teacher name!' }]}
          >
            <Input placeholder="Teacher Name" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              { required: true, message: 'Please select Teacher gender!' },
            ]}
          >
            <Select placeholder="Select gender">
              {genderOptions.map((option, idx) => (
                <Option key={`${idx}`} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input Teacher email!' }]}
          >
            <Input placeholder="Teacher Email" type="email" />
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

export default TeacherManagePanel;
