import { UserOutlined } from '@ant-design/icons';
import { Avatar, message } from 'antd';
import { useEffect, useState } from 'react';
import styles from './Grades.module.scss';
import { Scores } from '../../shared/api/__generated__/Scores';
import {
  GetMyScoresData,
  StudentScoreDto,
  StudentScoreScoreDto,
} from '../../shared/api/__generated__/data-contracts';

const Grades = () => {
  const [score, setScores] = useState<StudentScoreDto[]>([]);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await new Scores().getMyScores({});
      if (response?.data && Array.isArray(response.data)) {
        const studentScores: StudentScoreDto[] = response.data.map(
          (item: any) => ({
            academicYear: item.academicYear,
            id: item.id,
            scores: item.scores,
          }),
        );
        setScores(studentScores);
      } else {
        console.error('Error fetching score: Response data is not an array');
        message.error('Failed to fetch score');
      }
    } catch (error) {
      console.error('Error fetching score:', error);
      message.error('Failed to fetch score');
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.boxClassroom}>
        <div className={styles.inforClass}>
          <Avatar
            shape="square"
            size={64}
            icon={<UserOutlined />}
            className={styles.boxAva}
          />
        </div>
        <div className={styles.grades}>
          {score.length > 0 ? (
            score.map((item: StudentScoreDto, index: number) => (
              <div key={index}>
                <h3>Academic Year: {item.academicYear.name}</h3>
                <ul>
                  {item.scores.map(
                    (scoreItem: StudentScoreScoreDto, scoreIndex: number) => (
                      <li key={scoreIndex}>
                        Course ID: {scoreItem.courseClassId}, Score:{' '}
                        {scoreItem.score}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))
          ) : (
            <p>No scores available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grades;
