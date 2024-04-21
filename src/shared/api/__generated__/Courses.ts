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
  CreateCourseDto,
  CreateFails,
  CreateResult1,
  FindByConditionQuery2,
  FindByConditionResult,
  FindOneOutput,
  RemoveFail,
  RemoveResult,
  UpdateCourseDto,
  UpdateData,
  UpdateError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Courses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags courses
 * @name Create
 * @summary Create
 * @request POST:/courses
 * @secure
 * @response `201` `CreateResult1`
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
  create = (data: CreateCourseDto, params: RequestParams = {}) =>
    this.request<CreateResult1, CreateFails>({
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
   * @name FindByCondition
   * @summary Find By Condition
   * @request GET:/courses
   * @secure
   * @response `200` `FindByConditionResult`
   */
  findByCondition = (
    query: FindByConditionQuery2,
    params: RequestParams = {},
  ) =>
    this.request<FindByConditionResult, any>({
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
   * @name FindOne
   * @summary Find One
   * @request GET:/courses/{id}
   * @secure
   * @response `200` `FindOneOutput`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneOutput, any>({
      path: `/courses/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags courses
 * @name Update
 * @summary Update
 * @request PATCH:/courses/{id}
 * @secure
 * @response `200` `UpdateData`
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
  update = (id: string, data: UpdateCourseDto, params: RequestParams = {}) =>
    this.request<UpdateData, UpdateError>({
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
 * @name Remove
 * @summary Remove
 * @request DELETE:/courses/{id}
 * @secure
 * @response `200` `RemoveResult`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveResult, RemoveFail>({
      path: `/courses/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
