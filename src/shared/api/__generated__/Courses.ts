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
  CreateCourseData,
  CreateCourseDto,
  CreateCourseError,
  FindCourseByConditionData,
  FindCourseByConditionQuery,
  FindOneCourseData,
  RemoveCourseData,
  RemoveCourseError,
  UpdateCourseData,
  UpdateCourseDto,
  UpdateCourseError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Courses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags courses
 * @name CreateCourse
 * @summary Create Course
 * @request POST:/courses
 * @secure
 * @response `201` `CreateCourseData`
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
  createCourse = (data: CreateCourseDto, params: RequestParams = {}) =>
    this.request<CreateCourseData, CreateCourseError>({
      path: `/courses`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags courses
   * @name FindCourseByCondition
   * @summary Find Course By Condition
   * @request GET:/courses
   * @secure
   * @response `200` `FindCourseByConditionData`
   */
  findCourseByCondition = (
    query: FindCourseByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindCourseByConditionData, any>({
      path: `/courses`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags courses
   * @name FindOneCourse
   * @summary Find One Course
   * @request GET:/courses/{id}
   * @secure
   * @response `200` `FindOneCourseData`
   */
  findOneCourse = (id: string, params: RequestParams = {}) =>
    this.request<FindOneCourseData, any>({
      path: `/courses/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags courses
 * @name UpdateCourse
 * @summary Update Course
 * @request PATCH:/courses/{id}
 * @secure
 * @response `200` `UpdateCourseData`
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
  updateCourse = (
    id: string,
    data: UpdateCourseDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateCourseData, UpdateCourseError>({
      path: `/courses/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
 * No description
 *
 * @tags courses
 * @name RemoveCourse
 * @summary Remove Course
 * @request DELETE:/courses/{id}
 * @secure
 * @response `200` `RemoveCourseData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  removeCourse = (id: string, params: RequestParams = {}) =>
    this.request<RemoveCourseData, RemoveCourseError>({
      path: `/courses/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
