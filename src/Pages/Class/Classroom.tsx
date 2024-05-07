import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, message } from 'antd';
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
    <>
      {score.map((item) => (
        <Button
          onClick={() => navigate(`/gradeDetail?id=${item.id}`)}
          disabled={role !== Role.Teacher}
        >
          <div>
            <div className={styles.boxClassroom}>
              <Avatar
                shape="square"
                size={64}
                icon={<UserOutlined />}
                className={styles.boxAva}
              />
              <div className={styles.boxDetail}>
                <h2 className={styles.boxName}>{item.academicYear.name}</h2>
                <p className={styles.boxMajor}>{item.academicYear.code}</p>
              </div>
              <div>
                <>Scỏre</>
              </div>
            </div>
          </div>
        </Button>
      ))}
    </>
  );
};

export default Classroom;
