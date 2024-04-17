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

export interface AccessToken {
  access_token: string;
}

export type AddCoursesData = any;

export interface AddCoursesDto {
  courses: string[];
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

export type CreateData = any;

export type CreateData1 = any;

export interface CreateManagementClassDto {
  academicYearId: string;
  code: string;
  name: string;
  programId: string;
}

export type CreateOutput = any;

export interface CreateProgramDto {
  code: string;
  name: string;
}

export type CreateResult = any;

export type CreateResult1 = any;

export type CreateResult2 = any;

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

export type FindAllData = any;

export interface FindAllQuery {
  code?: string;
  courseId?: string;
  endAt: string;
  name?: string;
  sessionCount?: number;
  startAt: string;
}

export type FindByConditionData = any;

export type FindByConditionOutput = any;

export interface FindByConditionQuery {
  code?: string;
  name?: string;
  programIds?: string[];
}

export interface FindByConditionQuery2 {
  academicYearId?: string;
  code?: string;
  name?: string;
  programId?: string;
}

export interface FindByConditionQuery4 {
  code?: string;
  name?: string;
}

export type FindByConditionResult = any;

export type FindInRangeData = any;

export type FindOneData = any;

export type FindOneOutput = any;

export type FindOneOutput1 = any;

export type FindOneOutput2 = any;

export type FindOneResult = any;

export type GetCurrentData = any;

export type GetProfileData = Result & {
  data?: JwtUserDto;
  message?: string;
  success?: boolean;
};

export type GetSessionsData = any;

export interface JwtUserDto {
  email: string;
  role: Role;
  sub: string;
}

export type LoginData = Result & {
  data?: AccessToken;
  message?: string;
  success?: boolean;
};

export type RemoveData = any;

export type RemoveOutput = any;

export type RemoveResult = string;

export type RemoveResult1 = any;

export type RemoveResult2 = any;

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

export interface UpdateCourseClassDto {
  code?: string;
  courseId?: string;
  endAt?: string;
  isoSlots?: CreateCourseClassSlotDto[];
  name?: string;
  sessionCount?: number;
  startAt?: string;
}

export interface UpdateCourseClassStudentsListDto {
  studentIds: string[];
}

export interface UpdateCourseDto {
  code?: string;
  name?: string;
  programIds?: string[];
}

export type UpdateCurrentData = any;

export type UpdateData = string;

export type UpdateData1 = any;

export interface UpdateManagementClassDto {
  academicYearId?: string;
  code?: string;
  name?: string;
  programId?: string;
}

export type UpdateOutput = any;

export interface UpdateProgramDto {
  code?: string;
  name?: string;
}

export type UpdateResult = any;

export type UpdateStudentsListData = any;
