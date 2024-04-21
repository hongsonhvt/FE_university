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

import { LoginData, LoginError, LoginModel } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags auth
 * @name Login
 * @summary Login
 * @request POST:/auth/login
 * @response `200` `LoginData` Login JWT token
 * @response `401` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  login = (data: LoginModel, params: RequestParams = {}) =>
    this.request<LoginData, LoginError>({
      path: `/auth/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
