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
  CreateUserData,
  CreateUserDto,
  GetUserProfileData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags users
   * @name CreateUser
   * @summary Create User
   * @request POST:/users
   * @secure
   * @response `201` `CreateUserData`
   */
  createUser = (data: CreateUserDto, params: RequestParams = {}) =>
    this.request<CreateUserData, any>({
      path: `/users`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags users
   * @name GetUserProfile
   * @summary Get User Profile
   * @request GET:/users/me
   * @secure
   * @response `200` `GetUserProfileData`
   */
  getUserProfile = (params: RequestParams = {}) =>
    this.request<GetUserProfileData, any>({
      path: `/users/me`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
