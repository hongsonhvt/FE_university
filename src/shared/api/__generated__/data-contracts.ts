/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AcademicYearDto {
  code: string;
  endYear: number;
  id: string;
  isCurrent: boolean;
  name: string;
  startYear: number;
}

export interface AccessToken {
  accessToken: string;
}

export interface AddCoursesDto {
  courses: string[];
}

export type AddProgramCoursesData = Result & {
  data?: ProgramDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type AddProgramCoursesError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface Course {
  code: string;
  id: string;
  name: string;
}

export interface CourseClass {
  code: string;
  id: string;
  name: string;
}

export interface CourseClassDto {
  code: string;
  course: {
    code: string;
    id: string;
    name: string;
  };
  endAt?: string;
  id: string;
  isoSlots: CourseClassSlotDto[];
  name: string;
  sessionCount: number;
  startAt: string;
  students: StudentDto[];
}

export interface CourseClassListItemDto {
  code: string;
  course: {
    code: string;
    id: string;
    name: string;
  };
  endAt?: string;
  id: string;
  isoSlots: CourseClassSlotDto[];
  name: string;
  sessionCount: number;
  startAt: string;
}

export interface CourseClassSlotDto {
  endAt: string;
  startAt: string;
}

export interface CourseDto {
  code: string;
  createdAt: string;
  id: string;
  name: string;
  programs: Program[];
}

export interface CourseListItemDto {
  code: string;
  createdAt: string;
  id: string;
  name: string;
}

export type CreateAcademicYearData = Result & {
  data?: AcademicYearDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface CreateAcademicYearDto {
  /**
   * @min 2010
   * @max 2050
   */
  startYear: number;
}

export type CreateAcademicYearError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateCourseClassData = Result & {
  data?: CourseClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface CreateCourseClassDto {
  code: string;
  courseId: string;
  endAt?: string;
  isoSlots: CreateCourseClassSlotDto[];
  name: string;
  /**
   * @min 1
   * @max 50
   */
  sessionCount: number;
  startAt: string;
  teacherId: string;
}

export type CreateCourseClassError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface CreateCourseClassSlotDto {
  endAt: string;
  startAt: string;
}

export type CreateCourseData = Result & {
  data?: CourseDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface CreateCourseDto {
  code: string;
  name: string;
  programIds: string[];
}

export type CreateCourseError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateManagementClassData = Result & {
  data?: ManagementClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface CreateManagementClassDto {
  academicYearId: string;
  code: string;
  name: string;
  programId: string;
}

export type CreateManagementClassError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateProgramData = Result & {
  data?: ProgramListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface CreateProgramDto {
  code: string;
  name: string;
}

export type CreateProgramError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateUserData = any;

export interface CreateUserDto {
  email: string;
  password: string;
  profile?: CreateUserProfileDto;
  role: object;
}

export interface CreateUserProfileDto {
  address?: string | null;
  firstName: string;
  isMale: boolean;
  lastName: string;
  middleName?: string | null;
  phoneNumber?: string | null;
  student?: CreateUserProfileStudentDto;
  teacher?: CreateUserProfileTeacherDto;
}

export interface CreateUserProfileStudentDto {
  managementClassId: string;
  studentId: string;
}

export interface CreateUserProfileTeacherDto {
  teacherId: string;
}

export type FindAcademicYearInRangeData = Result & {
  data?: AcademicYearDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindAcademicYearInRangeQuery {
  end?: number;
  start?: number;
}

export type FindCourseByConditionData = Result & {
  data?: CourseListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindCourseByConditionQuery {
  code?: string;
  name?: string;
}

export type FindCourseClassByConditionData = Result & {
  data?: CourseClassListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindCourseClassByConditionQuery {
  code?: string;
  name?: string;
}

export type FindManagementClassByConditionData = Result & {
  data?: ManagementClassListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindManagementClassByConditionQuery {
  academicYearId?: string;
  code?: string;
  name?: string;
  programId?: string;
}

export type FindOneAcademicYearData = Result & {
  data?: AcademicYearDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneCourseClassData = Result & {
  data?: CourseClassDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneCourseData = Result & {
  data?: CourseDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneManagementClassData = Result & {
  data?: ManagementClassDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneProgramData = Result & {
  data?: ProgramDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneSessionData = Result & {
  data?: SessionDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindProgramByConditionData = Result & {
  data?: ProgramListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindProgramByConditionQuery {
  code?: string;
  name?: string;
}

export type GetCourseClassSessionsData = Result & {
  data?: SessionDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetCourseClassSessionsError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type GetCurrentAcademicYearData = Result & {
  data?: AcademicYearDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetSessionByConditionData = Result & {
  data?: SessionDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface GetSessionByConditionQuery {
  courseClassId?: string;
  from?: string;
  substituteTeacherId?: string;
  to?: string;
}

export type GetUserProfileData = Result & {
  data?: JwtUserDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface JwtUserDto {
  email: string;
  role: Role;
  sub: string;
}

export type LoginData = Result & {
  data?: AccessToken;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type LoginError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface LoginModel {
  email: string;
  password: string;
}

export interface ManagementClass {
  code: string;
  id: string;
  name: string;
}

export interface ManagementClassDto {
  academicYear: AcademicYearDto;
  code: string;
  id: string;
  name: string;
  program: ProgramDto;
  students: StudentDto[];
}

export interface ManagementClassListItemDto {
  academicYear: AcademicYearDto;
  code: string;
  id: string;
  name: string;
}

export interface Program {
  code: string;
  id: string;
  name: string;
}

export interface ProgramDto {
  code: string;
  courses: Course[];
  createdAt: string;
  id: string;
  managementClass: ManagementClass[];
  name: string;
}

export interface ProgramListItemDto {
  code: string;
  createdAt: string;
  id: string;
  name: string;
}

export type RemoveAcademicYearData = Result & {
  data?: AcademicYearDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveAcademicYearError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveCourseClassData = Result & {
  data?: CourseClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveCourseClassError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveCourseData = Result & {
  data?: CourseDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveCourseError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveManagementClassData = Result & {
  data?: ManagementClassDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveManagementClassError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveProgramData = Result & {
  data?: ProgramListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveProgramError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveSessionData = string;

export interface Result {
  data: object;
  message: object;
  success: boolean;
}

export enum Role {
  SystemAdmin = 'SystemAdmin',
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student',
}

export interface SessionDto {
  courseClass: CourseClass;
  endAt: string;
  id: string;
  startAt: string;
  substituteTeacher?: Teacher;
}

export interface StudentDto {
  profile: StudentProfileDto;
}

export interface StudentProfileDto {
  firstName: string;
  id: string;
  lastName: string;
}

export interface Teacher {
  id: string;
  profile: TeacherProfile;
  teacherId: string;
}

export interface TeacherProfile {
  firstName: string;
  id: string;
  lastName: string;
  middleName: string;
}

export type UpdateCourseClassData = Result & {
  data?: CourseClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface UpdateCourseClassDto {
  code?: string;
  endAt?: string;
  name?: string;
  startAt?: string;
  teacherId?: string;
}

export type UpdateCourseClassError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateCourseClassStudentsListData = Result & {
  data?: CourseClassDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface UpdateCourseClassStudentsListDto {
  studentIds: string[];
}

export type UpdateCourseClassStudentsListError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateCourseData = Result & {
  data?: CourseDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface UpdateCourseDto {
  code?: string;
  name?: string;
  programIds?: string[];
}

export type UpdateCourseError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateCurrentData = Result & {
  data?: boolean;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type UpdateCurrentError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateManagementClassData = Result & {
  data?: ManagementClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface UpdateManagementClassDto {
  academicYearId?: string;
  code?: string;
  name?: string;
  programId?: string;
}

export type UpdateManagementClassError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateProgramData = Result & {
  data?: ProgramListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface UpdateProgramDto {
  code?: string;
  name?: string;
}

export type UpdateProgramError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};
