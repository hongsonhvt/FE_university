import { UserOutlined } from '@ant-design/icons';
import { Avatar, Row, message } from 'antd';
import CustomTooltip from '../../Components/Components/tooltip/CustomTooltip';
import TextItem from './../../Components/Components/text-item/TextItem';
import styles from './Information.module.scss';
import { useEffect, useState } from 'react';
import { Users } from '../../shared/api/__generated__/Users';
import {
  GetUserProfileData,
  JwtUserDto,
} from '../../shared/api/__generated__/data-contracts';

const Information = () => {
  const [user, setUser] = useState<JwtUserDto | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await new Users().getUserProfile({});
      console.log(response.data.data.profile);
      if (response.data.success) {
        setUser(response.data.data);
      } else {
        console.error('Error fetching user:', response.data.message);
        message.error('Failed to fetch user');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      message.error('Failed to fetch user');
    }
  };

  if (!user) {
    return null;
  }

  const fullName = `${user.profile.firstName} ${
    user.profile.middleName ? user.profile.middleName + ' ' : ''
  }${user.profile.lastName}`;
  const gender = user.profile.isMale ? 'Male' : 'Female';
  const id =
    user.role === 'Teacher'
      ? user.profile.teacher?.teacherId
      : user.profile.student?.studentId;

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
          <h2 className={styles.studentName}>{fullName}</h2>
          <p className={styles.studentMajor}>{user.role}</p>
        </div>
      </div>
      <div>
        <div>
          <Row>
            <TextItem label="Name">
              <CustomTooltip rows={1}>{fullName}</CustomTooltip>
            </TextItem>
            <TextItem label="ID">{id}</TextItem>
            <TextItem label="Address">{user.profile.address}</TextItem>
            <TextItem label="Gender">{gender}</TextItem>
            <TextItem label="Phone number">{user.profile.phoneNumber}</TextItem>
            <TextItem label="Email">{user.email}</TextItem>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Information;
