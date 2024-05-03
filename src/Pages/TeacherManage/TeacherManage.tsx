import { UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import styles from './TeacherManage.module.scss';
import TeacherManagePanel from './TeacherManagePanel/TeacherManagePanel';
import { FindTeachersByConditionData } from '../../shared/api/__generated__/data-contracts';
import { Teachers } from '../../shared/api/__generated__/Teachers';
import TeacherManagePopup from './TeacherManagePopup/TeacherManagePopup';

const { confirm } = Modal;

const TeacherManage = () => {
  const [teachers, setTeachers] = useState<FindTeachersByConditionData[]>([]);
  const [_, setFileList] = useState<FindTeachersByConditionData[]>([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await new Teachers().findTeachersByCondition({});
      setTeachers(
        response.data.data.map((item: any) => ({
          key: item.id,
          teacherId: item.teacherId,
          firstName: item.profile.firstName,
          middleName: item.profile.middleName,
          lastName: item.profile.lastName,
          ...item,
        })),
      );
    } catch (error) {
      console.error('Error fetching Teachers:', error);
      message.error('Failed to fetch Teachers');
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
      content: 'Are you sure you want to delete this teacher?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteTeacher(record.id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const deleteTeacher = async (id: string) => {
    try {
      const response = await new Teachers().removeTeacher(id);
      const data = response.data;
      if (data.success) {
        fetchTeachers();
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
      title: 'ID teacher',
      dataIndex: 'teacherId',
      key: 'teacherId',
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
          <a>{/* <TeacherManagePanel /> */}</a>
          <a onClick={() => showDeleteConfirmation(record)}>Delete</a>{' '}
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.teacherManage}>
      <div className={styles.header}>
        <TeacherManagePopup />
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
        dataSource={teachers}
        pagination={{ pageSize: 10 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default TeacherManage;
