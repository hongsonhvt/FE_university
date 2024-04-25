import { UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import { useState } from 'react';
import styles from './SubjectManage.module.scss';
import SubjectManagePanel from './SubjectManagePanel/SubjectManagePanel';

const { confirm } = Modal;

const SubjectManage = () => {
  const [fileList, setFileList] = useState<any>([]);
  const columns = [
    {
      title: 'ID Subject',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Subject Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Number of sessions',
      dataIndex: 'NumberOfSessions',
      key: 'NumberOfSessions',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>
            <SubjectManagePanel />
          </a>
          <a onClick={() => showDeleteConfirmation(record)}>Delete</a>{' '}
        </Space>
      ),
    },
  ];
  const handleUpload = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    setFileList(fileList);

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const data = [
    {
      id: 1,
      name: 'Mathematics',
      startDate: '2023-08-15',
      NumberOfSessions: 20,
    },
    {
      id: 2,
      name: 'Science',
      startDate: '2023-09-01',
      NumberOfSessions: 15,
    },
    {
      id: 3,
      name: 'History',
      startDate: '2023-07-01',
      NumberOfSessions: 18,
    },
    // Add more data as needed
  ];
  const showDeleteConfirmation = (record: any) => {
    confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this student?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('Deleting student:', record);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
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
            marginBottom: '35px',
            width: '500px',
            float: 'right',
          }}
          // onSearch={onSearch}
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default SubjectManage;
