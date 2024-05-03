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
  CreateChangeRequestData,
  CreateChangeSessionRequestDto,
  FindOneSessionData,
  GetSessionByConditionData,
  GetSessionByConditionQuery,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sessions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags sessions
   * @name GetSessionByCondition
   * @summary Get Session By Condition
   * @request GET:/sessions
   * @secure
   * @response `200` `GetSessionByConditionData`
   */
  getSessionByCondition = (
    query: GetSessionByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<GetSessionByConditionData, any>({
      path: `/sessions`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags sessions
   * @name FindOneSession
   * @summary Find One Session
   * @request GET:/sessions/{id}
   * @secure
   * @response `200` `FindOneSessionData`
   */
  findOneSession = (id: string, params: RequestParams = {}) =>
    this.request<FindOneSessionData, any>({
      path: `/sessions/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags sessions
   * @name CreateChangeRequest
   * @summary Create Change Request
   * @request POST:/sessions/{id}/change
   * @secure
   * @response `200` `CreateChangeRequestData`
   * @response `201` `void`
   */
  createChangeRequest = (
    id: string,
    data: CreateChangeSessionRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateChangeRequestData, any>({
      path: `/sessions/${id}/change`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
