import { FC } from 'react';
import CalendarManage from '../../Pages/Calendar/CalendarManage';
import Classroom from '../../Pages/Class/Classroom';
import ClassManage from '../../Pages/ClassManage/ClassManage';
import ClassroomManage from '../../Pages/ClassroomManage/ClassroomManage';
import Course from '../../Pages/Course/Course';
import CourseClassesManage from '../../Pages/CourseClassesManage/CourseClassesManage';
import CourseManage from '../../Pages/CourseManage/CourseManage';
import GradeDetail from '../../Pages/GradeDetail/GradeDetail';
import Grades from '../../Pages/Grades/Grades';
import { Home } from '../../Pages/Home/Home';
import Information from '../../Pages/Information/Information';
import ProgramManage from '../../Pages/ProgramManage/ProgramManage';
import StudentManage from '../../Pages/StudentManage/StudentManage';
import SubjectManage from '../../Pages/SubjectManage/SubjectManage';
import TeacherManage from '../../Pages/TeacherManage/TeacherManage';

type RouteMapType = {
  route: string;
  component: FC;
};

export const routeMap: RouteMapType[] = [
  { route: '/CalendarManage', component: CalendarManage },
  { route: '/Course', component: Course },
  { route: '/Classroom', component: Classroom },
  { route: '/Information', component: Information },
  { route: '/Grades', component: Grades },
  { route: '/Home', component: Home },
  { route: '/StudentManage', component: StudentManage },
  { route: '/TeacherManage', component: TeacherManage },
  { route: '/SubjectManage', component: SubjectManage },
  { route: '/GradeDetail', component: GradeDetail },
  { route: '/ClassroomManage', component: ClassroomManage },
  { route: '/ProgramManage', component: ProgramManage },
  { route: '/CourseManage', component: CourseManage },
  { route: '/CourseClasses', component: CourseClassesManage },
  { route: '/ClassManage', component: ClassManage },
];
