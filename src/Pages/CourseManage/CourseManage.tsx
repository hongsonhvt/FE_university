import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Courses } from '../../shared/api/__generated__/Courses';
import { FindCourseByConditionData } from '../../shared/api/__generated__/data-contracts';
import styles from './CourseManage.module.scss';
import CourseManagePanel from './CourseManagePanel/CourseManagePanel';
import CourseManagePopup from './CourseManagePopup/CourseManagePopup';

const { confirm } = Modal;

const CourseManage = () => {
  const [courses, setCourses] = useState<FindCourseByConditionData[]>([]);
  const [_, setFileList] = useState<FindCourseByConditionData[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await new Courses().findCourseByCondition({});
      setCourses(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          createdAt: moment(item.createdAt).format('DD MMM YYYY'), // Format createdAt field
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format('DD MMM YYYY')
            : '', // Format deletedAt field
        })),
      );
    } catch (error) {
      console.error('Error fetching courses:', error);
      message.error('Failed to fetch courses');
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
      content: 'Are you sure you want to delete this Courses?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteProgram(record.id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const deleteProgram = async (id: string) => {
    try {
      const response = await new Courses().removeCourse(id);
      const data = response.data;
      if (data.success) {
        fetchCourses();
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
      title: 'Course Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Course Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Date Start',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <CourseManagePanel selected={record} />
          <a onClick={() => showDeleteConfirmation(record)}>
            <DeleteOutlined />
            Delete
          </a>{' '}
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.studentManage}>
      <div
        className={styles.header}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <CourseManagePopup />
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
      <div className={styles.addProgram}></div>
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
