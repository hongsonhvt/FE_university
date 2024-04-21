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
  CreateCourseClassDto,
  CreateFail,
  CreateOutput,
  FindByConditionData,
  FindByConditionQuery,
  FindOneResult,
  GetSessionsData,
  GetSessionsError,
  UpdateCourseClassStudentsListDto,
  UpdateStudentsListData,
  UpdateStudentsListError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class CourseClasses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags course-classes
 * @name Create
 * @summary Create
 * @request POST:/course-classes
 * @secure
 * @response `201` `CreateOutput`
 * @response `409` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  create = (data: CreateCourseClassDto, params: RequestParams = {}) =>
    this.request<CreateOutput, CreateFail>({
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
   * @name FindByCondition
   * @summary Find By Condition
   * @request GET:/course-classes
   * @secure
   * @response `200` `FindByConditionData`
   */
  findByCondition = (query: FindByConditionQuery, params: RequestParams = {}) =>
    this.request<FindByConditionData, any>({
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
   * @name FindOne
   * @summary Find One
   * @request GET:/course-classes/{id}
   * @secure
   * @response `200` `FindOneResult`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneResult, any>({
      path: `/course-classes/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags course-classes
 * @name GetSessions
 * @summary Get Sessions
 * @request GET:/course-classes/{id}/sessions
 * @secure
 * @response `200` `GetSessionsData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  getSessions = (id: string, params: RequestParams = {}) =>
    this.request<GetSessionsData, GetSessionsError>({
      path: `/course-classes/${id}/sessions`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags course-classes
 * @name UpdateStudentsList
 * @summary Update Students List
 * @request PUT:/course-classes/{id}/students
 * @secure
 * @response `200` `UpdateStudentsListData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  updateStudentsList = (
    id: string,
    data: UpdateCourseClassStudentsListDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateStudentsListData, UpdateStudentsListError>({
      path: `/course-classes/${id}/students`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
