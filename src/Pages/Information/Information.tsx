import { UserOutlined } from '@ant-design/icons';
import { Avatar, Row } from 'antd';
import CustomTooltip from '../../Components/Components/tooltip/CustomTooltip';
import TextItem from './../../Components/Components/text-item/TextItem';
import styles from './Information.module.scss';

const Information = () => {
  return (
    <>
      <div className={styles.studentInfor}>
        <Avatar
          shape="square"
          size={64}
          icon={<UserOutlined />}
          className={styles.studentAva}
        />
        <div className={styles.studentDetail}>
          <h2 className={styles.studentName}>David Field</h2>
          <p className={styles.studentMajor}>Information Technology</p>
        </div>
      </div>
      <div>
        <div>
          <Row>
            <TextItem label="Name">
              <CustomTooltip rows={1}>David Field</CustomTooltip>
            </TextItem>
            <TextItem label="Student ID">IT9845</TextItem>

            <TextItem label="Date of Birth">20 May 2000</TextItem>
            <TextItem label="Gender">Female</TextItem>

            <TextItem label="Home Town">Ha Noi</TextItem>
            <TextItem label="Address">453 Ha Noi</TextItem>
          </Row>
        </div>
        <div>
          {' '}
          <Row>
            <TextItem label="Phone Number">012345678</TextItem>
            <TextItem label="Email">abcd@gmail.com</TextItem>

            <TextItem label="Class">CIT2024.2</TextItem>
            <TextItem label="Major">Information Technology</TextItem>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Information;
