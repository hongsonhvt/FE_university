import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { ManagementClassListItemDto } from '../../shared/api/__generated__/data-contracts';
import styles from './ClassManage.module.scss';
import ClassManagePopUp from './ClassManagePopUp/ClassManagePopUp';

const { confirm } = Modal;

const ClassManage = () => {
  const [manageClasses, setManageClasses] = useState<
    ManagementClassListItemDto[]
  >([]);

  useEffect(() => {
    fetchManageClasses();
  }, []);

  const fetchManageClasses = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/management-classes',
      );
      setManageClasses(
        response.data.data.map((item: any) => ({
          key: item.id,
          name: item.name,
          code: item.code,
          academicYear: item.academicYear.name,
          createdAt: moment(item.createdAt).format('DD MMM YYYY'),
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format('DD MMM YYYY')
            : '',
        })),
      );
    } catch (error) {
      console.error('Error fetching Management Classes:', error);
      message.error('Failed to fetch Management Classes');
    }
  };

  // const handleUpload = (info: any) => {
  //   let fileList = [...info.fileList];
  //   fileList = fileList.slice(-1);
  //   setFileList(fileList);

  //   if (info.file.status === "done") {
  //     message.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === "error") {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // };

  const showDeleteConfirmation = (record: any) => {
    confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this Management Classes?',
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

  const deleteProgram = async (id: any) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/management-classes/${id}`,
      );
      const data = response.data;
      if (data.success) {
        fetchManageClasses();
        message.success('Management Classes deleted successfully');
      } else {
        message.error('Failed to delete Management Classes');
      }
    } catch (error) {
      console.error('Error deleting Management Classes:', error);
      message.error('An error occurred while deleting Management Classes');
    }
  };

  const columns = [
    {
      title: 'Management Classes Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Management Classes Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Academic Year',
      dataIndex: 'academicYear',
      key: 'academicYear',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
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
      <div className={styles.header}>
        <Upload
          // fileList={fileList}
          // onChange={handleUpload}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <ClassManagePopUp />
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
        dataSource={manageClasses}
        pagination={{ pageSize: 10 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default ClassManage;
