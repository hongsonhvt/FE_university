import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import CalendarManage from '../../Pages/Calendar/CalendarManage';
import ClassManage from '../../Pages/ClassManage/ClassManage';
import CourseClassesManage from '../../Pages/CourseClassesManage/CourseClassesManage';
import CourseManage from '../../Pages/CourseManage/CourseManage';
import GradeDetail from '../../Pages/GradeDetail/GradeDetail';
import Grades from '../../Pages/Grades/Grades';
import { Home } from '../../Pages/Home/Home';
import Information from '../../Pages/Information/Information';
import ProgramManage from '../../Pages/ProgramManage/ProgramManage';
import StudentManage from '../../Pages/StudentManage/StudentManage';
import TeacherManage from '../../Pages/TeacherManage/TeacherManage';
import Classroom from '../../Pages/Class/Classroom';
import { Role } from '../../shared/api/__generated__/data-contracts';

type RouteMapType = {
  route: string;
  component: JSX.Element;
  roles?: Role[];
  sideBar?: {
    icon: JSX.Element;
    label: string;
  };
};

export const routeMap: RouteMapType[] = [
  {
    route: '/Home',
    component: <Home />,
    sideBar: {
      icon: <UploadOutlined />,
      label: 'Home',
    },
  },
  {
    route: '/Calendar',
    component: <CalendarManage />,
    roles: [Role.Student, Role.Teacher],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Calendar',
    },
  },
  {
    route: '/Class',
    component: <Classroom />,
    roles: [Role.Student, Role.Teacher],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Class',
    },
  },
  {
    route: '/CourseClasses',
    component: <CourseClassesManage />,
    roles: [Role.Admin],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Course Classes',
    },
  },
  {
    route: '/Course',
    component: <CourseManage />,
    roles: [Role.Admin],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Course',
    },
  },
  {
    route: '/GradeDetail',
    component: <GradeDetail />,
    roles: [Role.Teacher],
  },
  // {
  //   route: '/Grades',
  //   component: <Grades />,
  //   roles: [Role.Student],
  //   sideBar: {
  //     icon: <UserOutlined />,
  //     label: 'Grades',
  //   },
  // },
  {
    route: '/Information',
    component: <Information />,
    roles: [Role.Student, Role.Teacher],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Information',
    },
  },
  {
    route: '/Program',
    component: <ProgramManage />,
    roles: [Role.Admin],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Program',
    },
  },
  {
    route: '/Student',
    component: <StudentManage />,
    roles: [Role.Admin],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Student',
    },
  },
  {
    route: '/ClassManagement',
    component: <ClassManage />,
    roles: [Role.Admin],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Class Management',
    },
  },
  // {
  //   route: '/Subject',
  //   component: <SubjectManage />,
  //   roles: [Role.Admin],
  //   sideBar: {
  //     icon: <UserOutlined />,
  //     label: 'Subject',
  //   },
  // },
  {
    route: '/Teacher',
    component: <TeacherManage />,
    roles: [Role.Admin],
    sideBar: {
      icon: <UserOutlined />,
      label: 'Teacher',
    },
  },
];
