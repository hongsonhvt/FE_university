import { Button, DatePicker, Drawer, Form, Input } from 'antd';
import { useState } from 'react';
import styles from './CourseClassesManagePanel.module.scss';
const CourseClassesManagePanel = () => {
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
  return (
    <div className={styles.studentManagePanel}>
      <Button type="primary" onClick={showDrawer}>
        Edit Course Classes
      </Button>
      <Drawer
        title="Edit Course Classes Information"
        width={720}
        onClose={onCloseDrawer}
        open={isDrawerVisible}
        styles={{ body: { paddingBottom: 80 } }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Course Classes Name"
            rules={[{ required: true, message: 'Please input Program name!' }]}
          >
            <Input placeholder="Subject Name" />
          </Form.Item>
          <Form.Item
            name="startAt"
            label="Start Date"
            rules={[{ required: true, message: 'Please select start date!' }]}
            className={styles.startDate}
          >
            <DatePicker
              style={{ width: '100%' }}
              format={{
                format: 'DD-MM-YYYY',
                type: 'mask',
              }}
              // onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            name="code"
            label="Course Class Code"
            rules={[
              { required: true, message: 'Please input number of session' },
            ]}
          >
            <Input placeholder="Number of Session" type="number" />
          </Form.Item>
          <Form.Item
            name="sessionCount"
            label="Sessions Total"
            rules={[
              { required: true, message: 'Please input number of session' },
            ]}
          >
            <Input placeholder="Number of Session" type="number" />
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

export default CourseClassesManagePanel;
