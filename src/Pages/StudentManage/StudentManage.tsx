import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import styles from './StudentManage.module.scss';
// import StudentManagePanel from './StudentManagePanel/StudentManagePanel';
import moment from 'moment';
import { FindStudentsByConditionData } from '../../shared/api/__generated__/data-contracts';
import { Students } from '../../shared/api/__generated__/Students';
import StudentManagePopup from './StudentManagePopup/StudentManagePopup';

const { confirm } = Modal;

const StudentManage = () => {
  const [students, setStudents] = useState<FindStudentsByConditionData[]>([]);
  const [_, setFileList] = useState<FindStudentsByConditionData[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await new Students().findStudentsByCondition({});
      setStudents(
        response.data.data.map((item: any) => ({
          key: item.id,
          studentId: item.studentId,
          firstName: item.profile.firstName,
          middleName: item.profile.middleName,
          lastName: item.profile.lastName,
          ...item,
        })),
      );
    } catch (error) {
      console.error('Error fetching Students:', error);
      message.error('Failed to fetch Students');
    }
  };

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

  const showDeleteConfirmation = (record: any) => {
    confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this student?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteStudent(record.id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const deleteStudent = async (id: string) => {
    try {
      const response = await new Students().removeStudent(id);
      const data = response.data;
      if (data.success) {
        fetchStudents();
        message.success('Program deleted successfully');
      } else {
        message.error('Failed to delete program');
      }
    } catch (error) {
      console.error('Error deleting program:', error);
      message.error('An error occurred while deleting program');
    }
  };

  const columns = [
    {
      title: 'ID student',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: ' First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Middle Name',
      dataIndex: 'middleName',
      key: 'middleName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>{/* <StudentManagePanel selected={record} /> */}</a>
          <a onClick={() => showDeleteConfirmation(record)}>
            {' '}
            <DeleteOutlined />
            Delete
          </a>{' '}
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.studentManage}>
      <div className={styles.header}>
        <StudentManagePopup />
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
            marginBottom: '35px',
            width: '500px',
            float: 'right',
          }}
          // onSearch={onSearch}
        />
      </div>
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
