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

export type AddCoursesData = Result & {
  data?: ProgramDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface AddCoursesDto {
  courses: string[];
}

export type AddCoursesError = {
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

export interface CreateAcademicYearDto {
  /**
   * @min 2010
   * @max 2050
   */
  startYear: number;
}

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
}

export interface CreateCourseClassSlotDto {
  endAt: string;
  startAt: string;
}

export interface CreateCourseDto {
  code: string;
  name: string;
  programIds: string[];
}

export type CreateData = Result & {
  data?: AcademicYearDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type CreateData1 = Result & {
  data?: ProgramListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type CreateError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateErrorData = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateFail = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateFails = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CreateHttpError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface CreateManagementClassDto {
  academicYearId: string;
  code: string;
  name: string;
  programId: string;
}

export type CreateOutput = Result & {
  data?: CourseClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type CreateOutput1 = Result & {
  data?: ManagementClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface CreateProgramDto {
  code: string;
  name: string;
}

export type CreateResult = any;

export type CreateResult1 = Result & {
  data?: CourseDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

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

export type FindByConditionData = Result & {
  data?: CourseClassListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindByConditionOutput = Result & {
  data?: ManagementClassListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindByConditionQuery {
  code?: string;
  name?: string;
}

export interface FindByConditionQuery2 {
  code?: string;
  name?: string;
  programIds?: string[];
}

export interface FindByConditionQuery4 {
  academicYearId?: string;
  code?: string;
  name?: string;
  programId?: string;
}

export interface FindByConditionQuery6 {
  code?: string;
  name?: string;
}

export type FindByConditionResult = Result & {
  data?: CourseListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindByConditionResult1 = Result & {
  data?: ProgramListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindInRangeData = Result & {
  data?: AcademicYearDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindInRangeQuery {
  end?: number;
  start?: number;
}

export type FindOneData = Result & {
  data?: AcademicYearDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneOutput = Result & {
  data?: CourseDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneResult = Result & {
  data?: CourseClassDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneResult1 = Result & {
  data?: ManagementClassDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneResult2 = Result & {
  data?: ProgramDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetCurrentData = Result & {
  data?: AcademicYearDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetProfileData = Result & {
  data?: JwtUserDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetSessionsData = any;

export type GetSessionsError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
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

export type RemoveData = Result & {
  data?: AcademicYearDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveData1 = Result & {
  data?: ProgramListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveErrorData = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveFail = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveFails = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveOutput = Result & {
  data?: ManagementClassDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveResult = Result & {
  data?: CourseDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

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

export interface StudentDto {
  profile: StudentProfileDto;
}

export interface StudentProfileDto {
  firstName: string;
  id: string;
  lastName: string;
}

export interface UpdateCourseClassStudentsListDto {
  studentIds: string[];
}

export interface UpdateCourseDto {
  code?: string;
  name?: string;
  programIds?: string[];
}

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

export type UpdateData = Result & {
  data?: CourseDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type UpdateError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateFail = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateFails = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface UpdateManagementClassDto {
  academicYearId?: string;
  code?: string;
  name?: string;
  programId?: string;
}

export type UpdateOutput = Result & {
  data?: ProgramListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface UpdateProgramDto {
  code?: string;
  name?: string;
}

export type UpdateResult = Result & {
  data?: ManagementClassListItemDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type UpdateStudentsListData = Result & {
  data?: CourseClassDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type UpdateStudentsListError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};
