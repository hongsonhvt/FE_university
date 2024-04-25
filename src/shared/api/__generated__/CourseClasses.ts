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

import {
  CreateCourseClassData,
  CreateCourseClassDto,
  CreateCourseClassError,
  FindCourseClassByConditionData,
  FindCourseClassByConditionQuery,
  FindOneCourseClassData,
  GetCourseClassSessionsData,
  GetCourseClassSessionsError,
  RemoveCourseClassData,
  RemoveCourseClassError,
  UpdateCourseClassData,
  UpdateCourseClassDto,
  UpdateCourseClassError,
  UpdateCourseClassStudentsListData,
  UpdateCourseClassStudentsListDto,
  UpdateCourseClassStudentsListError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class CourseClasses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags course-classes
 * @name CreateCourseClass
 * @summary Create Course Class
 * @request POST:/course-classes
 * @secure
 * @response `201` `CreateCourseClassData`
 * @response `409` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  createCourseClass = (
    data: CreateCourseClassDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateCourseClassData, CreateCourseClassError>({
      path: `/course-classes`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags course-classes
   * @name FindCourseClassByCondition
   * @summary Find Course Class By Condition
   * @request GET:/course-classes
   * @secure
   * @response `200` `FindCourseClassByConditionData`
   */
  findCourseClassByCondition = (
    query: FindCourseClassByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindCourseClassByConditionData, any>({
      path: `/course-classes`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags course-classes
   * @name FindOneCourseClass
   * @summary Find One Course Class
   * @request GET:/course-classes/{id}
   * @secure
   * @response `200` `FindOneCourseClassData`
   */
  findOneCourseClass = (id: string, params: RequestParams = {}) =>
    this.request<FindOneCourseClassData, any>({
      path: `/course-classes/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags course-classes
 * @name UpdateCourseClass
 * @summary Update Course Class
 * @request PATCH:/course-classes/{id}
 * @secure
 * @response `200` `UpdateCourseClassData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 * @response `409` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  updateCourseClass = (
    id: string,
    data: UpdateCourseClassDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateCourseClassData, UpdateCourseClassError>({
      path: `/course-classes/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
 * No description
 *
 * @tags course-classes
 * @name RemoveCourseClass
 * @summary Remove Course Class
 * @request DELETE:/course-classes/{id}
 * @secure
 * @response `200` `RemoveCourseClassData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  removeCourseClass = (id: string, params: RequestParams = {}) =>
    this.request<RemoveCourseClassData, RemoveCourseClassError>({
      path: `/course-classes/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags course-classes
 * @name GetCourseClassSessions
 * @summary Get Course Class Sessions
 * @request GET:/course-classes/{id}/sessions
 * @secure
 * @response `200` `GetCourseClassSessionsData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  getCourseClassSessions = (id: string, params: RequestParams = {}) =>
    this.request<GetCourseClassSessionsData, GetCourseClassSessionsError>({
      path: `/course-classes/${id}/sessions`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags course-classes
 * @name UpdateCourseClassStudentsList
 * @summary Update Course Class Students List
 * @request PUT:/course-classes/{id}/students
 * @secure
 * @response `200` `UpdateCourseClassStudentsListData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  updateCourseClassStudentsList = (
    id: string,
    data: UpdateCourseClassStudentsListDto,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateCourseClassStudentsListData,
      UpdateCourseClassStudentsListError
    >({
      path: `/course-classes/${id}/students`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
