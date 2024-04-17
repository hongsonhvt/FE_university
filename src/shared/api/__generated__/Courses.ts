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
  CreateResult1,
  FindByConditionData,
  FindByConditionQuery,
  FindOneOutput,
  RemoveOutput,
  UpdateCourseDto,
  UpdateResult,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Courses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Create
   * @request POST:/courses
   * @response `201` `CreateResult1`
   */
  create = (data: CreateCourseDto, params: RequestParams = {}) =>
    this.request<CreateResult1, any>({
      path: `/courses`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name FindByCondition
   * @request GET:/courses
   * @response `200` `FindByConditionData`
   */
  findByCondition = (query: FindByConditionQuery, params: RequestParams = {}) =>
    this.request<FindByConditionData, any>({
      path: `/courses`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @name FindOne
   * @request GET:/courses/{id}
   * @response `200` `FindOneOutput`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneOutput, any>({
      path: `/courses/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name Update
   * @request PATCH:/courses/{id}
   * @response `200` `UpdateResult`
   */
  update = (id: string, data: UpdateCourseDto, params: RequestParams = {}) =>
    this.request<UpdateResult, any>({
      path: `/courses/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name Remove
   * @request DELETE:/courses/{id}
   * @response `200` `RemoveOutput`
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveOutput, any>({
      path: `/courses/${id}`,
      method: 'DELETE',
      ...params,
    });
}
