import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Row, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Scores } from '../../shared/api/__generated__/Scores';
import {
  Role,
  StudentScoreDto,
} from '../../shared/api/__generated__/data-contracts';
import styles from './Classroom.module.scss';

const Classroom = () => {
  const [score, setScores] = useState<StudentScoreDto[]>([]);
  const { userProfile, role } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await new Scores().getMyScores({
        academicYearId:
          userProfile.profile?.student?.managementClass.academicYear.id ?? '',
      });
      setScores(response.data.data ?? []);
    } catch (error) {
      console.error('Error fetching score:', error);
      message.error('Failed to fetch score');
    }
  };
  return (
    <Col sm={24} lg={24}>
      {score.map((item) => (
        <Row
          style={{ width: '100%' }}
          justify="space-between"
          className={styles.boxClassroom}
        >
          <Row>
            <Avatar
              shape="square"
              size={64}
              icon={<UserOutlined />}
              className={styles.boxAva}
            />
            <Button
              onClick={() => navigate(`/gradeDetail?id=${item.id}`)}
              disabled={role !== Role.Teacher}
              type="link"
              style={{ minHeight: 64 }}
              className={styles.boxDetail}
            >
              <div className={styles.boxName}>{item.name}</div>
              <div className={styles.boxMajor}>{item.code}</div>
            </Button>
          </Row>

          <div style={{ paddingRight: 8 }}>
            <>{item.scores.map((item) => String(item))}</>
          </div>
        </Row>
      ))}
    </Col>
  );
};

export default Classroom;
