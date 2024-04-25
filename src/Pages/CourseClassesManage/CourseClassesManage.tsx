import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Table, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import { CourseClasses } from '../../shared/api/__generated__/CourseClasses';
import { CourseClassListItemDto } from '../../shared/api/__generated__/data-contracts';
import styles from './CourseClassesManage.module.scss';
import CourseClassesManagePanel from './CourseClassesManagePanel/CourseClassesManagePanel';
import CourseClassesManagePopup from './CourseClassesManagePopup/CourseClassesManagePopup';

const CourseClassesManage = () => {
  const [courseClasses, setCourseClasses] = useState<CourseClassListItemDto[]>(
    [],
  );
  const [_, setFileList] = useState<CourseClassListItemDto[]>([]);

  useEffect(() => {
    fetchCourseClasses();
  }, []);

  const fetchCourseClasses = async () => {
    try {
      const response = await new CourseClasses().findCourseClassByCondition({});
      setCourseClasses(response.data.data.map((x) => ({ ...x, key: x.id })));
    } catch (error) {
      console.error('Error fetching course class:', error);
      message.error('Failed to fetch course class');
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

  const columns = [
    {
      title: 'Course Class Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Course Class Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Date Start',
      dataIndex: 'startAt',
      key: 'startAt',
    },
    {
      title: 'Date End',
      dataIndex: 'endAt',
      key: 'endAt',
    },
    {
      title: 'Sessions Total',
      dataIndex: 'sessionCount',
      key: 'sessionCount',
    },
    {
      title: 'Courses',
      dataIndex: ['course', 'name'],
      key: 'course',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, __: any) => (
        <Space size="middle">
          <CourseClassesManagePanel />
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
            marginBottom: '35px',
            width: '500px',
            float: 'right',
          }}
          // onSearch={onSearch}
        />
      </div>
      <div className={styles.addProgram}>{/* <ProgramManagePopup /> */}</div>
      <Table
        columns={columns}
        dataSource={courseClasses}
        pagination={{ pageSize: 5 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default CourseClassesManage;
