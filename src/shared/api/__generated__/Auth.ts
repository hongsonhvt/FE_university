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

import { LoginData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags auth
   * @name Login
   * @request POST:/auth/login
   * @response `200` `LoginData` Login JWT token
   * @response `201` `void`
   */
  login = (params: RequestParams = {}) =>
    this.request<LoginData, any>({
      path: `/auth/login`,
      method: 'POST',
      ...params,
    });
}
