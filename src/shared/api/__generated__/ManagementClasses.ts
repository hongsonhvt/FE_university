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
  CreateData1,
  CreateManagementClassDto,
  FindByConditionQuery2,
  FindByConditionResult,
  FindOneOutput1,
  RemoveResult1,
  UpdateManagementClassDto,
  UpdateOutput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ManagementClasses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Create
   * @request POST:/management-classes
   * @response `201` `CreateData1`
   */
  create = (data: CreateManagementClassDto, params: RequestParams = {}) =>
    this.request<CreateData1, any>({
      path: `/management-classes`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name FindByCondition
   * @request GET:/management-classes
   * @response `200` `FindByConditionResult`
   */
  findByCondition = (
    query: FindByConditionQuery2,
    params: RequestParams = {},
  ) =>
    this.request<FindByConditionResult, any>({
      path: `/management-classes`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @name FindOne
   * @request GET:/management-classes/{id}
   * @response `200` `FindOneOutput1`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneOutput1, any>({
      path: `/management-classes/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name Update
   * @request PATCH:/management-classes/{id}
   * @response `200` `UpdateOutput`
   */
  update = (
    id: string,
    data: UpdateManagementClassDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateOutput, any>({
      path: `/management-classes/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name Remove
   * @request DELETE:/management-classes/{id}
   * @response `200` `RemoveResult1`
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveResult1, any>({
      path: `/management-classes/${id}`,
      method: 'DELETE',
      ...params,
    });
}
