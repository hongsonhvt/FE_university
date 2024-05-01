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
  CreateChangeSessionRequestDto,
  CreateData,
  FindAllData,
  FindOneData,
  RemoveData,
  UpdateChangeSessionRequestDto,
  UpdateData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ChangeSessionRequests<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Create
   * @request POST:/change-session-requests
   * @response `201` `CreateData`
   */
  create = (data: CreateChangeSessionRequestDto, params: RequestParams = {}) =>
    this.request<CreateData, any>({
      path: `/change-session-requests`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name FindAll
   * @request GET:/change-session-requests
   * @response `200` `FindAllData`
   */
  findAll = (params: RequestParams = {}) =>
    this.request<FindAllData, any>({
      path: `/change-session-requests`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name FindOne
   * @request GET:/change-session-requests/{id}
   * @response `200` `FindOneData`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneData, any>({
      path: `/change-session-requests/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name Update
   * @request PATCH:/change-session-requests/{id}
   * @response `200` `UpdateData`
   */
  update = (
    id: string,
    data: UpdateChangeSessionRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateData, any>({
      path: `/change-session-requests/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name Remove
   * @request DELETE:/change-session-requests/{id}
   * @response `200` `RemoveData`
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveData, any>({
      path: `/change-session-requests/${id}`,
      method: 'DELETE',
      ...params,
    });
}
