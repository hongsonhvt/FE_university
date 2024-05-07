import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Drawer,
  Flex,
  Table,
  Upload,
  message,
  notification,
} from 'antd';
import Search from 'antd/es/input/Search';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { CourseClasses } from '../../shared/api/__generated__/CourseClasses';
import { Teachers } from '../../shared/api/__generated__/Teachers';
import {
  CourseClassListItemDto,
  TeacherSimpleDto,
} from '../../shared/api/__generated__/data-contracts';
import styles from './CourseClassesManage.module.scss';
import CourseClassesManagePanel from './CourseClassesManagePanel/CourseClassesManagePanel';
import CourseClassesManagePopup from './CourseClassesManagePopup/CourseClassesManagePopup';
import CourseClassesStudentsList from './CourseClassesStudentsList/CourseClassesStudentsList';

const CourseClassesManage = () => {
  const [api, contextHolder] = notification.useNotification();
  const [_, setFileList] = useState<CourseClassListItemDto[]>([]);
  const [teachers, setTeachers] = useState<TeacherSimpleDto[]>([]);
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  const [panelData, setPanelData] = useState<CourseClassListItemDto | null>(
    null,
  );
  const [courseClasses, setCourseClasses] = useState<CourseClassListItemDto[]>(
    [],
  );

  const onClickShowPanel = (courseClass: CourseClassListItemDto) => {
    setPanelData(courseClass);
    setIsOpenPanel(true);
  };

  const onClickShowList = (courseClass: CourseClassListItemDto) => {
    setPanelData(courseClass);
    setIsOpenList(true);
  };

  const columns = useMemo(
    () => [
      ...fixedColumns,
      {
        title: 'Action',
        key: 'action',
        render: (_: any, record: CourseClassListItemDto) => (
          <Flex gap={4}>
            <Button type="primary" onClick={() => onClickShowPanel(record)}>
              Edit
            </Button>
            <Button type="primary" onClick={() => onClickShowList(record)}>
              List
            </Button>
          </Flex>
        ),
      },
    ],
    [teachers],
  );

  useEffect(() => {
    fetchCourseClasses();
    fetchTeachers();
  }, []);

  useEffect(() => {
    if (!isOpenPanel && !isOpenList) {
      setPanelData(null);
    }
  }, [isOpenPanel, isOpenList]);

  const fetchCourseClasses = async () => {
    try {
      const response = await new CourseClasses().findCourseClassByCondition({});
      setCourseClasses(response.data.data.map((x) => ({ ...x, key: x.id })));
    } catch (error) {
      console.error('Error fetching course class:', error);
      message.error('Failed to fetch course class');
    }
  };

  const fetchTeachers = async () => {
    try {
      const response = await new Teachers().findTeachersByCondition({});
      setTeachers(response.data.data);
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

  const handleUpdate = () => {
    setIsOpenPanel(false);
    api.success({ message: 'Updated' });
  };

  return (
    <div className={styles.studentManage}>
      <div
        className={styles.header}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <CourseClassesManagePopup />
        <Upload onChange={handleUpload} beforeUpload={() => false}>
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
        />
      </div>
      <Table
        columns={columns}
        dataSource={courseClasses}
        pagination={{ pageSize: 5 }}
      />
      <Drawer
        title="Edit Course class information"
        width={720}
        onClose={() => setIsOpenPanel(false)}
        open={isOpenPanel}
        styles={{ body: { paddingBottom: 80 } }}
      >
        <CourseClassesManagePanel
          data={panelData}
          teachers={teachers}
          onFinish={handleUpdate}
        />
      </Drawer>
      <Drawer
        title="Edit Course class information"
        width={720}
        onClose={() => setIsOpenList(false)}
        open={isOpenList}
        styles={{ body: { paddingBottom: 80 } }}
      >
        <CourseClassesStudentsList courseClass={panelData} />
      </Drawer>
      {contextHolder}
    </div>
  );
};

const fixedColumns = [
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
    render: (text: string) => moment(text).format('DD MMM YYYY'),
  },
  {
    title: 'Date End',
    dataIndex: 'endAt',
    key: 'endAt',
    render: (text: string) => moment(text).format('DD MMM YYYY'),
  },
  {
    title: 'Sessions Total',
    dataIndex: 'sessionCount',
    key: 'sessionCount',
  },
  {
    title: 'Courses',
    dataIndex: ['course', 'code'],
    key: 'course',
  },
];

export default CourseClassesManage;
