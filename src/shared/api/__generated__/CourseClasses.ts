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
  CreateOutput,
  FindAllData,
  FindAllQuery,
  FindOneResult,
  GetSessionsData,
  RemoveResult,
  UpdateCourseClassDto,
  UpdateCourseClassStudentsListDto,
  UpdateData,
  UpdateStudentsListData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class CourseClasses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Create
   * @request POST:/course-classes
   * @response `201` `CreateOutput`
   */
  create = (data: CreateCourseClassDto, params: RequestParams = {}) =>
    this.request<CreateOutput, any>({
      path: `/course-classes`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name FindAll
   * @request GET:/course-classes
   * @response `200` `FindAllData`
   */
  findAll = (query: FindAllQuery, params: RequestParams = {}) =>
    this.request<FindAllData, any>({
      path: `/course-classes`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @name FindOne
   * @request GET:/course-classes/{id}
   * @response `200` `FindOneResult`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneResult, any>({
      path: `/course-classes/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name Update
   * @request PATCH:/course-classes/{id}
   * @response `200` `UpdateData`
   */
  update = (
    id: string,
    data: UpdateCourseClassDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateData, any>({
      path: `/course-classes/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name Remove
   * @request DELETE:/course-classes/{id}
   * @response `200` `RemoveResult`
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveResult, any>({
      path: `/course-classes/${id}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @name GetSessions
   * @request GET:/course-classes/{id}/sessions
   * @response `200` `GetSessionsData`
   */
  getSessions = (id: string, params: RequestParams = {}) =>
    this.request<GetSessionsData, any>({
      path: `/course-classes/${id}/sessions`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name UpdateStudentsList
   * @request PUT:/course-classes/{id}/students
   * @response `200` `UpdateStudentsListData`
   */
  updateStudentsList = (
    id: string,
    data: UpdateCourseClassStudentsListDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateStudentsListData, any>({
      path: `/course-classes/${id}/students`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
