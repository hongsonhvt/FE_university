import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import moment from 'moment'; // Import moment library
import { useEffect, useState } from 'react';
import { Programs } from '../../shared/api/__generated__/Programs';
import { FindProgramByConditionData } from '../../shared/api/__generated__/data-contracts';
import styles from './ProgramManage.module.scss';
import ProgramManagePanel from './ProgramManagePanel/ProgramManagePanel';
import ProgramManagePopup from './ProgramManagePopup/ProgramManagePopup';

const { confirm } = Modal;

const ProgramManage = () => {
  const [programs, setPrograms] = useState<FindProgramByConditionData[]>([]);
  const [_, setFileList] = useState<FindProgramByConditionData[]>([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await new Programs().findProgramByCondition({});
      setPrograms(
        response.data.data.map((item: any) => ({
          key: item.id,
          ...item,
          createdAt: moment(item.createdAt).format('DD MMM YYYY'),
          deletedAt: item.deletedAt
            ? moment(item.deletedAt).format('DD MMM YYYY')
            : '', // Format deletedAt field
        })),
      );
    } catch (error) {
      console.error('Error fetching programs:', error);
      message.error('Failed to fetch programs');
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
      content: 'Are you sure you want to delete this Program?',
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
      const response = await new Programs().removeProgram(id);
      const data = response.data;
      if (data.success) {
        fetchPrograms();
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
      title: 'Program Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Program Code',
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
          <ProgramManagePanel selected={record} />
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
        <ProgramManagePopup />
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
        dataSource={programs}
        pagination={{ pageSize: 5 }}
        // onChange={handlePaginationChange}
      />
    </div>
  );
};

export default ProgramManage;
