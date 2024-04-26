import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Upload, message } from 'antd';
import Search from 'antd/es/input/Search';
import { useState } from 'react';
import styles from './ClassroomManage.module.scss';

const ClassroomManage = () => {
  const [fileList, setFileList] = useState<any>([]);
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
  return (
    <div style={{ display: 'grid' }}>
      <div style={{ display: 'flex' }}>
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
            marginLeft: 'auto',
          }}
          // onSearch={onSearch}
        />
      </div>
      <div>
        <div className={styles.boxClassroom}>
          <Avatar
            shape="square"
            size={64}
            icon={<UserOutlined />}
            className={styles.boxAva}
          />
          <div className={styles.boxDetail}>
            <h2 className={styles.boxName}>GCH220001</h2>
            <b className={styles.boxMajor}>2023-2045</b>
          </div>
          <Button
            style={{
              marginLeft: 'auto',
              marginRight: '20px',
              height: '40px',
              width: '100px',
            }}
          >
            Edit
          </Button>
        </div>
      </div>
      <div>
        <div className={styles.boxClassroom}>
          <Avatar
            shape="square"
            size={64}
            icon={<UserOutlined />}
            className={styles.boxAva}
          />
          <div className={styles.boxDetail}>
            <h2 className={styles.boxName}>GCH220001</h2>
            <b className={styles.boxMajor}>2023-2045</b>
          </div>
          <Button
            style={{
              marginLeft: 'auto',
              marginRight: '20px',
              height: '40px',
              width: '100px',
            }}
          >
            Edit
          </Button>
        </div>
      </div>
      <div>
        <div className={styles.boxClassroom}>
          <Avatar
            shape="square"
            size={64}
            icon={<UserOutlined />}
            className={styles.boxAva}
          />
          <div className={styles.boxDetail}>
            <h2 className={styles.boxName}>GCH220001</h2>
            <b className={styles.boxMajor}>2023-2045</b>
          </div>
          <Button
            style={{
              marginLeft: 'auto',
              marginRight: '20px',
              height: '40px',
              width: '100px',
            }}
          >
            Edit
          </Button>
        </div>
      </div>
      <div>
        <div className={styles.boxClassroom}>
          <Avatar
            shape="square"
            size={64}
            icon={<UserOutlined />}
            className={styles.boxAva}
          />
          <div className={styles.boxDetail}>
            <h2 className={styles.boxName}>GCH220001</h2>
            <b className={styles.boxMajor}>2023-2045</b>
          </div>
          <Button
            style={{
              marginLeft: 'auto',
              marginRight: '20px',
              height: '40px',
              width: '100px',
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClassroomManage;
