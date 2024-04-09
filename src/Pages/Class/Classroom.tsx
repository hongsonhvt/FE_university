import { Avatar, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Classroom.module.scss";

const Classroom = () => {
  return (
    <>
      <div>
        <div className={styles.boxClassroom}>
          <Avatar
            shape="square"
            size={64}
            icon={<UserOutlined />}
            className={styles.boxAva}
          />
          <div className={styles.boxDetail}>
            <h2 className={styles.boxName}>Data Base</h2>
            <p className={styles.boxMajor}>DB2024-2</p>
          </div>
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
            <h2 className={styles.boxName}>Data Base</h2>
            <p className={styles.boxMajor}>DB2024-2</p>
          </div>
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
            <h2 className={styles.boxName}>Data Base</h2>
            <p className={styles.boxMajor}>DB2024-2</p>
          </div>
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
            <h2 className={styles.boxName}>Data Base</h2>
            <p className={styles.boxMajor}>DB2024-2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classroom;
