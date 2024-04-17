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

import { CreateResult, CreateUserDto, GetProfileData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags users
   * @name Create
   * @request POST:/users
   * @response `201` `CreateResult`
   */
  create = (data: CreateUserDto, params: RequestParams = {}) =>
    this.request<CreateResult, any>({
      path: `/users`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name GetProfile
   * @request GET:/users/me
   * @response `200` `GetProfileData`
   */
  getProfile = (params: RequestParams = {}) =>
    this.request<GetProfileData, any>({
      path: `/users/me`,
      method: 'GET',
      ...params,
    });
}
