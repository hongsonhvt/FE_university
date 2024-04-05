import React from "react";
import styles from "./Grades.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Grades = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.boxClassroom}>
          <div className={styles.inforClass}>
            <Avatar
              shape="square"
              size={64}
              icon={<UserOutlined />}
              className={styles.boxAva}
            />
            <div className={styles.boxDetail}>
              <h2 className={styles.boxName}>AI</h2>
              <p className={styles.boxMajor}>DB2024-2</p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            Database subjects focus on researching and applying methods and
            technologies to organize, store, retrieve and manage data
            effectively, playing an important role in development. and maintain
            modern information systems.
          </div>
          <div className={styles.grades}>58%</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxClassroom}>
          <div className={styles.inforClass}>
            <Avatar
              shape="square"
              size={64}
              icon={<UserOutlined />}
              className={styles.boxAva}
            />
            <div className={styles.boxDetail}>
              <h2 className={styles.boxName}>AI</h2>
              <p className={styles.boxMajor}>DB2024-2</p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            Database subjects focus on researching and applying methods and
            technologies to organize, store, retrieve and manage data
            effectively, playing an important role in development. and maintain
            modern information systems.
          </div>
          <div className={styles.grades}>58%</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxClassroom}>
          <div className={styles.inforClass}>
            <Avatar
              shape="square"
              size={64}
              icon={<UserOutlined />}
              className={styles.boxAva}
            />
            <div className={styles.boxDetail}>
              <h2 className={styles.boxName}>AI</h2>
              <p className={styles.boxMajor}>DB2024-2</p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            Database subjects focus on researching and applying methods and
            technologies to organize, store, retrieve and manage data
            effectively, playing an important role in development. and maintain
            modern information systems.
          </div>
          <div className={styles.grades}>100%</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxClassroom}>
          <div className={styles.inforClass}>
            <Avatar
              shape="square"
              size={64}
              icon={<UserOutlined />}
              className={styles.boxAva}
            />
            <div className={styles.boxDetail}>
              <h2 className={styles.boxName}>AI</h2>
              <p className={styles.boxMajor}>DB2024-2</p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            Database subjects focus on researching and applying methods and
            technologies to organize, store, retrieve and manage data
            effectively, playing an important role in development. and maintain
            modern information systems.
          </div>
          <div className={styles.grades}>58%</div>
        </div>
      </div>
    </>
  );
};

export default Grades;
