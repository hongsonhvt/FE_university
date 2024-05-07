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

export interface AcademicYearSimpleDto {
  code: string;
  id: string;
  name: string;
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

export type ApproveRequestData = object;

export type ApproveRequestError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type CancelRequestData = any;

export type CancelRequestError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface ChangeSessionRequestDto {
  id: string;
  newEndAt: string;
  newStartAt: string;
  oldEndAt: string;
  oldStartAt: string;
  session: SessionListItemDto;
  status: ChangeSessionRequestStatus;
  substituteTeacher?: TeacherSimpleDto;
}

export enum ChangeSessionRequestStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Cancelled = 'Cancelled',
}

export interface CourseClassDto {
  code: string;
  course: CourseListItemDto;
  endAt?: string;
  id: string;
  isoSlots: CourseClassSlotDto[];
  name: string;
  sessionCount: number;
  startAt: string;
  students: StudentSimpleDto[];
}

export interface CourseClassListItemDto {
  code: string;
  course: CourseListItemDto;
  endAt?: string;
  id: string;
  isoSlots: CourseClassSlotDto[];
  name: string;
  sessionCount: number;
  startAt: string;
  teacher: TeacherSimpleDto;
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
  programs: ProgramListItemDto[];
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

export type CreateChangeRequestData = Result & {
  data?: ChangeSessionRequestDto | null;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface CreateChangeSessionRequestDto {
  endAt: string;
  startAt: string;
  substituteTeacherId?: string;
}

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
  profile: CreateUserProfileDto;
  role: Role;
}

export interface CreateUserProfileDto {
  address?: string | null;
  firstName: string;
  isMale: boolean;
  lastName: string;
  middleName?: string | null;
  phoneNumber?: string | null;
  student?: StudentDto;
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

export type FindOneStudentData = Result & {
  data?: StudentDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type FindOneTeacherData = Result & {
  data?: TeacherDto[];
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

export type FindStudentsByConditionData = Result & {
  data?: StudentSimpleDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindStudentsByConditionQuery {
  studentId?: string;
}

export type FindTeachersByConditionData = Result & {
  data?: TeacherSimpleDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export interface FindTeachersByConditionQuery {
  teacherId?: string;
}

export type GetCourseClassScoresData = Result & {
  data?: StudentScoreListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetCourseClassScoresError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type GetCourseClassSessionsData = Result & {
  data?: SessionListItemDto[];
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

export type GetMyScoresData = Result & {
  data?: StudentScoreDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetMyScoresError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface GetMyScoresQuery {
  academicYearId?: string;
}

export type GetSessionByConditionData = Result & {
  data?: SessionListItemDto[];
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

export type GetStudentScoresData = Result & {
  data?: StudentScoreDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type GetStudentScoresError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface GetStudentScoresQuery {
  academicYearId?: string;
  id: string;
}

export type GetUserProfileData = Result & {
  data?: JwtUserDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type ImportProgramsData = Result & {
  data?: ProgramDto;
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type ImportProgramsError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export interface JwtUserDto {
  email?: string;
  role?: Role;
  sub?: string;
  profile?: CreateUserProfileDto;
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

export interface ManagementClassDto {
  academicYear: AcademicYearSimpleDto;
  code: string;
  id: string;
  name: string;
  program: ProgramListItemDto;
  students: StudentSimpleDto[];
}

export interface ManagementClassListItemDto {
  academicYear: AcademicYearSimpleDto;
  code: string;
  id: string;
  name: string;
}

export interface ProfileDto {
  firstName: string;
  id: string;
  lastName: string;
  middleName: string;
}

export interface ProgramDto {
  code: string;
  courses: CourseListItemDto[];
  createdAt: string;
  id: string;
  managementClass: ManagementClassListItemDto[];
  name: string;
}

export interface ProgramListItemDto {
  code: string;
  createdAt: string;
  id: string;
  name: string;
}

export type RejectRequestData = object;

export type RejectRequestError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

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

export type RemoveStudentData = Result & {
  data?: StudentSimpleDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveStudentError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type RemoveTeacherData = Result & {
  data?: TeacherSimpleDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type RemoveTeacherError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
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

export interface SessionDto {
  changeSessionRequests: ChangeSessionRequestDto[];
  courseClass: CourseClassListItemDto;
  endAt: string;
  id: string;
  startAt: string;
  substituteTeacher?: TeacherSimpleDto;
}

export interface SessionListItemDto {
  changeSessionRequests: ChangeSessionRequestDto[];
  courseClass: CourseClassListItemDto;
  endAt: string;
  id: string;
  startAt: string;
}

export interface StudentDto {
  id: string;
  managementClass: ManagementClassListItemDto;
  profile: ProfileDto;
  studentId: string;
}

export interface StudentScoreDto {
  academicYear: AcademicYearDto;
  id: string;
  scores: StudentScoreScoreDto[];
}

export interface StudentScoreListItemDto {
  id: string;
  profile: ProfileDto;
  score: number | null;
  studentId: string;
}

export interface StudentScoreScoreDto {
  courseClassId: string;
  id: string;
  score: number | null;
  studentId: string;
}

export interface StudentSimpleDto {
  id: string;
  profile: ProfileDto;
  studentId: string;
}

export interface TeacherDto {
  courseClasses: CourseClassListItemDto;
  id: string;
  profile: ProfileDto;
  teacherId: string;
}

export interface TeacherSimpleDto {
  id: string;
  profile: ProfileDto;
  teacherId: string;
}

export interface UpdateChangeSessionRequestDto {
  endAt?: string;
  startAt?: string;
  substituteTeacherId?: string;
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

export interface UpdateCourseClassScoreDto {
  data: UpdateCourseClassScoreItemDto[];
}

export interface UpdateCourseClassScoreItemDto {
  id: string;
  /**
   * @min 0
   * @max 10
   */
  score: number | null;
}

export type UpdateCourseClassScoresData = Result & {
  data?: StudentScoreListItemDto[];
  /** @example null */
  message?: string | null;
  success?: boolean;
};

export type UpdateCourseClassScoresError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};

export type UpdateCourseClassStudentsListData = Result & {
  data?: StudentSimpleDto[];
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

export type UpdateRequestData = any;

export type UpdateRequestError = {
  /** @example null */
  data?: object | null;
  message?: string;
  /** @example false */
  success?: boolean;
};
