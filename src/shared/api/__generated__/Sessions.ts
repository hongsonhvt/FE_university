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
  FindOneSessionData,
  GetSessionByConditionData,
  GetSessionByConditionQuery,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

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
}
